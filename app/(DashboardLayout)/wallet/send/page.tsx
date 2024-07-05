"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Typography } from "@mui/material";

const SendPage = () => {
	return (
		<PageContainer description="this is Send page" title="Send Coin">
			<DashboardCard title="Send Coin">
				<Typography>This is a Send page</Typography>
			</DashboardCard>
		</PageContainer>
	);
};

export default SendPage;
