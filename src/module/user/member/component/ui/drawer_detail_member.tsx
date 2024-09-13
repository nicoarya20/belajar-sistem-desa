'use client'
import { ImUserCheck } from "react-icons/im";
import { Box, Flex, SimpleGrid, Stack, Text } from "@mantine/core"
import { WARNA } from "@/module/_global/fun/WARNA";
import { useHookstate } from "@hookstate/core";
import { isDrawer } from "@/module/_global/val/isDrawer";
import { useRouter } from "next/navigation";
import { FaPencil } from "react-icons/fa6";

export default function DrawerDetailMember() {
   const router = useRouter()
   const openDrawer = useHookstate(isDrawer)
   return(
      <Box>
         <Stack pt={10}>
         <SimpleGrid
         cols={{ base: 3, sm: 3, lg: 3 }}
         >
            <Flex justify={"center"} align={"center"} direction={"column"}>
            <Box>
               <ImUserCheck size={30} color={WARNA.biruTua} />
            </Box>
            <Box>
               <Text c={WARNA.biruTua} ta={"center"}>Status</Text>
            </Box>
               </Flex>

            <Flex justify={"center"} align={"center"} direction={"column"}
            onClick={() =>{
               router.push('/member/edit/123')
               openDrawer.set(false)
            }}
            >
               <Box>
                  <FaPencil size={30} color={WARNA.biruTua} />
               </Box>
               <Box>
                  <Text c={WARNA.biruTua} ta={"center"}>Edit</Text>
               </Box>
            
            </Flex>

         </SimpleGrid>
         </Stack>
      </Box>
   )
}