import { Routes, Route } from "react-router-dom";

import SignUpPage from "./pages/auth/signup/signupPage";
import HomePage from "./pages/home/homePage";
import LoginPage from "./pages/auth/login/login";
import NotificationsPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";

import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";

import "./App.css";

function App() {
  return (
   
     <div className='flex max-w-6xl mx-auto'>

			<Sidebar/>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path="/notifications" element={<NotificationsPage />} />
				<Route path="/profile/:username" element={<ProfilePage/>} />
			</Routes>
			<RightPanel/>
		</div>
    
  );
}

export default App;
