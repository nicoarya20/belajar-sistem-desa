'use client'

import LayoutDrawer from "@/module/_global/layout/layout_drawer"
import LayoutIconBack from "@/module/_global/layout/layout_icon_back"
import LayoutNavbarHome from "@/module/_global/layout/layout_navbar_home"
import { isDrawer } from "@/module/_global/val/isDrawer"
import { useHookstate } from "@hookstate/core"
import { ActionIcon, Box, Grid, GridCol, Group } from "@mantine/core"
import { HiMenu } from "react-icons/hi"
import DrawerDetailAnnouncement from "./drawer_detail_announcement"
import { WARNA } from "@/module/_global/fun/WARNA"

export default function NavbarDetailAnnouncement() {
   const openDrawer = useHookstate(isDrawer)
   return (
      <Box>
         <LayoutNavbarHome>
            <Grid justify="center" align="center">
               <GridCol span="auto">
                  <LayoutIconBack />
               </GridCol>
               <GridCol span="auto">
               <Group>
                  <ActionIcon onClick={() => openDrawer.set(true)} variant="light" bg={WARNA.bgIcon} size="lg" radius="lg" aria-label="Settings">
                     <HiMenu size={20} color='white' />
                     </ActionIcon>
               </Group>
               </GridCol>
            </Grid>
         </LayoutNavbarHome>
         <LayoutDrawer opened={openDrawer.get()} title={'MENU'} onClose={() => openDrawer.set(false)}>
         <DrawerDetailAnnouncement/>
         </LayoutDrawer>
      </Box>
   )
}