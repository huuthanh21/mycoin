"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import ProtectedRoute from "@/app/components/ProtectedRoute";
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
import React from "react";

const transactions = [
	{
		amount: "0.16244 MYC",
		from: "0x95222290...5CC4BAfe5",
		id: "0x8b0846d8d9...",
		time: "14 secs ago",
		to: "0x2112bB05...bF79df5d8",
	},
	{
		amount: "0.324 MYC",
		from: "0x95222290...5CC4BAfe5",
		id: "0xf31d995ee3a...",
		time: "14 secs ago",
		to: "0x6b75d8AF...0b4009A80",
	},
	// Add more transactions as needed
];

const TransactionsPage = () => {
	return (
		<ProtectedRoute>
			<PageContainer
				description="this is Transactions page"
				title="Transactions"
			>
				<DashboardCard title="Transactions">
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
														{transaction.time}
													</Typography>
												</Box>
											</Box>
										</TableCell>
										<TableCell>
											<Typography variant="body2">
												From {transaction.from}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2">
												To {transaction.to}
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
		</ProtectedRoute>
	);
};

export default TransactionsPage;
