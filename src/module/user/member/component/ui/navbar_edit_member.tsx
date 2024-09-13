'use client'

import LayoutIconBack from "@/module/_global/layout/layout_icon_back"
import LayoutNavbarHome from "@/module/_global/layout/layout_navbar_home"
import { Box, Grid, Text } from "@mantine/core"

export default function NavbarEditMember() {
  return (
   <Box>
      <LayoutNavbarHome>
         <Grid justify="center" align="center">
         <Grid.Col span="auto">
            <LayoutIconBack/>
         </Grid.Col>
         <Grid.Col span={6}>
         <Text ta={"center"} c='white' fw='bold'>Edit Anggota</Text>
         </Grid.Col>
         <Grid.Col span="auto"></Grid.Col>
         </Grid>
      </LayoutNavbarHome>
   </Box>
  )
}
