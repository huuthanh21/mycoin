"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import styled from "@emotion/styled";
import { Paper, Stack, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

type Props = {
	children?: string;
	description?: string;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const MethodItem = ({ children, description, onClick }: Props) => {
	const theme = useTheme();
	const StyledPaper = styled(Paper)(() => ({
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			color: "white",
		},
		backgroundColor: "transparent",
		color: theme.palette.text.primary,
		cursor: "pointer",
		padding: theme.spacing(3),
		textAlign: "center",
	}));

	return (
		<StyledPaper onClick={onClick}>
			<Typography variant="h4">{children}</Typography>
			<Typography>{description}</Typography>
		</StyledPaper>
	);
};

const AccessWalletPage = () => {
	const router = useRouter();
	return (
		<PageContainer
			description="this is Access Wallet page"
			title="Access Wallet"
		>
			<DashboardCard title="Access Wallet">
				<div>
					<Typography>Please select a method to access your wallet</Typography>
					<Stack spacing={2}>
						<MethodItem
							description="Access you wallet using a private key."
							onClick={() => {
								router.push("/wallet/access/keystore");
							}}
						>
							Keystore
						</MethodItem>
						<MethodItem
							description="Access you wallet using a mnemonic passphrase."
							onClick={() => {
								router.push("/wallet/access/mnemonic");
							}}
						>
							Mnemonic Passphrase
						</MethodItem>
					</Stack>
				</div>
			</DashboardCard>
		</PageContainer>
	);
};

export default AccessWalletPage;
