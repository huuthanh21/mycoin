"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { useAuth } from "@/app/AuthWrapper";
import ProtectedRoute from "@/app/components/ProtectedRoute";
import { fetchBalance } from "@/utils/walletApi";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { IconCopy, IconRefresh } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

const PortfolioPage = () => {
	const [balance, setBalance] = useState("");
	const { walletAddress } = useAuth();

	const updateBalance = async () => {
		if (!walletAddress) return;
		const balance = await fetchBalance(walletAddress);
		setBalance(balance.toString());
	};

	useEffect(() => {
		updateBalance();
	});

	const shortenAddress = (address: string) => {
		return `${address.slice(0, 6)}...${address.slice(-4)}`;
	};

	const formatPortfolioValue = (balance: string) => {
		const balanceNumber = isNaN(parseFloat(balance)) ? 0 : parseFloat(balance);
		const balanceValue = balanceNumber * 1.6;
		return `$${balanceValue.toFixed(2)}`;
	};

	const copyAddress = () => {
		navigator.clipboard.writeText(walletAddress || "");
	};

	const card = (
		<React.Fragment>
			<CardContent>
				<Typography component="div" variant="overline">
					PORTFOLIO VALUE
				</Typography>
				<Typography component="div" sx={{ mb: 1 }} variant="h4">
					{formatPortfolioValue(balance)}
				</Typography>
				<Typography variant="body2">{balance} MYC</Typography>
				<Box
					sx={{
						alignItems: "center",
						display: "flex",
						justifyContent: "space-between",
						mt: 2,
					}}
				>
					<Typography sx={{ opacity: 0.7 }} variant="caption">
						{shortenAddress(walletAddress || "")}
					</Typography>
					<Box>
						<IconButton
							onClick={copyAddress}
							size="small"
							sx={{ color: "white" }}
						>
							<IconCopy />
						</IconButton>
						<IconButton
							onClick={updateBalance}
							size="small"
							sx={{ color: "white" }}
						>
							<IconRefresh />
						</IconButton>
					</Box>
				</Box>
			</CardContent>
		</React.Fragment>
	);

	return (
		<ProtectedRoute>
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
		</ProtectedRoute>
	);
};

export default PortfolioPage;
