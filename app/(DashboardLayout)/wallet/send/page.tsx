"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import ProtectedRoute from "@/app/components/ProtectedRoute";
import {
	Alert,
	Box,
	Button,
	InputAdornment,
	Snackbar,
	TextField,
	Typography,
} from "@mui/material";
import { IconSend } from "@tabler/icons-react";
import { useState } from "react";

const SendPage = () => {
	const [recipientAddress, setRecipientAddress] = useState("");
	const [amount, setAmount] = useState("");
	const [open, setOpen] = useState(false);

	const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Here you would typically integrate with a wallet or blockchain
		console.log("Sending", amount, "to", recipientAddress);
		setOpen(true);
		// Reset form
		setRecipientAddress("");
		setAmount("");
	};

	return (
		<ProtectedRoute>
			<PageContainer description="this is Send page" title="Send Coin">
				<DashboardCard title="Send">
					<div>
						<form onSubmit={handleSend}>
							<TextField
								fullWidth
								label="Recipient Address"
								margin="normal"
								onChange={(e) => setRecipientAddress(e.target.value)}
								required
								value={recipientAddress}
								variant="outlined"
							/>
							<Typography
								align="right"
								color="textSecondary"
								variant="subtitle1"
							>
								Balance: 0
							</Typography>
							<TextField
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">MYC</InputAdornment>
									),
								}}
								fullWidth
								label="Amount"
								margin="normal"
								onChange={(e) => setAmount(e.target.value)}
								required
								type="number"
								value={amount}
								variant="outlined"
							/>
							<Box sx={{ mt: 2 }}>
								<Button
									color="primary"
									size="large"
									startIcon={<IconSend />}
									type="submit"
									variant="contained"
								>
									Send
								</Button>
							</Box>
						</form>
						<Snackbar
							anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
							autoHideDuration={6000}
							onClose={() => setOpen(false)}
							open={open}
						>
							<Alert
								onClose={() => setOpen(false)}
								severity="success"
								sx={{ width: "100%" }}
							>
								Transaction sent successfully!
							</Alert>
						</Snackbar>
					</div>
				</DashboardCard>
			</PageContainer>
		</ProtectedRoute>
	);
};

export default SendPage;
