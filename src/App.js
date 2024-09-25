import { Route, Routes, Navigate } from "react-router-dom";
// import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import UserAccount from "./components/RunModel";
import Home from "./components/Home";
import Admin from "./components/Admin";
import GetUsers from "./components/GetAllUsers";
import UAccount from "./components/UserAcc";
import ServicePage from "./components/Service"
import AboutUs from "./components/AboutUs";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{/* {user && <Route path="/" exact element={<Main />} />} */}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/Model" exact element={<UserAccount />} />
			<Route path="/home" exact element={<Home />} />
			<Route path="/admin" exact element={<Admin />} />
			<Route path="/getUsers" exact element={<GetUsers />} />
			<Route path="/userAcc" exact element={<UAccount />} />
			<Route path="/service" exact element={<ServicePage />} />
			<Route path="/aboutUs" exact element={<AboutUs />} />
			{/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
		</Routes>
	);
}

export default App;
