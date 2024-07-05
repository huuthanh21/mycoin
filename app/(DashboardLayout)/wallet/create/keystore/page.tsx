"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const KeystorePage = () => {
	const [privateKey, setPrivateKey] = useState("");

	const generatePrivateKey = () => {
		// Generate random private key with 256 characters
		const randomPrivateKey = Array(64)
			.fill(0)
			.map(() => Math.random().toString(16).substr(2))
			.join("");

		setPrivateKey(randomPrivateKey);
	};

	useEffect(() => {
		generatePrivateKey();
	}, []);

	return (
		<PageContainer description="Create wallet with Keystore" title="Keystore">
			<DashboardCard title="Keystore">
				<div>
					<Typography variant="h4">Your Key</Typography>
					<Typography variant="subtitle1">
						This is your private key. Keep it safe and do not share it with
						anyone.
					</Typography>
					<Paper
						elevation={3}
						style={{ fontStyle: "italic", wordWrap: "break-word" }}
						sx={{ mb: 2, mt: 2, p: 2 }}
					>
						{privateKey}
					</Paper>
					<Button onClick={generatePrivateKey} variant="contained">
						Generate Private Key
					</Button>

					<Button color="primary" sx={{ ml: 2 }} variant="contained">
						Create Wallet with Keystore
					</Button>
				</div>
			</DashboardCard>
		</PageContainer>
	);
};

export default KeystorePage;
