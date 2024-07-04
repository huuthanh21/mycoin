import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";
import React from "react";

interface registerType {
	subtext?: JSX.Element | JSX.Element[];
	subtitle?: JSX.Element | JSX.Element[];
	title?: string;
}

const AuthRegister = ({ subtext, subtitle, title }: registerType) => (
	<>
		{title ? (
			<Typography fontWeight="700" mb={1} variant="h2">
				{title}
			</Typography>
		) : null}

		{subtext}

		<Box>
			<Stack mb={3}>
				<Typography
					component="label"
					fontWeight={600}
					htmlFor="name"
					mb="5px"
					variant="subtitle1"
				>
					Name
				</Typography>
				<CustomTextField fullWidth id="name" variant="outlined" />

				<Typography
					component="label"
					fontWeight={600}
					htmlFor="email"
					mb="5px"
					mt="25px"
					variant="subtitle1"
				>
					Email Address
				</Typography>
				<CustomTextField fullWidth id="email" variant="outlined" />

				<Typography
					component="label"
					fontWeight={600}
					htmlFor="password"
					mb="5px"
					mt="25px"
					variant="subtitle1"
				>
					Password
				</Typography>
				<CustomTextField fullWidth id="password" variant="outlined" />
			</Stack>
			<Button
				color="primary"
				component={Link}
				fullWidth
				href="/authentication/login"
				size="large"
				variant="contained"
			>
				Sign Up
			</Button>
		</Box>
		{subtitle}
	</>
);

export default AuthRegister;
