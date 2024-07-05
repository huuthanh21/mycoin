"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Typography } from "@mui/material";

const TransactionsPage = () => {
	return (
		<PageContainer description="this is Transactions page" title="Transactions">
			<DashboardCard title="Transactions">
				<Typography>This is a Transactions page</Typography>
			</DashboardCard>
		</PageContainer>
	);
};

export default TransactionsPage;
