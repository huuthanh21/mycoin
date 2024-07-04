"use client";
// components
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

import AuthLogin from "../auth/AuthLogin";

const Login2 = () => {
	return (
		<PageContainer description="this is Login page" title="Login">
			<Box
				sx={{
					"&:before": {
						animation: "gradient 15s ease infinite",
						background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
						backgroundSize: "400% 400%",
						content: '""',
						height: "100%",
						opacity: "0.3",
						position: "absolute",
						width: "100%",
					},
					position: "relative",
				}}
			>
				<Grid
					container
					justifyContent="center"
					spacing={0}
					sx={{ height: "100vh" }}
				>
					<Grid
						alignItems="center"
						display="flex"
						item
						justifyContent="center"
						lg={4}
						sm={12}
						xl={3}
						xs={12}
					>
						<Card
							elevation={9}
							sx={{ maxWidth: "500px", p: 4, width: "100%", zIndex: 1 }}
						>
							<Box alignItems="center" display="flex" justifyContent="center">
								<Logo />
							</Box>
							<AuthLogin
								subtext={
									<Typography
										color="textSecondary"
										mb={1}
										textAlign="center"
										variant="subtitle1"
									>
										Your Social Campaigns
									</Typography>
								}
								subtitle={
									<Stack
										direction="row"
										justifyContent="center"
										mt={3}
										spacing={1}
									>
										<Typography
											color="textSecondary"
											fontWeight="500"
											variant="h6"
										>
											New to Modernize?
										</Typography>
										<Typography
											component={Link}
											fontWeight="500"
											href="/authentication/register"
											sx={{
												color: "primary.main",
												textDecoration: "none",
											}}
										>
											Create an account
										</Typography>
									</Stack>
								}
							/>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</PageContainer>
	);
};
export default Login2;
