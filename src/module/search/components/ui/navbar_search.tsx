'use client'

import LayoutIconBack from "@/module/_global/layout/layout_icon_back";
import LayoutNavbarHome from "@/module/_global/layout/layout_navbar_home";
import { Box, Grid, Text } from "@mantine/core";
// import { useRouter } from "next/navigation";

export default function NavbarSearch() {
   // const router = useRouter()
   return (
      <Box>
         <LayoutNavbarHome>
            <Grid justify="center" align="center">
               <Grid.Col span="auto">
                  <LayoutIconBack back="/home" />
               </Grid.Col>
               <Grid.Col span={6}>
               <Text ta={'center'} fw={'bold'} c={'white'}>PENCARIAN</Text>
            </Grid.Col>
            <Grid.Col span="auto"></Grid.Col>
         </Grid>
      </LayoutNavbarHome>
         </Box >
   );
}