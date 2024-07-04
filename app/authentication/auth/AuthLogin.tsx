import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Stack,
	Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

interface loginType {
	subtext?: JSX.Element | JSX.Element[];
	subtitle?: JSX.Element | JSX.Element[];
	title?: string;
}

const AuthLogin = ({ subtext, subtitle, title }: loginType) => (
	<>
		{title ? (
			<Typography fontWeight="700" mb={1} variant="h2">
				{title}
			</Typography>
		) : null}

		{subtext}

		<Stack>
			<Box>
				<Typography
					component="label"
					fontWeight={600}
					htmlFor="username"
					mb="5px"
					variant="subtitle1"
				>
					Username
				</Typography>
				<CustomTextField fullWidth variant="outlined" />
			</Box>
			<Box mt="25px">
				<Typography
					component="label"
					fontWeight={600}
					htmlFor="password"
					mb="5px"
					variant="subtitle1"
				>
					Password
				</Typography>
				<CustomTextField fullWidth type="password" variant="outlined" />
			</Box>
			<Stack
				alignItems="center"
				direction="row"
				justifyContent="space-between"
				my={2}
			>
				<FormGroup>
					<FormControlLabel
						control={<Checkbox defaultChecked />}
						label="Remeber this Device"
					/>
				</FormGroup>
				<Typography
					component={Link}
					fontWeight="500"
					href="/"
					sx={{
						color: "primary.main",
						textDecoration: "none",
					}}
				>
					Forgot Password ?
				</Typography>
			</Stack>
		</Stack>
		<Box>
			<Button
				color="primary"
				component={Link}
				fullWidth
				href="/"
				size="large"
				type="submit"
				variant="contained"
			>
				Sign In
			</Button>
		</Box>
		{subtitle}
	</>
);

export default AuthLogin;
