'use client'

import LayoutIconBack from "@/module/_global/layout/layout_icon_back"
import LayoutNavbarHome from "@/module/_global/layout/layout_navbar_home"
import { Box, Grid, GridCol, Text } from "@mantine/core"

export default function NavbarCreateAnnouncement() {
   return (
      <Box>
         <LayoutNavbarHome>
            <Grid justify='center' align="center">
               <GridCol span="auto">
                  <LayoutIconBack />
               </GridCol>
               <GridCol span={6}>
                  <Text ta={"center"} fw={"bold"} c={"white"}>Tambah Pengumuman</Text>
               </GridCol>
            </Grid>
         </LayoutNavbarHome>
      </Box>
   )

}