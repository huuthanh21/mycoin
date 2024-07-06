"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { IconCopy } from "@tabler/icons-react";
import React from "react";

const card = (
	<React.Fragment>
		<CardContent>
			<Typography component="div" variant="overline">
				PORTFOLIO VALUE
			</Typography>
			<Typography component="div" sx={{ mb: 1 }} variant="h4">
				$0.00
			</Typography>
			<Typography variant="body2">0 MYC</Typography>
			<Box
				sx={{
					alignItems: "center",
					display: "flex",
					justifyContent: "space-between",
					mt: 2,
				}}
			>
				<Typography sx={{ opacity: 0.7 }} variant="caption">
					0x1F7B...b401
				</Typography>
				<Box>
					<IconButton size="small" sx={{ color: "white" }}>
						<IconCopy />
					</IconButton>
				</Box>
			</Box>
		</CardContent>
	</React.Fragment>
);

const PortfolioPage = () => {
	return (
		<PageContainer description="this is Portfolio page" title="Portfolio">
			<DashboardCard title="My MYC balance">
				<div>
					<Card
						sx={{
							background: "linear-gradient(45deg, #6a11cb 30%, #2575fc 90%)",
							borderRadius: 4,
							color: "white",
							maxWidth: 300,
							mb: 2,
						}}
					>
						{card}
					</Card>
					<Typography variant="subtitle1">
						Tip: You can also send your MYC from another wallet!
					</Typography>
				</div>
			</DashboardCard>
		</PageContainer>
	);
};

export default PortfolioPage;
