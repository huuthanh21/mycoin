"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import Blog from "@/app/(DashboardLayout)/components/dashboard/Blog";
import MonthlyEarnings from "@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings";
import ProductPerformance from "@/app/(DashboardLayout)/components/dashboard/ProductPerformance";
import RecentTransactions from "@/app/(DashboardLayout)/components/dashboard/RecentTransactions";
// components
import SalesOverview from "@/app/(DashboardLayout)/components/dashboard/SalesOverview";
import YearlyBreakup from "@/app/(DashboardLayout)/components/dashboard/YearlyBreakup";
import { Box, Grid } from "@mui/material";

const SamplePage = () => {
	return (
		<PageContainer description="this is Dashboard" title="Dashboard">
			<Box>
				<Grid container spacing={3}>
					<Grid item lg={8} xs={12}>
						<SalesOverview />
					</Grid>
					<Grid item lg={4} xs={12}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<YearlyBreakup />
							</Grid>
							<Grid item xs={12}>
								<MonthlyEarnings />
							</Grid>
						</Grid>
					</Grid>
					<Grid item lg={4} xs={12}>
						<RecentTransactions />
					</Grid>
					<Grid item lg={8} xs={12}>
						<ProductPerformance />
					</Grid>
					<Grid item xs={12}>
						<Blog />
					</Grid>
				</Grid>
			</Box>
		</PageContainer>
	);
};

export default SamplePage;
