'use client'

import { WARNA } from "@/module/_global/fun/WARNA"
import LayoutDrawer from "@/module/_global/layout/layout_drawer"
import LayoutIconBack from "@/module/_global/layout/layout_icon_back"
import LayoutNavbarHome from "@/module/_global/layout/layout_navbar_home"
import { isDrawer } from "@/module/_global/val/isDrawer"
import { useHookstate } from "@hookstate/core"
import { ActionIcon, Box, Grid, Group, Text } from "@mantine/core"
import { HiMenu } from "react-icons/hi"
import DrawerListPosition from "./drawer_list_position"

export default function NavbarListPosition(){
    const openDrawerMenu = useHookstate(isDrawer)
    return(
        <Box>
            <LayoutNavbarHome>
                <Grid justify="center" align="center">
                    <Grid.Col span="auto">
                        <LayoutIconBack back="/home" />
                    </Grid.Col>
                    <Grid.Col span={6}>
                    <Text ta={'center'} fw={'bold'} c={'white'}>Jabatan</Text></Grid.Col>
                </Grid>
                <Grid.Col span="auto">
                <Group justify="flex-end">
                <ActionIcon onClick={() => openDrawerMenu.set(true)} variant="light" bg={WARNA.bgIcon} size="lg" radius="lg" aria-label="Settings">
                    <HiMenu size={20} color='white'/>
                </ActionIcon>
                </Group>
                </Grid.Col> 
            </LayoutNavbarHome>
            <LayoutDrawer opened={openDrawerMenu.get()} onClose={() => openDrawerMenu.set(false)} title={'MENU'}>
            <DrawerListPosition/>
            </LayoutDrawer>
        </Box>
    )
}