import { Box, List } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

import Menuitems from "./MenuItems";
import NavGroup from "./NavGroup/NavGroup";
import NavItem from "./NavItem";

const SidebarItems = ({ toggleMobileSidebar }: any) => {
	const pathname = usePathname();
	const pathDirect = pathname;

	return (
		<Box sx={{ px: 3 }}>
			<List className="sidebarNav" component="div" sx={{ pt: 0 }}>
				{Menuitems.map((item) => {
					// {/********SubHeader**********/}
					if (item.subheader) {
						return <NavGroup item={item} key={item.subheader} />;

						// {/********If Sub Menu**********/}
						/* eslint no-else-return: "off" */
					} else {
						return (
							<NavItem
								item={item}
								key={item.id}
								onClick={toggleMobileSidebar}
								pathDirect={pathDirect}
							/>
						);
					}
				})}
			</List>
		</Box>
	);
};
export default SidebarItems;
