"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { useAuth } from "@/app/AuthWrapper";
import { fetchWalletFromPrivateKey } from "@/utils/walletApi";
import { Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const KeystoreAccessPage = () => {
	const [privateKey, setPrivateKey] = useState("");
	const [error, setError] = useState("");

	const router = useRouter();
	const { login } = useAuth();

	const handleAccessWallet = async () => {
		setError("");

		try {
			if (privateKey.length != 64) {
				console.log(privateKey.length);

				throw new Error("Invalid private key format.");
			}

			const wallet = await fetchWalletFromPrivateKey(privateKey);
			console.log(wallet);
			if (!wallet) {
				console.error("Wallet not found");
				throw new Error("Wallet not found.");
			}

			login(wallet.address, privateKey);
			router.push("/");
		} catch (err) {
			setError((err as Error).message);
		}
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
						error={!!error}
						fullWidth
						helperText={error}
						label="Private Key"
						onChange={(e) => setPrivateKey(e.target.value)}
						required
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
