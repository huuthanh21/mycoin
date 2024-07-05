import { Box, Button, Typography } from "@mui/material";
// import img1 from 'public/images/backgrounds/rocket.png';
import Image from "next/image";
import Link from "next/link";

export const Upgrade = () => {
	return (
		<Box
			alignItems="center"
			display="flex"
			gap={2}
			sx={{ bgcolor: "primary.light", borderRadius: "8px", m: 3, p: 3 }}
		>
			<>
				<Box>
					<Typography
						fontSize="16px"
						mb={1}
						sx={{ width: "80px" }}
						variant="h5"
					>
						Haven&apos;t wallet?
					</Typography>
					<Button
						aria-label="logout"
						color="primary"
						component={Link}
						disableElevation
						href="/authentication/register"
						size="small"
						target="_blank"
						variant="contained"
					>
						Create
					</Button>
				</Box>
				<Box mt="-35px">
					<Image
						alt="Remy Sharp"
						height={100}
						src="/images/backgrounds/rocket.png"
						width={100}
					/>
				</Box>
			</>
		</Box>
	);
};
