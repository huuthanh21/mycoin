"use client";

import { useAuth } from "@/app/AuthWrapper";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectedRouteProps {
	children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
	const { isLoggedIn } = useAuth();
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		if (!isLoggedIn && !pathname.startsWith("/wallet/access")) {
			router.push("/wallet/access");
		}
	}, [isLoggedIn, router, pathname]);

	if (!isLoggedIn) {
		return null; // or a loading indicator
	}

	return <>{children}</>;
};

export default ProtectedRoute;
