import { WARNA } from "@/module/_global/fun/WARNA"
import LayoutDrawer from "@/module/_global/layout/layout_drawer"
import { isDrawer } from "@/module/_global/val/isDrawer"
import { useHookstate } from "@hookstate/core"
import { Box, Button, Flex, SimpleGrid, Stack, Text, TextInput } from "@mantine/core"
import React, { useState } from "react"
import { IoAddCircle } from "react-icons/io5"

export default function DrawerGroup() {
   const [openDrawerGroup, setOpenDrawerGroup] = useState(false)
   const openDrawer = useHookstate(isDrawer)

   function onCLose() {
      setOpenDrawerGroup(false)
      openDrawer.set(false)
   }
   return (
      <Box>
         <Stack pt={10}>
            <SimpleGrid
               cols={{ base: 3, sm: 3, md: 3 }}
               onClick={() => setOpenDrawerGroup(true)}>
               <Flex justify={'center'} align={'center'} direction={'column'}>
                  <Box>
                     <IoAddCircle size={30} color={WARNA.biruTua} />
                  </Box>
                  <Box>
                     <Text c={WARNA.biruTua}>Tambah Group</Text>
                  </Box>
               </Flex>
            </SimpleGrid>
         </Stack>
         <LayoutDrawer opened={openDrawerGroup} onClose={() => setOpenDrawerGroup(false)} title={'TAMBAH GROUP'}>
            <Box pt={10}>
               <TextInput
                  styles={{
                     input: {
                        color: WARNA.biruTua,
                        borderRadius: WARNA.biruTua,
                        borderColor: WARNA.biruTua,
                     },
                  }}
                  size="lg"
                  radius={10}
                  placeholder="Tambah Group" />
               <Box mt={'xl'}>
                  <Button
                     c={"white"}
                     bg={WARNA.biruTua}
                     size="lg"
                     radius={30}
                     fullWidth
                     onClick={onCLose}>
                     MASUK
                  </Button>

               </Box>
            </Box>
         </LayoutDrawer>
      </Box>
   );


}