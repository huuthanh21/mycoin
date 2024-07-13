import {
	IconBrandTelegram,
	IconChartHistogram,
	IconHistory,
	IconWallet,
} from "@tabler/icons-react";
import { uniqueId } from "lodash";

const Menuitems = [
	{
		href: "/wallet/create",
		icon: IconWallet,
		id: uniqueId(),
		logout: true,
		title: "Create Wallet",
	},
	{
		href: "/wallet/access",
		icon: IconWallet,
		id: uniqueId(),
		logout: true,
		title: "Access Wallet",
	},
	{
		navlabel: true,
		protected: true,
		subheader: "Home",
	},

	{
		href: "/",
		icon: IconChartHistogram,
		id: uniqueId(),
		protected: true,
		title: "Portfolio",
	},
	{
		href: "/wallet/send",
		icon: IconBrandTelegram,
		id: uniqueId(),
		protected: true,
		title: "Send",
	},
	{
		href: "/transactions",
		icon: IconHistory,
		id: uniqueId(),
		title: "Transactions",
	},
];

export default Menuitems;
