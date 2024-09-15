from flask import Flask
from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS
from function import *
from keras.utils import to_categorical
from keras.models import model_from_json
from keras.layers import LSTM, Dense
from keras.callbacks import TensorBoard
import cv2
import numpy as np
import mediapipe as mp
from flask_pymongo import PyMongo
# from flask_bcrypt import Bcrypt  # Import Bcrypt
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash
from werkzeug.security import generate_password_hash, check_password_hash
import bcrypt



app = Flask(__name__)
# Allow all origins or specify the origin of your React app
CORS(app, resources={r"/*": {"origins": "*"}})  # You can specify origins if needed
# bcrypt = Bcrypt(app) 

# Securely generate and set the secret key
app.config['SECRET_KEY'] = 'bc0ef7a04a1162d1d00a7846440deb2d5343851f41fc7fbe8423cf7fd853c68a'

# MongoDB Client Setup
client = MongoClient("mongodb+srv://samithashiwankara46:JVBbNvHUPDrj4EXV@cluster0.t9ppf.mongodb.net/")
UserCollection = client.user_db
Users = UserCollection.users

# Load the model
json_file = open("model.json", "r")
model_json = json_file.read()
json_file.close()
model = model_from_json(model_json)
model.load_weights("model.h5")

colors = [(245,117,16)] * 20
print(len(colors))

def prob_viz(res, actions, input_frame, colors, threshold):
    output_frame = input_frame.copy()
    for num, prob in enumerate(res):
        cv2.rectangle(output_frame, (0,60+num*40), (int(prob*100), 90+num*40), colors[num], -1)
        cv2.putText(output_frame, actions[num], (0, 85+num*40), cv2.FONT_HERSHEY_SIMPLEX, 1, (255,255,255), 2, cv2.LINE_AA)
    return output_frame

@app.route('/run-model', methods=['POST'])
def run_model():
    # 1. New detection variables
    sequence = []
    sentence = []
    accuracy = []
    predictions = []
    threshold = 0.8

    cap = cv2.VideoCapture(0)

    # Set mediapipe model 
    with mp.solutions.hands.Hands(
        model_complexity=0,
        min_detection_confidence=0.5,
        min_tracking_confidence=0.5) as hands:
        while cap.isOpened():

            # Read feed
            ret, frame = cap.read()

            # Make detections
            cropframe = frame[40:400, 0:300]
            frame = cv2.rectangle(frame, (0, 40), (300, 400), 255, 2)
            image, results = mediapipe_detection(cropframe, hands)
            
            # 2. Prediction logic
            keypoints = extract_keypoints(results)
            sequence.append(keypoints)
            sequence = sequence[-30:]

            try: 
                if len(sequence) == 30:
                    res = model.predict(np.expand_dims(sequence, axis=0))[0]
                    print(actions[np.argmax(res)])
                    predictions.append(np.argmax(res))
                    
                    # 3. Viz logic
                    if np.unique(predictions[-10:])[0]==np.argmax(res): 
                        if res[np.argmax(res)] > threshold: 
                            if len(sentence) > 0: 
                             if actions[np.argmax(res)] != sentence[-1]:
                                sentence.append(actions[np.argmax(res)])
                                accuracy.append(str(res[np.argmax(res)]*100))
                        else:
                            sentence.append(actions[np.argmax(res)])
                            accuracy.append(str(res[np.argmax(res)]*100)) 

                if len(sentence) > 1: 
                    sentence = sentence[-1:]
                    accuracy=accuracy[-1:]


                   # Viz probabilities
                # frame = prob_viz(res, actions, frame, colors,threshold)
            except Exception as e:
            # print(e)
             pass

            
            cv2.rectangle(frame, (0, 0), (300, 40), (245, 117, 16), -1)
            cv2.putText(frame, "Output: -"+' '.join(sentence)+''.join(accuracy), (3, 30), 
                         cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1, cv2.LINE_AA)
                
            # Show to screen
            cv2.imshow('Sign Language Recognition', frame)

            # Break gracefully
            if cv2.waitKey(10) & 0xFF == ord('q'):
                break
        cap.release()
        cv2.destroyAllWindows()

    return "Model Running"

@app.route('/api/users', methods=['POST'])
def signup():
    data = request.json
    firstName = data.get('firstName')
    email = data.get('email')
    password = data.get('password')
    
    # Check if the user already exists in the database
    existing_user = Users.find_one({'email': email})
    if existing_user:
        return jsonify({'message': 'User with this email already exists'}), 400
    
    # If the email is unique, insert the new user
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    user = {
        'firstName': data['firstName'],
        'email': email,
        'password': hashed_password.decode('utf-8')
    }
    Users.insert_one(user)
    
    return jsonify({'message': 'User registered successfully!'}), 201


app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'bc0ef7a04a1162d1d00a7846440deb2d5343851f41fc7fbe8423cf7fd853c68a')

# MongoDB Client Setup
client = MongoClient("mongodb+srv://samithashiwankara46:JVBbNvHUPDrj4EXV@cluster0.t9ppf.mongodb.net/")
UserCollection = client.user_db
Users = UserCollection.users

# Load the model
# (Assuming model loading code here)

# @app.route('/api/auth', methods=['POST'])
# def login():
#     data = request.json
#     email = data.get('email')
#     password = data.get('password')

#     user = Users.find_one({'email': email})
#     if not user:
#         return jsonify({'message': 'Invalid email or password'}), 401

#     if not check_password_hash(user['password'], password):
#         return jsonify({'message': 'Invalid email or password'}), 401

#     # Return a response with user information or a simple success message
#     return jsonify({
#         'message': 'Login successful',
#         'role': user.get('role', 'user')  # Include role in response
#     }), 200
# 
@app.route('/api/auth', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    print(f"Received email: {email}, password: {password}")

    # Find the user by email
    user = Users.find_one({'email': email})
    if user is None:
        print("User not found")
        return jsonify({'message': 'Invalid email or password'}), 401

    print(f"User found: {user}")

    # Verify the passwordS
    if not bcrypt.checkpw(password.encode('utf-8'), user['password'].encode('utf-8')):
        print("Password does not match")
        return jsonify({'error': 'Invalid email or password'}), 401
    
    print("Authentication successful")

    # Authentication successful, return success response with user data
    response_data = {
        'message': 'Login successful',
        'user': {
            'firstName': user.get('firstName'),
            'email': user.get('email'),
            'password': user.get('password')
        }
    }
    return jsonify(response_data), 200
    
    
app.config["MONGO_URI"] = "mongodb+srv://samithashiwankara46:JVBbNvHUPDrj4EXV@cluster0.t9ppf.mongodb.net/"
mongo = PyMongo(app)

@app.route('/api/v1/Register/getall', methods=['GET'])
def get_all_users():
    users = Users.find()
    user_list = []
    for user in users:
        user['_id'] = str(user['_id'])  # Convert ObjectId to string
        user_list.append(user)
    return jsonify(user_list), 200

@app.route('/api/v1/Register/edit/<user_id>', methods=['PUT'])
def edit_user(user_id):
    data = request.json
    Users.update_one(
        {'_id': ObjectId(user_id)},
        {'$set': {
            'firstName': data.get('firstName'),
            'email': data.get('email')
        }}
    )
    return jsonify({'message': 'User updated successfully'}), 200


# Route to delete a user
@app.route('/api/v1/Register/delete/<user_id>', methods=['DELETE'])
def remove_user(user_id):
    Users.delete_one({'_id': ObjectId(user_id)})
    return jsonify({'message': 'User deleted successfully'}), 200


if __name__ == '__main__':
    app.run(debug=True)
