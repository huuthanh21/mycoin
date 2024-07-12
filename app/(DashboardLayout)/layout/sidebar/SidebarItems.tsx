"use client";

import { useAuth } from "@/app/AuthWrapper";
import { Box, List } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

import Menuitems from "./MenuItems";
import NavGroup from "./NavGroup/NavGroup";
import NavItem from "./NavItem";

const SidebarItems = ({ toggleMobileSidebar }: any) => {
	const pathname = usePathname();
	const pathDirect = pathname;
	const { isLoggedIn } = useAuth();

	return (
		<Box sx={{ px: 3 }}>
			<List className="sidebarNav" component="div" sx={{ pt: 0 }}>
				{Menuitems.map((item) => {
					if (item.protected && !isLoggedIn) {
						return null;
					}

					if (item.logout && isLoggedIn) {
						return null;
					}

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
