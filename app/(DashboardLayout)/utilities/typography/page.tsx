"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { CardContent, Grid, Typography } from "@mui/material";

const TypographyPage = () => {
	return (
		<PageContainer description="this is Typography" title="Typography">
			<Grid container spacing={3}>
				<Grid item sm={12}>
					<DashboardCard title="Default Text">
						<Grid container spacing={3}>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography variant="h1">h1. Heading</Typography>
										<Typography color="textSecondary" variant="body1">
											font size: 30 | line-height: 45 | font weight: 500
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography variant="h2">h2. Heading</Typography>
										<Typography color="textSecondary" variant="body1">
											font size: 24 | line-height: 36 | font weight: 500
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography variant="h3">h3. Heading</Typography>

										<Typography color="textSecondary" variant="body1">
											font size: 21 | line-height: 31.5 | font weight: 500
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography variant="h4">h4. Heading</Typography>

										<Typography color="textSecondary" variant="body1">
											font size: 18 | line-height: 27 | font weight: 500
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography variant="h5">h5. Heading</Typography>

										<Typography color="textSecondary" variant="body1">
											font size: 16 | line-height: 24 | font weight: 500
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography variant="h6">h6. Heading</Typography>

										<Typography color="textSecondary" variant="body1">
											font size: 14 | line-height: 21 | font weight: 500
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography variant="subtitle1">
											subtitle1. Lorem ipsum dolor sit amet, consectetur
											adipisicing elit. Quos blanditiis tenetur
										</Typography>

										<Typography color="textSecondary" variant="body1">
											font size: 16 | line-height: 28 | font weight: 400
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography variant="subtitle2">
											subtitle2. Lorem ipsum dolor sit amet, consectetur
											adipisicing elit. Quos blanditiis tenetur
										</Typography>

										<Typography color="textSecondary" variant="body1">
											font size: 14 | line-height: 21 | font weight: 400
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography variant="body1">
											body1. Lorem ipsum dolor sit amet, consectetur adipisicing
											elit. Quos blanditiis tenetur
										</Typography>

										<Typography color="textSecondary" variant="body1">
											font size: 16 | line-height: 24 | font weight: 400
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography variant="body2">
											body2. Lorem ipsum dolor sit amet, consectetur adipisicing
											elit. Quos blanditiis tenetur
										</Typography>

										<Typography color="textSecondary" variant="body1">
											font size: 14 | line-height: 20 | font weight: 400
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography variant="caption">
											caption. Lorem ipsum dolor sit amet, consectetur
											adipisicing elit. Quos blanditiis tenetur
										</Typography>

										<Typography color="textSecondary" variant="body1">
											font size: 12 | line-height: 19 | font weight: 400
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography variant="overline">
											overline. Lorem ipsum dolor sit amet, consectetur
											adipisicing elit. Quos blanditiis tenetur
										</Typography>

										<Typography color="textSecondary" variant="body1">
											font size: 12 | line-height: 31 | font weight: 400
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
						</Grid>
					</DashboardCard>
				</Grid>
				<Grid item sm={12}>
					<DashboardCard title="Default Text">
						<Grid container spacing={3}>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography color="textprimary" variant="h5">
											Text Primary
										</Typography>

										<Typography color="textprimary" variant="body1">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Quos blanditiis tenetur
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography color="textSecondary" variant="h5">
											Text Secondary
										</Typography>

										<Typography color="textSecondary" variant="body1">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Quos blanditiis tenetur
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography
											sx={{ color: (theme) => theme.palette.info.main }}
											variant="h5"
										>
											Text Info
										</Typography>

										<Typography
											sx={{ color: (theme) => theme.palette.info.main }}
											variant="body1"
										>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Quos blanditiis tenetur
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography
											sx={{ color: (theme) => theme.palette.primary.main }}
											variant="h5"
										>
											Text Primary
										</Typography>

										<Typography
											sx={{ color: (theme) => theme.palette.primary.main }}
											variant="body1"
										>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Quos blanditiis tenetur
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography
											sx={{ color: (theme) => theme.palette.warning.main }}
											variant="h5"
										>
											Text Warning
										</Typography>

										<Typography
											sx={{ color: (theme) => theme.palette.warning.main }}
											variant="body1"
										>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Quos blanditiis tenetur
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography
											sx={{ color: (theme) => theme.palette.error.main }}
											variant="h5"
										>
											Text Error
										</Typography>

										<Typography
											sx={{ color: (theme) => theme.palette.error.main }}
											variant="body1"
										>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Quos blanditiis tenetur
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
							<Grid item sm={12}>
								<BlankCard>
									<CardContent>
										<Typography
											sx={{ color: (theme) => theme.palette.success.main }}
											variant="h5"
										>
											Text Success
										</Typography>

										<Typography
											sx={{ color: (theme) => theme.palette.success.main }}
											variant="body1"
										>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Quos blanditiis tenetur
										</Typography>
									</CardContent>
								</BlankCard>
							</Grid>
						</Grid>
					</DashboardCard>
				</Grid>
			</Grid>
		</PageContainer>
	);
};

export default TypographyPage;
