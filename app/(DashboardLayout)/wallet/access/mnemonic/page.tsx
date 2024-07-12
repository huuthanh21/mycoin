"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { useAuth } from "@/app/AuthWrapper";
import { fetchWalletFromMnemonic } from "@/utils/walletApi";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const MnemonicAccessPage = () => {
	const [passphrase, setPassphrase] = useState<string[]>(Array(12).fill(""));
	const [error, setError] = useState("");

	const handlePassphraseChange = (index: number, value: string) => {
		const updatedPassphrase = [...passphrase];
		updatedPassphrase[index] = value;
		setPassphrase(updatedPassphrase);
	};

	const router = useRouter();
	const { login } = useAuth();

	const handleAccessWallet = async () => {
		setError("");

		try {
			// Validate passphrase
			const mnemonic = passphrase.join(" ");
			if (mnemonic.split(" ").length !== 12) {
				throw new Error("Invalid passphrase format.");
			}

			const wallet = await fetchWalletFromMnemonic(mnemonic);
			console.log(wallet);
			if (!wallet) {
				console.error("Wallet not found");
				throw new Error("Wallet not found.");
			}

			login(wallet.address, wallet.privateKey);
			router.push("/");
		} catch (err) {
			setError((err as Error).message);
		}
	};

	return (
		<PageContainer
			description="Access wallet with Mnemonic passphrase."
			title="Mnemonic Passphrase"
		>
			<DashboardCard title="Mnemonic Passphrase">
				<div>
					<Typography variant="h4">Enter your passphrase</Typography>
					<Typography variant="subtitle1">
						Enter your 12 words passphrase to access your wallet.
					</Typography>
					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						{passphrase.map((word, index) => (
							<Grid item key={index} xs={4}>
								<TextField
									fullWidth
									label={`${index + 1}.`}
									onChange={(e) =>
										handlePassphraseChange(index, e.target.value)
									}
									value={word}
								/>
							</Grid>
						))}
						<Grid item xs={12}>
							<Button
								color="primary"
								onClick={handleAccessWallet}
								variant="contained"
							>
								Access Wallet with this Passphrase
							</Button>
						</Grid>
					</Grid>
				</div>
			</DashboardCard>
		</PageContainer>
	);
};

export default MnemonicAccessPage;
