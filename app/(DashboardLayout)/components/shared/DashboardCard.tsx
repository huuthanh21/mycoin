import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

type Props = {
	action?: JSX.Element | any;
	cardheading?: JSX.Element | string;
	children?: JSX.Element;
	footer?: JSX.Element;
	headsubtitle?: JSX.Element | string;
	headtitle?: JSX.Element | string;
	middlecontent?: JSX.Element | string;
	subtitle?: string;
	title?: string;
};

const DashboardCard = ({
	action,
	cardheading,
	children,
	footer,
	headsubtitle,
	headtitle,
	middlecontent,
	subtitle,
	title,
}: Props) => {
	return (
		<Card elevation={9} sx={{ padding: 0 }} variant={undefined}>
			{cardheading ? (
				<CardContent>
					<Typography variant="h5">{headtitle}</Typography>
					<Typography color="textSecondary" variant="subtitle2">
						{headsubtitle}
					</Typography>
				</CardContent>
			) : (
				<CardContent sx={{ p: "30px" }}>
					{title ? (
						<Stack
							alignItems={"center"}
							direction="row"
							justifyContent="space-between"
							mb={3}
							spacing={2}
						>
							<Box>
								{title ? <Typography variant="h5">{title}</Typography> : ""}

								{subtitle ? (
									<Typography color="textSecondary" variant="subtitle2">
										{subtitle}
									</Typography>
								) : (
									""
								)}
							</Box>
							{action}
						</Stack>
					) : null}

					{children}
				</CardContent>
			)}

			{middlecontent}
			{footer}
		</Card>
	);
};

export default DashboardCard;
