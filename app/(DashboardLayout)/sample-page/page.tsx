"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Typography } from "@mui/material";

const SamplePage = () => {
	return (
		<PageContainer description="this is Sample page" title="Sample Page">
			<DashboardCard title="Sample Page">
				<Typography>This is a sample page</Typography>
			</DashboardCard>
		</PageContainer>
	);
};

export default SamplePage;
