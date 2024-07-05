import { styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const LinkStyled = styled(Link)(() => ({
	display: "block",
	height: "70px",
	overflow: "hidden",
	width: "180px",
}));

const Logo = () => {
	return (
		<LinkStyled href="/">
			<Image
				alt="logo"
				height={70}
				priority
				src="/images/logos/mycoin-logo.svg"
				width={174}
			/>
		</LinkStyled>
	);
};

export default Logo;
