"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { useAuth } from "@/app/AuthWrapper";
import ProtectedRoute from "@/app/components/ProtectedRoute";
import { sendTransaction } from "@/utils/transactionApi";
import { fetchBalance, fetchWalletFromAddress } from "@/utils/walletApi";
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
import { useEffect, useState } from "react";

const SendPage = () => {
	const [recipientAddress, setRecipientAddress] = useState("");
	const [amount, setAmount] = useState("");
	const [open, setOpen] = useState(false);
	const [addressError, setAddressError] = useState<null | string>(null);
	const [amountError, setAmountError] = useState<null | string>(null);
	const [balance, setBalance] = useState(0);

	const { getPrivateKey, walletAddress } = useAuth();

	useEffect(() => {
		const updateBalance = async () => {
			const balance = await fetchBalance(walletAddress!);
			setBalance(balance);
		};
		updateBalance();
	});

	const validateAddress = async (address: string) => {
		if (address === walletAddress) {
			return "Cannot send to your own address";
		}

		if (!address.startsWith("0x")) {
			return "Address must start with 0x";
		}

		const wallet = await fetchWalletFromAddress(address);
		if (!wallet) {
			return "Address not found";
		}
		return null;
	};

	const validateAmount = (amount: string) => {
		if (Number(amount) <= 0) {
			return "Amount must be greater than 0";
		}

		if (Number(amount) > balance) {
			return "Amount exceeds balance";
		}
		return null;
	};

	const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const addressErr = await validateAddress(recipientAddress);
		addressErr ? setAddressError(addressErr) : setAddressError(null);

		const amountErr = validateAmount(amount);
		amountErr ? setAmountError(amountErr) : setAmountError(null);

		if (addressErr || amountErr) {
			return;
		}

		await sendTransaction(
			walletAddress!,
			recipientAddress,
			Number(parseFloat(amount).toFixed(8)),
			getPrivateKey()!
		);

		setOpen(true);

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
								error={!!addressError}
								fullWidth
								helperText={addressError}
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
								Balance: {balance} MYC
							</Typography>
							<TextField
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">MYC</InputAdornment>
									),
								}}
								error={!!amountError}
								fullWidth
								helperText={amountError}
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
