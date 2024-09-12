import LayoutNavbarHome from "@/module/_global/layout/layout_navbar_home";
import { Box, Group, Stack, Text } from "@mantine/core";
import IconNavbar from "../components/ui/icon_navbar";
import Carosole from "../components/carosole";
import Features from "../components/features";

export default function ViewHome() {
   return (
      <>
      <LayoutNavbarHome>
         <Group justify="space-between">
            <Text fw={'bold'} c={'white'}>Perbekal Darmasaba</Text>
            <IconNavbar/>
         </Group>
      </LayoutNavbarHome>
      <Box p={20}>
         <Stack>
            <Carosole/>
            <Features/>
         </Stack>
      </Box>
      </>
   );
}