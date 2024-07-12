"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const KeystoreAccessPage = () => {
	const [privateKey, setPrivateKey] = useState("");

	const handleAccessWallet = async () => {
		// This is a dummy function that does nothing
	};

	return (
		<PageContainer
			description="Access wallet with your Private Key"
			title="Keystore"
		>
			<DashboardCard title="Keystore">
				<div>
					<Typography variant="h4">Enter your Private Key</Typography>
					<TextField
						fullWidth
						label="Private Key"
						onChange={(e) => setPrivateKey(e.target.value)}
						sx={{ mb: 2, mt: 2 }}
						value={privateKey}
						variant="standard"
					/>
					<Button onClick={handleAccessWallet} variant="contained">
						Access Wallet
					</Button>
				</div>
			</DashboardCard>
		</PageContainer>
	);
};

export default KeystoreAccessPage;
