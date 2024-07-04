import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Avatar, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IconArrowUpLeft } from "@tabler/icons-react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const YearlyBreakup = () => {
	// chart color
	const theme = useTheme();
	const primary = theme.palette.primary.main;
	const primarylight = "#ecf2ff";
	const successlight = theme.palette.success.light;

	// chart
	const optionscolumnchart: any = {
		chart: {
			fontFamily: "'Plus Jakarta Sans', sans-serif;",
			foreColor: "#adb0bb",
			height: 155,
			toolbar: {
				show: false,
			},
			type: "donut",
		},
		colors: [primary, primarylight, "#F9F9FD"],
		dataLabels: {
			enabled: false,
		},
		legend: {
			show: false,
		},
		plotOptions: {
			pie: {
				donut: {
					background: "transparent",
					size: "75%",
				},
				endAngle: 360,
				startAngle: 0,
			},
		},
		responsive: [
			{
				breakpoint: 991,
				options: {
					chart: {
						width: 120,
					},
				},
			},
		],
		stroke: {
			show: false,
		},
		tooltip: {
			fillSeriesColor: false,
			theme: theme.palette.mode === "dark" ? "dark" : "light",
		},
	};
	const seriescolumnchart: any = [38, 40, 25];

	return (
		<DashboardCard title="Yearly Breakup">
			<Grid container spacing={3}>
				{/* column */}
				<Grid item sm={7} xs={7}>
					<Typography fontWeight="700" variant="h3">
						$36,358
					</Typography>
					<Stack alignItems="center" direction="row" mt={1} spacing={1}>
						<Avatar sx={{ bgcolor: successlight, height: 27, width: 27 }}>
							<IconArrowUpLeft color="#39B69A" width={20} />
						</Avatar>
						<Typography fontWeight="600" variant="subtitle2">
							+9%
						</Typography>
						<Typography color="textSecondary" variant="subtitle2">
							last year
						</Typography>
					</Stack>
					<Stack direction="row" mt={5} spacing={3}>
						<Stack alignItems="center" direction="row" spacing={1}>
							<Avatar
								sx={{
									bgcolor: primary,
									height: 9,
									svg: { display: "none" },
									width: 9,
								}}
							></Avatar>
							<Typography color="textSecondary" variant="subtitle2">
								2022
							</Typography>
						</Stack>
						<Stack alignItems="center" direction="row" spacing={1}>
							<Avatar
								sx={{
									bgcolor: primarylight,
									height: 9,
									svg: { display: "none" },
									width: 9,
								}}
							></Avatar>
							<Typography color="textSecondary" variant="subtitle2">
								2023
							</Typography>
						</Stack>
					</Stack>
				</Grid>
				{/* column */}
				<Grid item sm={5} xs={5}>
					<Chart
						height={150}
						options={optionscolumnchart}
						series={seriescolumnchart}
						type="donut"
						width={"100%"}
					/>
				</Grid>
			</Grid>
		</DashboardCard>
	);
};

export default YearlyBreakup;
