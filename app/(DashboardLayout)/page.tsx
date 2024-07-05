"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Typography } from "@mui/material";

const PortfolioPage = () => {
	return (
		<PageContainer description="this is Portfolio page" title="Portfolio">
			<DashboardCard title="Portfolio">
				<Typography>This is a Portfolio page</Typography>
			</DashboardCard>
		</PageContainer>
	);
};

export default PortfolioPage;
