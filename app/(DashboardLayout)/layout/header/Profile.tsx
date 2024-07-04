import {
	Avatar,
	Box,
	Button,
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
} from "@mui/material";
import { IconListCheck, IconMail, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";

const Profile = () => {
	const [anchorEl2, setAnchorEl2] = useState(null);
	const handleClick2 = (event: any) => {
		setAnchorEl2(event.currentTarget);
	};
	const handleClose2 = () => {
		setAnchorEl2(null);
	};

	return (
		<Box>
			<IconButton
				aria-controls="msgs-menu"
				aria-haspopup="true"
				aria-label="show 11 new notifications"
				color="inherit"
				onClick={handleClick2}
				size="large"
				sx={{
					...(typeof anchorEl2 === "object" && {
						color: "primary.main",
					}),
				}}
			>
				<Avatar
					alt="image"
					src="/images/profile/user-1.jpg"
					sx={{
						height: 35,
						width: 35,
					}}
				/>
			</IconButton>
			{/* ------------------------------------------- */}
			{/* Message Dropdown */}
			{/* ------------------------------------------- */}
			<Menu
				anchorEl={anchorEl2}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
				id="msgs-menu"
				keepMounted
				onClose={handleClose2}
				open={Boolean(anchorEl2)}
				sx={{
					"& .MuiMenu-paper": {
						width: "200px",
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
			>
				<MenuItem>
					<ListItemIcon>
						<IconUser width={20} />
					</ListItemIcon>
					<ListItemText>My Profile</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<IconMail width={20} />
					</ListItemIcon>
					<ListItemText>My Account</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<IconListCheck width={20} />
					</ListItemIcon>
					<ListItemText>My Tasks</ListItemText>
				</MenuItem>
				<Box mt={1} px={2} py={1}>
					<Button
						color="primary"
						component={Link}
						fullWidth
						href="/authentication/login"
						variant="outlined"
					>
						Logout
					</Button>
				</Box>
			</Menu>
		</Box>
	);
};

export default Profile;
