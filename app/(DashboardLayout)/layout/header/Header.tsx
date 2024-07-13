"use client";

import { useAuth } from "@/app/AuthWrapper";
import {
	AppBar,
	Box,
	Button,
	IconButton,
	Stack,
	Toolbar,
	styled,
} from "@mui/material";
import { IconMenu } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import React from "react";

interface ItemType {
	toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
	const { isLoggedIn, logout } = useAuth();
	const router = useRouter();

	const handleLogout = () => {
		logout();
		router.push("/wallet/access");
	};

	const AppBarStyled = styled(AppBar)(({ theme }) => ({
		backdropFilter: "blur(4px)",
		background: theme.palette.background.paper,
		boxShadow: "none",
		justifyContent: "center",
		[theme.breakpoints.up("lg")]: {
			minHeight: "70px",
		},
	}));
	const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
		color: theme.palette.text.secondary,
		width: "100%",
	}));

	return (
		<AppBarStyled color="default" position="sticky">
			<ToolbarStyled>
				<IconButton
					aria-label="menu"
					color="inherit"
					onClick={toggleMobileSidebar}
					sx={{
						display: {
							lg: "none",
							xs: "inline",
						},
					}}
				>
					<IconMenu height="20" width="20" />
				</IconButton>

				<Box flexGrow={1} />
				<Stack alignItems="center" direction="row" spacing={1}>
					<Button
						color="primary"
						component={Link}
						disableElevation
						href={isLoggedIn ? "#" : "/wallet/access"}
						onClick={isLoggedIn ? handleLogout : undefined}
						variant="contained"
					>
						{isLoggedIn ? "Logout" : "Access Wallet"}
					</Button>
				</Stack>
			</ToolbarStyled>
		</AppBarStyled>
	);
};

Header.propTypes = {
	sx: PropTypes.object,
};

export default Header;
