"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";

const Icons = () => {
	return (
		<PageContainer description="this is Icons" title="Icons">
			<DashboardCard title="Icons">
				<iframe
					frameBorder={0}
					height="650"
					src="https://tabler-icons.io/"
					title="Inline Frame Example"
					width="100%"
				></iframe>
			</DashboardCard>
		</PageContainer>
	);
};

export default Icons;
