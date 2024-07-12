"use client";

import { baselightTheme } from "@/utils/theme/DefaultColors";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import { AuthWrapper } from "./AuthWrapper";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<AuthWrapper>
					<ThemeProvider theme={baselightTheme}>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />
						{children}
					</ThemeProvider>
				</AuthWrapper>
			</body>
		</html>
	);
}
