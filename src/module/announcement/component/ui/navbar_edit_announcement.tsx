'use client'

import LayoutIconBack from "@/module/_global/layout/layout_icon_back"
import LayoutNavbarHome from "@/module/_global/layout/layout_navbar_home"

import {  Box, Grid,  Text } from "@mantine/core"

export default function NavbarEditAnnouncement() {
   return (
      <Box>
         <LayoutNavbarHome>
            <Grid justify="center" align="center">
               <Grid.Col span="auto">
                  <LayoutIconBack />
               </Grid.Col>
               <Grid.Col span={6}>
                  <Text ta={"center"} fw={"bold"} c={'white'}>Edit Pengumuman</Text>
               </Grid.Col>
            </Grid>
         </LayoutNavbarHome>
      </Box>
   )
}