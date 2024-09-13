import { Box } from "@mantine/core";
import NavbarAnnouncement from "../component/ui/navbar_announcement";
import DetailAnnouncement from "../component/detail_announcement";

export default function ViewDetailAnnouncement() {
   return (
      <Box>
         <NavbarAnnouncement />
         <DetailAnnouncement/>
      </Box>
   )
}