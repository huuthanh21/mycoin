"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const MnemonicAccessPage = () => {
	const [passphrase, setPassphrase] = useState<string[]>(Array(12).fill(""));

	const handlePassphraseChange = (index: number, value: string) => {
		const updatedPassphrase = [...passphrase];
		updatedPassphrase[index] = value;
		setPassphrase(updatedPassphrase);
	};

	const handleSubmit = () => {
		// Handle form submission here
		console.log(passphrase);
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
								onClick={handleSubmit}
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
