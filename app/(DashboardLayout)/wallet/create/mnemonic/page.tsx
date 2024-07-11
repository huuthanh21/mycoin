"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { fetchRandomMnemonic } from "@/utils/walletApi";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const MnemonicPage = () => {
	const [passphrase, setPassphrase] = useState<string[]>(Array(12).fill(""));

	const getRandomPassphrase = async () => {
		const randomPassphrase = (await fetchRandomMnemonic()).split(" ");
		setPassphrase(randomPassphrase);
	};

	const handlePassphraseChange = (index: number, value: string) => {
		const updatedPassphrase = [...passphrase];
		updatedPassphrase[index] = value;
		setPassphrase(updatedPassphrase);
	};

	const handleSubmit = () => {
		// Handle form submission here
		console.log(passphrase);
	};

	useEffect(() => {
		getRandomPassphrase();
	}, []);

	return (
		<PageContainer
			description="Create wallet with Mnemonic passphrase."
			title="Mnemonic Passphrase"
		>
			<DashboardCard title="Mnemonic Passphrase">
				<div>
					<Typography variant="h4">Enter your passphrase</Typography>
					<Typography variant="subtitle1">
						Enter your 12 words passphrase to create a new wallet. You can use
						this passphrase to recover your wallet.
					</Typography>
					<Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
						{passphrase.map((word, index) => (
							<Grid item key={index} xs={4}>
								<TextField
									disabled={true}
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
							<div>
								<Button
									color="primary"
									onClick={getRandomPassphrase}
									sx={{ mr: 2 }}
									variant="contained"
								>
									Generate Random Passphrase
								</Button>
								<Button
									color="primary"
									onClick={handleSubmit}
									variant="contained"
								>
									Create Wallet with this Passphrase
								</Button>
							</div>
						</Grid>
					</Grid>
					<Typography variant="subtitle1">
						Note: Please make sure to write down your passphrase and keep it
						safe.
					</Typography>
				</div>
			</DashboardCard>
		</PageContainer>
	);
};

export default MnemonicPage;
