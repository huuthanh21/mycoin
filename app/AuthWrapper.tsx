"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
	getPrivateKey: () => null | string;
	isLoggedIn: boolean;
	login: (address: string, privateKey: string) => void;
	logout: () => void;
	walletAddress: null | string;
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
	const [walletAddress, setWalletAddress] = useState<null | string>(null);

	useEffect(() => {
		const storedAddress = sessionStorage.getItem("walletAddress");
		const storedPrivateKey = sessionStorage.getItem("privateKey");

		if (storedAddress && storedPrivateKey) {
			setIsLoggedIn(true);
			setWalletAddress(storedAddress);
		} else {
			setIsLoggedIn(false);
			setWalletAddress(null);
		}
	}, []);

	const login = (address: string, privateKey: string) => {
		sessionStorage.setItem("walletAddress", address);
		sessionStorage.setItem("privateKey", privateKey);
		setIsLoggedIn(true);
		setWalletAddress(address);
	};

	const logout = () => {
		sessionStorage.removeItem("walletAddress");
		sessionStorage.removeItem("privateKey");
		setIsLoggedIn(false);
		setWalletAddress(null);
	};

	const getPrivateKey = () => {
		return sessionStorage.getItem("privateKey");
	};

	return (
		<AuthContext.Provider
			value={{ getPrivateKey, isLoggedIn, login, logout, walletAddress }}
		>
			{children}
		</AuthContext.Provider>
	);
};
