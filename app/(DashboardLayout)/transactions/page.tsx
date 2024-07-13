"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { fetchAllTransactions } from "@/utils/transactionApi";
import DescriptionIcon from "@mui/icons-material/Description";
import {
	Box,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import React, { useEffect, useState } from "react";

function timeAgo(dateString: string) {
	return formatDistanceToNow(new Date(dateString), { addSuffix: true });
}

const TransactionsPage = () => {
	const [transactions, setTransactions] = useState<
		{
			amount: number;
			id: number;
			recipient: string;
			sender: string;
			timestamp: string;
		}[]
	>([]);

	useEffect(() => {
		const updateTransactions = async () => {
			const fetchedTransactions = await fetchAllTransactions();
			setTransactions(fetchedTransactions);
		};

		updateTransactions();
	}, []);

	return (
		<PageContainer description="this is Transactions page" title="Transactions">
			<DashboardCard title="Latest Transactions">
				<TableContainer component={Paper}>
					<Table aria-label="transactions table" sx={{ minWidth: 650 }}>
						<TableHead>
							<TableRow>
								<TableCell>Transaction ID</TableCell>
								<TableCell>From</TableCell>
								<TableCell>To</TableCell>
								<TableCell align="right">Amount</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{transactions.map((transaction) => (
								<TableRow
									key={transaction.id}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										<Box sx={{ alignItems: "center", display: "flex" }}>
											<IconButton size="small">
												<DescriptionIcon />
											</IconButton>
											<Box sx={{ ml: 1 }}>
												<Typography variant="body2">
													{transaction.id}
												</Typography>
												<Typography color="text.secondary" variant="caption">
													{timeAgo(transaction.timestamp)}
												</Typography>
											</Box>
										</Box>
									</TableCell>
									<TableCell>
										<Typography variant="body2">
											{transaction.sender}
										</Typography>
									</TableCell>
									<TableCell>
										<Typography variant="body2">
											{transaction.recipient}
										</Typography>
									</TableCell>
									<TableCell align="right">
										<Typography fontWeight="bold" variant="body2">
											{transaction.amount}
										</Typography>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</DashboardCard>
		</PageContainer>
	);
};

export default TransactionsPage;
