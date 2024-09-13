import { Box } from "@mantine/core";
import NavbarNotification from "../components/ui/navbar_notification";
import ListNotification from "../components/list_notification";

export default function ViewNotification() {
   return (
      <Box>
         <NavbarNotification />
         <Box p={20}>
            <ListNotification />
         </Box>
      </Box>
   )
}