import { WARNA } from "@/module/_global/fun/WARNA"
import { isDrawer } from "@/module/_global/val/isDrawer"
import { useHookstate } from "@hookstate/core"
import { Box, Flex, SimpleGrid, Stack, Text } from "@mantine/core"
import { useRouter } from "next/navigation"
import { FaTrash, FaPencilAlt } from "react-icons/fa"


export default function DrawerDetailAnnouncement() {
   const openDrawer = useHookstate(isDrawer)
   const router = useRouter()

   function onClose() {
      openDrawer.set(false)
   }
   return (
      <Box>
         <Stack pt={10}>
            <SimpleGrid
               cols={{ base: 3, sm: 3, lg: 3 }}
            >
               <Flex justify={"center"} align={"center"} direction={"column"}>

                  <Box>
                     <FaTrash size={30} color={WARNA.biruTua} />
                  </Box>
                  <Box>
                     <Text c={WARNA.biruTua} ta={"center"}> Hapus</Text>
                  </Box>
               </Flex>

               <Flex justify={"center"} align={"center"} direction={"column"} onClick={() => {
                  router.push('edit/123')
                  onClose()
               }}>
                  <Box>
                     <FaPencilAlt size={30} color={WARNA.biruTua} />
                  </Box>
                  <Box>
                     <Text c={WARNA.biruTua} ta={"center"}> Edit</Text>
                  </Box>
               </Flex>

            </SimpleGrid>
         </Stack>
      </Box>
   )
}