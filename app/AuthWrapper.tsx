"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
	isLoggedIn: boolean;
	login: (address: string, privateKey: string) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

export const AuthWrapper: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const storedAddress = sessionStorage.getItem("walletAddress");
		const storedPrivateKey = sessionStorage.getItem("privateKey");

		if (storedAddress && storedPrivateKey) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, []);

	const login = (address: string, privateKey: string) => {
		sessionStorage.setItem("walletAddress", address);
		sessionStorage.setItem("privateKey", privateKey);
		setIsLoggedIn(true);
	};

	const logout = () => {
		sessionStorage.removeItem("walletAddress");
		sessionStorage.removeItem("privateKey");
		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
