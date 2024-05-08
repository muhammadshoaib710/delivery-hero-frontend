import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			setUser(user);
			setIsLogged(true);
		}
	}, []);

	const logoutHandler = async () => {
		try {
			const response = await fetch('/api/auth/logout', {
				method: 'POST', // or 'GET' depending on your server's configuration
				headers: { 'Content-Type': 'application/json' }, // Include credentials (cookies) in the request
			});
			const data = await response.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.removeItem('user');
			setUser(null);
			setIsLogged(false);
			toast.success('Logged out successfully');
			window.location.reload();
		} catch (error) {
			console.error(error);
			toast.error(error.message);
		}
	};

	return (
		<AuthContext.Provider
			value={{ user, setUser, logoutHandler, isLogged, setIsLogged }}
		>
			{children}
		</AuthContext.Provider>
	);
}
