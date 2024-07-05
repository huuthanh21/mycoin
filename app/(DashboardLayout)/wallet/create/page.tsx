"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import styled from "@emotion/styled";
import { Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
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
							description="Generate a new wallet using a random seed phrase. You can use this seed phrase to recover your wallet."
							onClick={() => {
								router.push("/wallet/create/keystore");
							}}
						>
							Keystore
						</MethodItem>
						<MethodItem
							description="Generate a new wallet using private key. You can use this private key to recover your wallet."
							onClick={() => {
								router.push("/wallet/create/passphrase");
							}}
						>
							Passphrase
						</MethodItem>
					</Stack>
				</div>
			</DashboardCard>
		</PageContainer>
	);
};

export default CreatePage;
