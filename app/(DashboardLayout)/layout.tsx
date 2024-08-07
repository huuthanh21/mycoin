"use client";
import Header from "@/app/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/app/(DashboardLayout)/layout/sidebar/Sidebar";
import { Box, Container, styled } from "@mui/material";
import React, { useState } from "react";

const MainWrapper = styled("div")(() => ({
	display: "flex",
	minHeight: "100vh",
	width: "100%",
}));

const PageWrapper = styled("div")(() => ({
	backgroundColor: "transparent",
	display: "flex",
	flexDirection: "column",
	flexGrow: 1,
	paddingBottom: "60px",
	zIndex: 1,
}));

interface Props {
	children: React.ReactNode;
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isSidebarOpen, setSidebarOpen] = useState(true);
	const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
	return (
		<MainWrapper className="mainwrapper">
			{/* ------------------------------------------- */}
			{/* Sidebar */}
			{/* ------------------------------------------- */}
			<Sidebar
				isMobileSidebarOpen={isMobileSidebarOpen}
				isSidebarOpen={isSidebarOpen}
				onSidebarClose={() => setMobileSidebarOpen(false)}
			/>
			{/* ------------------------------------------- */}
			{/* Main Wrapper */}
			{/* ------------------------------------------- */}
			<PageWrapper className="page-wrapper">
				{/* ------------------------------------------- */}
				{/* Header */}
				{/* ------------------------------------------- */}
				<Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
				{/* ------------------------------------------- */}
				{/* PageContent */}
				{/* ------------------------------------------- */}
				<Container
					sx={{
						maxWidth: "1200px",
						paddingTop: "20px",
					}}
				>
					{/* ------------------------------------------- */}
					{/* Page Route */}
					{/* ------------------------------------------- */}
					<Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
					{/* ------------------------------------------- */}
					{/* End Page */}
					{/* ------------------------------------------- */}
				</Container>
			</PageWrapper>
		</MainWrapper>
	);
}
