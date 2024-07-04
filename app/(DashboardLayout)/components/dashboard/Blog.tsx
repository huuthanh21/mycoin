import {
	Avatar,
	CardContent,
	Fab,
	Grid,
	Rating,
	Tooltip,
	Typography,
} from "@mui/material";
import Link from "next/link";
// import img1 from "public/images/products/s4.jpg";
// import img2 from "public/images/products/s5.jpg";
// import img3 from "public/images/products/s7.jpg";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";
// import img4 from "public/images/products/s11.jpg";
import { Stack } from "@mui/system";
import { IconBasket } from "@tabler/icons-react";
import Image from "next/image";

const ecoCard = [
	{
		photo: "/images/products/s4.jpg",
		price: 285,
		rating: 4,
		salesPrice: 375,
		subheader: "September 14, 2023",
		title: "Boat Headphone",
	},
	{
		photo: "/images/products/s5.jpg",
		price: 900,
		rating: 5,
		salesPrice: 650,
		subheader: "September 14, 2023",
		title: "MacBook Air Pro",
	},
	{
		photo: "/images/products/s7.jpg",
		price: 200,
		rating: 3,
		salesPrice: 150,
		subheader: "September 14, 2023",
		title: "Red Valvet Dress",
	},
	{
		photo: "/images/products/s11.jpg",
		price: 345,
		rating: 2,
		salesPrice: 285,
		subheader: "September 14, 2023",
		title: "Cute Soft Teddybear",
	},
];

const Blog = () => {
	return (
		<Grid container spacing={3}>
			{ecoCard.map((product, index) => (
				<Grid item key={index} lg={3} md={4} xs={12}>
					<BlankCard>
						<Typography component={Link} href="/">
							<Avatar
								src={product.photo}
								sx={{
									height: 250,
									width: "100%",
								}}
								variant="square"
							/>
						</Typography>
						<Tooltip title="Add To Cart">
							<Fab
								color="primary"
								size="small"
								sx={{ bottom: "75px", position: "absolute", right: "15px" }}
							>
								<IconBasket size="16" />
							</Fab>
						</Tooltip>
						<CardContent sx={{ p: 3, pt: 2 }}>
							<Typography variant="h6">{product.title}</Typography>
							<Stack
								alignItems="center"
								direction="row"
								justifyContent="space-between"
								mt={1}
							>
								<Stack alignItems="center" direction="row">
									<Typography variant="h6">${product.price}</Typography>
									<Typography
										color="textSecondary"
										ml={1}
										sx={{ textDecoration: "line-through" }}
									>
										${product.salesPrice}
									</Typography>
								</Stack>
								<Rating
									name="read-only"
									readOnly
									size="small"
									value={product.rating}
								/>
							</Stack>
						</CardContent>
					</BlankCard>
				</Grid>
			))}
		</Grid>
	);
};

export default Blog;
