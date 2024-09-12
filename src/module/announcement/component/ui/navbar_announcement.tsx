'use client'

import { WARNA } from "@/module/_global/fun/WARNA"
import LayoutDrawer from "@/module/_global/layout/layout_drawer"
import LayoutIconBack from "@/module/_global/layout/layout_icon_back"
import LayoutNavbarHome from "@/module/_global/layout/layout_navbar_home"
import { isDrawer } from "@/module/_global/val/isDrawer"
import { useHookstate } from "@hookstate/core"
import { ActionIcon, Grid, GridCol, Group, Text } from "@mantine/core"
import { HiMenu } from "react-icons/hi"
import DrawerAnnouncement from "./drawer_announcement"

export default function NavbarAnnouncement() {
const openDrawer = useHookstate(isDrawer)
return(
   <>
   <LayoutNavbarHome>
      <Grid>
         <Grid.Col span="auto">
            <LayoutIconBack back="/home"/>
         </Grid.Col>
         <GridCol span={6}>
            <Text ta={"center"} fw={"bold"} c={"white"}>Pengumuman</Text>
         </GridCol>
         <GridCol span="auto">
            <Group justify="flex-end">
               <ActionIcon onClick={() => openDrawer.set(true)} variant="light" bg={WARNA.bgIcon} size="lg" radius="lg" aria-label="Settings">
                 <HiMenu size={20} color='white' /> 
                  </ActionIcon>
            </Group>
         </GridCol>
      </Grid>
   </LayoutNavbarHome>
   <LayoutDrawer opened={openDrawer.get()} title={'MENU'} onClose={() => openDrawer.set(false)}>
   <DrawerAnnouncement/>
   </LayoutDrawer>
   </>
)

}