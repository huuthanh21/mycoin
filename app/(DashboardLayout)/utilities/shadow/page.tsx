"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Box, Grid, Paper } from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body1,
	color: theme.palette.text.secondary,
	height: 60,
	lineHeight: "60px",
	textAlign: "center",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

const Shadow = () => {
	return (
		<PageContainer description="this is Shadow" title="Shadow">
			<DashboardCard title="Shadow">
				<Grid container spacing={2}>
					{[lightTheme, darkTheme].map((theme, index) => (
						<Grid item key={index} xs={6}>
							<ThemeProvider theme={theme}>
								<Box
									sx={{
										bgcolor: "background.default",
										display: "grid",
										gap: 2,
										gridTemplateColumns: { md: "1fr 1fr" },
										p: 2,
									}}
								>
									{[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
										<Item elevation={elevation} key={elevation}>
											{`elevation=${elevation}`}
										</Item>
									))}
								</Box>
							</ThemeProvider>
						</Grid>
					))}
				</Grid>
			</DashboardCard>
		</PageContainer>
	);
};

export default Shadow;
