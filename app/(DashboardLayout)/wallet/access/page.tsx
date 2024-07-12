"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import styled from "@emotion/styled";
import { Paper, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

type Props = {
	children?: string;
	description?: string;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const MethodItem = ({ children, description, onClick }: Props) => {
	const StyledPaper = styled(Paper)`
		cursor: pointer;
		padding: 1rem;
		text-align: center;
		&:hover {
			background-color: #f0f0f0;
		}
	`;
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
