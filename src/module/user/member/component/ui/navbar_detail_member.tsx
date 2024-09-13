'use client'

import { WARNA } from "@/module/_global/fun/WARNA"
import LayoutDrawer from "@/module/_global/layout/layout_drawer"
import LayoutIconBack from "@/module/_global/layout/layout_icon_back"
import LayoutNavbarHome from "@/module/_global/layout/layout_navbar_home"
import { ActionIcon, Box, Group, Stack, Text } from "@mantine/core"
import { HiMenu, HiUser } from "react-icons/hi"
import DrawerDetailMember from "./drawer_detail_member"
import { useHookstate } from "@hookstate/core"
import { isDrawer } from "@/module/_global/val/isDrawer"

export default function NavbarDetailMember() {
   const openDrawer = useHookstate(isDrawer)
   return (
      <Box>
         <LayoutNavbarHome>
            <Group justify="space-between">
               <LayoutIconBack />
               <ActionIcon onClick={() => openDrawer.set(true)} variant="light" bg={WARNA.bgIcon} size="lg" radius="lg" aria-label="Info">
                  <HiMenu size={20} color='white' />
               </ActionIcon>
            </Group>
            <Stack
               align="center"
               justify="center"
               gap="xs"
            >
               <HiUser size={100} color="white" />
               <Text c={'white'} fw={'bold'} fz={25}>Fibra Marcell</Text>
               <Text c={'white'} fz={15}>Kepala Desa</Text>
            </Stack>
         </LayoutNavbarHome>
         <LayoutDrawer opened={openDrawer.get()} title={'MENU'} onClose={() => openDrawer.set(false)}>
         <DrawerDetailMember/>
         </LayoutDrawer>
      </Box>

   )
}
