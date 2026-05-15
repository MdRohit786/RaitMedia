import { Routes, Route, Navigate } from "react-router-dom";

import SignUpPage from "./pages/auth/signup/signupPage";
import HomePage from "./pages/home/homePage";
import LoginPage from "./pages/auth/login/login";
import NotificationsPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";

import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";

import "./App.css";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./components/common/LoadingSpinner";

function App() {
	const { data: authUser, isLoading } = useQuery({
		queryKey: ["authUser"],
		queryFn: async () => {
			try {
				const res = await fetch("/api/auth/getme");
				const data = await res.json();

				if (data.error) return null;
				if (!res.ok) throw new Error(data.error || "Failed to fetch user");

				return data;
			} catch (error) {
				throw new Error(error.message || "Failed to fetch user", {
					cause: error,
				});
			}
		},
		retry: false,
	});
	if(isLoading){
		return(
			<div className="h-screen flex justify-center items-center">
				<LoadingSpinner size="lg"/>
			</div>
		)
	}
	
  return (
   
     <div className='flex max-w-6xl mx-auto'>

			{ authUser && <Sidebar/>}
			<Routes>
				<Route path='/' element={authUser ? <HomePage authUser={authUser} /> : <Navigate to='/login' />} />
				<Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to='/' />} />				
				<Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to='/' />} />
				<Route path='/notifications' element={authUser ? <NotificationsPage /> : <Navigate to='/login' />} />
				<Route path='/profile/:username' element={authUser ? <ProfilePage authUser={authUser} /> : <Navigate to='/login' />} />
			</Routes>
			{authUser && <RightPanel/>}
			<Toaster/>
		</div>
    
  );
}

export default App;
