import {
	IconAperture,
	IconBrandTelegram,
	IconChartHistogram,
	IconCopy,
	IconHistory,
	IconLogin,
	IconMoodHappy,
	IconTypography,
	IconUserPlus,
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
		href: "/wallet/transactions",
		icon: IconHistory,
		id: uniqueId(),
		protected: true,
		title: "Transactions",
	},

	{
		navlabel: true,
		subheader: "Utilities",
	},
	{
		href: "/utilities/typography",
		icon: IconTypography,
		id: uniqueId(),
		title: "Typography",
	},
	{
		href: "/utilities/shadow",
		icon: IconCopy,
		id: uniqueId(),
		title: "Shadow",
	},
	{
		navlabel: true,
		subheader: "Extra",
	},
	{
		href: "/icons",
		icon: IconMoodHappy,
		id: uniqueId(),
		title: "Icons",
	},
	{
		href: "/sample-page",
		icon: IconAperture,
		id: uniqueId(),
		title: "Sample Page",
	},
];

export default Menuitems;
