"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Typography } from "@mui/material";

const CreatePage = () => {
	return (
		<PageContainer description="this is Sample page" title="Create Wallet">
			<DashboardCard title="Create Wallet">
				<Typography>This is a create wallet page</Typography>
			</DashboardCard>
		</PageContainer>
	);
};

export default CreatePage;
