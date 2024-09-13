'use client'

import LayoutDrawer from "@/module/_global/layout/layout_drawer"
import LayoutIconBack from "@/module/_global/layout/layout_icon_back"
import LayoutNavbarHome from "@/module/_global/layout/layout_navbar_home"
import { isDrawer } from "@/module/_global/val/isDrawer"
import { useHookstate } from "@hookstate/core"
import { ActionIcon, Grid, Group, Text } from "@mantine/core"
import DrawerGroup from "./drawer_group"
import { WARNA } from "@/module/_global/fun/WARNA"
import { HiMenu } from "react-icons/hi"

export default function NavbarGroup() {
   const openDrawerMenu = useHookstate(isDrawer)
   return(
      <>
      <LayoutNavbarHome>
         <Grid justify="center" align="center">
            <Grid.Col span={"auto"}>
               <LayoutIconBack back="/home" />
            </Grid.Col>
            <Grid.Col span={6}>
               <Text ta={'center'} fw={'bold'} c={'white'}>GROUP</Text>
            </Grid.Col>
            <Grid.Col span="auto">
               <Group justify="flex-end">
               <ActionIcon onClick={() => openDrawerMenu.set(true)} variant="light" bg={WARNA.bgIcon} size="lg" radius="lg" aria-label="Settings">
                  <HiMenu size={20} color='white'/>
               </ActionIcon>
               </Group>
            </Grid.Col>
         </Grid>
      </LayoutNavbarHome>
      <LayoutDrawer opened={openDrawerMenu.get()} onClose={() => openDrawerMenu.set(false)} title={'MENU'}>
         <DrawerGroup/>
         </LayoutDrawer>
      </>
   )
}