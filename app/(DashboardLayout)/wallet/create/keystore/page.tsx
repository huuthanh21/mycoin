"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { fetchRandomPrivateKey } from "@/utils/walletApi";
import { Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const KeystorePage = () => {
	const [privateKey, setPrivateKey] = useState("");

	const generatePrivateKey = () => {
		fetchRandomPrivateKey().then((privateKey) => setPrivateKey(privateKey));
	};

	useEffect(() => {
		generatePrivateKey();
	}, []);

	function handleCreateWallet() {
		// This is a dummy function that does nothing
		// You can replace this with your own logic
		console.log("Create Wallet with Private Key");
	}

	return (
		<PageContainer
			description="Create wallet with Private Key"
			title="Keystore"
		>
			<DashboardCard title="Keystore">
				<div>
					<Typography variant="h4">Your Key</Typography>
					<Typography variant="subtitle1">
						This is your Private Key. Keep it safe and do not share it with
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

					<Button
						color="primary"
						onClick={handleCreateWallet}
						sx={{ ml: 2 }}
						variant="contained"
					>
						Create Wallet with this Private Key
					</Button>
				</div>
			</DashboardCard>
		</PageContainer>
	);
};

export default KeystorePage;
