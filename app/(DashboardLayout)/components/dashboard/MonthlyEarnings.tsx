import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Avatar, Fab, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IconArrowDownRight, IconCurrencyDollar } from "@tabler/icons-react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MonthlyEarnings = () => {
	// chart color
	const theme = useTheme();
	const secondary = theme.palette.secondary.main;
	const secondarylight = "#f5fcff";
	const errorlight = "#fdede8";

	// chart
	const optionscolumnchart: any = {
		chart: {
			fontFamily: "'Plus Jakarta Sans', sans-serif;",
			foreColor: "#adb0bb",
			group: "sparklines",
			height: 60,
			sparkline: {
				enabled: true,
			},
			toolbar: {
				show: false,
			},
			type: "area",
		},
		fill: {
			colors: [secondarylight],
			opacity: 0.05,
			type: "solid",
		},
		markers: {
			size: 0,
		},
		stroke: {
			curve: "smooth",
			width: 2,
		},
		tooltip: {
			theme: theme.palette.mode === "dark" ? "dark" : "light",
		},
	};
	const seriescolumnchart: any = [
		{
			color: secondary,
			data: [25, 66, 20, 40, 12, 58, 20],
			name: "",
		},
	];

	return (
		<DashboardCard
			action={
				<Fab color="secondary" size="medium" sx={{ color: "#ffffff" }}>
					<IconCurrencyDollar width={24} />
				</Fab>
			}
			footer={
				<Chart
					height={60}
					options={optionscolumnchart}
					series={seriescolumnchart}
					type="area"
					width={"100%"}
				/>
			}
			title="Monthly Earnings"
		>
			<>
				<Typography fontWeight="700" mt="-20px" variant="h3">
					$6,820
				</Typography>
				<Stack alignItems="center" direction="row" my={1} spacing={1}>
					<Avatar sx={{ bgcolor: errorlight, height: 27, width: 27 }}>
						<IconArrowDownRight color="#FA896B" width={20} />
					</Avatar>
					<Typography fontWeight="600" variant="subtitle2">
						+9%
					</Typography>
					<Typography color="textSecondary" variant="subtitle2">
						last year
					</Typography>
				</Stack>
			</>
		</DashboardCard>
	);
};

export default MonthlyEarnings;
