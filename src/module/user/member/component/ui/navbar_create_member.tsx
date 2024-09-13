'use client'

import LayoutIconBack from "@/module/_global/layout/layout_icon_back"
import LayoutNavbarHome from "@/module/_global/layout/layout_navbar_home"
import { Box, Grid, GridCol, Text } from "@mantine/core"

export default function NavbarCreateMember() {
  return (
    <Box>
      <LayoutNavbarHome>
         <Grid justify="center" align="center">
            <Grid.Col span="auto">
            <LayoutIconBack/>
            </Grid.Col>
            <Grid.Col span={6}>
               <Text ta={"center"} fz={"lg"} fw={600}>Tambah Anggota</Text>
            </Grid.Col>
            <Grid.Col span="auto"></Grid.Col>
         </Grid>
      </LayoutNavbarHome>
    </Box>
  )
}
