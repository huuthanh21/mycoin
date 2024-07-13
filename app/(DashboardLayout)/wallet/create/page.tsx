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

const CreatePage = () => {
	const router = useRouter();
	return (
		<PageContainer
			description="this is Create Wallet page"
			title="Create Wallet"
		>
			<DashboardCard title="Create Wallet">
				<div>
					<Typography>Please select a method to create a new wallet</Typography>
					<Stack spacing={2}>
						<MethodItem
							description="Generate a new wallet using a random private key. You can use this private key to recover your wallet."
							onClick={() => {
								router.push("/wallet/create/keystore");
							}}
						>
							Keystore
						</MethodItem>
						<MethodItem
							description="Generate a new wallet using a mnemonic passphrase. You can use this mnemonic passphrase to recover your wallet."
							onClick={() => {
								router.push("/wallet/create/mnemonic");
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

export default CreatePage;
