import { Card } from "@mui/material";

type Props = {
	children: JSX.Element | JSX.Element[];
	className?: string;
};

const BlankCard = ({ children, className }: Props) => {
	return (
		<Card
			className={className}
			elevation={9}
			sx={{ p: 0, position: "relative" }}
			variant={undefined}
		>
			{children}
		</Card>
	);
};

export default BlankCard;
