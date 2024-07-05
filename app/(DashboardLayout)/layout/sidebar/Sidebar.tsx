import { Box, Drawer, useMediaQuery } from "@mui/material";

import Logo from "../shared/logo/Logo";
import SidebarItems from "./SidebarItems";
import { Upgrade } from "./Upgrade";

interface ItemType {
	isMobileSidebarOpen: boolean;
	isSidebarOpen: boolean;
	onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
}

const Sidebar = ({
	isMobileSidebarOpen,
	isSidebarOpen,
	onSidebarClose,
}: ItemType) => {
	const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

	const sidebarWidth = "270px";

	if (lgUp) {
		return (
			<Box
				sx={{
					flexShrink: 0,
					width: sidebarWidth,
				}}
			>
				{/* ------------------------------------------- */}
				{/* Sidebar for desktop */}
				{/* ------------------------------------------- */}
				<Drawer
					PaperProps={{
						sx: {
							boxSizing: "border-box",
							width: sidebarWidth,
						},
					}}
					anchor="left"
					open={isSidebarOpen}
					variant="permanent"
				>
					{/* ------------------------------------------- */}
					{/* Sidebar Box */}
					{/* ------------------------------------------- */}
					<Box
						sx={{
							height: "100%",
						}}
					>
						{/* ------------------------------------------- */}
						{/* Logo */}
						{/* ------------------------------------------- */}
						<Box px={3}>
							<Logo />
						</Box>
						<Box>
							{/* ------------------------------------------- */}
							{/* Sidebar Items */}
							{/* ------------------------------------------- */}
							<SidebarItems />
							<Upgrade />
						</Box>
					</Box>
				</Drawer>
			</Box>
		);
	}

	return (
		<Drawer
			PaperProps={{
				sx: {
					boxShadow: (theme) => theme.shadows[8],
					width: sidebarWidth,
				},
			}}
			anchor="left"
			onClose={onSidebarClose}
			open={isMobileSidebarOpen}
			variant="temporary"
		>
			{/* ------------------------------------------- */}
			{/* Logo */}
			{/* ------------------------------------------- */}
			<Box px={2}>
				<Logo />
			</Box>
			{/* ------------------------------------------- */}
			{/* Sidebar For Mobile */}
			{/* ------------------------------------------- */}
			<SidebarItems />
			<Upgrade />
		</Drawer>
	);
};

export default Sidebar;
