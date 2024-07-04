// mui imports
import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	styled,
	useTheme,
} from "@mui/material";
import Link from "next/link";
import React from "react";

type NavGroup = {
	[x: string]: any;
	href?: any;
	icon?: any;
	id?: string;
	navlabel?: boolean;
	onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
	subheader?: string;
	title?: string;
};

interface ItemType {
	hideMenu?: any;
	item: NavGroup;
	level?: any | number;
	onClick: (event: React.MouseEvent<HTMLElement>) => void;
	pathDirect: string;
}

const NavItem = ({ item, level, onClick, pathDirect }: ItemType) => {
	const Icon = item.icon;
	const theme = useTheme();
	const itemIcon = <Icon size="1.3rem" stroke={1.5} />;

	const ListItemStyled = styled(ListItem)(() => ({
		".MuiButtonBase-root": {
			"&.Mui-selected": {
				"&:hover": {
					backgroundColor: theme.palette.primary.main,
					color: "white",
				},
				backgroundColor: theme.palette.primary.main,
				color: "white",
			},
			"&:hover": {
				backgroundColor: theme.palette.primary.light,
				color: theme.palette.primary.main,
			},
			backgroundColor: level > 1 ? "transparent !important" : "inherit",
			borderRadius: "8px",
			color: theme.palette.text.secondary,
			marginBottom: "2px",
			padding: "8px 10px",
			paddingLeft: "10px",
			whiteSpace: "nowrap",
		},
		padding: 0,
	}));

	return (
		<List component="div" disablePadding key={item.id}>
			<ListItemStyled>
				<ListItemButton
					component={Link}
					disabled={item.disabled}
					href={item.href}
					onClick={onClick}
					selected={pathDirect === item.href}
					target={item.external ? "_blank" : ""}
				>
					<ListItemIcon
						sx={{
							color: "inherit",
							minWidth: "36px",
							p: "3px 0",
						}}
					>
						{itemIcon}
					</ListItemIcon>
					<ListItemText>
						<>{item.title}</>
					</ListItemText>
				</ListItemButton>
			</ListItemStyled>
		</List>
	);
};

export default NavItem;
