import { Box, Group, Stack, Text } from "@mantine/core";
import { BsCardText } from "react-icons/bs";
import { TfiAnnouncement } from "react-icons/tfi";

export default function DetailAnnouncement() {
return(
   <Box py={30} px={20}>
      <Box p={20} style={{borderRadius: 10, border: '1px solid #E5E5E5'}} bg="white">
         <Stack>
            <Group>
               <TfiAnnouncement size={25} />
               <Text fw={'bold'}>Pengumuman Dinas</Text>
            </Group>
            <Group>
               <BsCardText size={25} />
               <Text>Pengumuman agar menggunakan</Text>
            </Group>
         </Stack>
         <Box my={15} p={20} style={{borderRadius: 10, border: '1px solid #E5E5E5'}}>
            <Stack>
               <Text>

               </Text>
            </Stack>
         </Box>
      </Box>
   </Box>
)
}