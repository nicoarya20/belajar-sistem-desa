'use client'
import { WARNA } from "@/module/_global/fun/WARNA"
import LayoutDrawer from "@/module/_global/layout/layout_drawer"
import { isDrawer } from "@/module/_global/val/isDrawer"
import { useHookstate } from "@hookstate/core"
import { Box, Button, Flex, SimpleGrid, Stack, Text, TextInput } from "@mantine/core"
import React, { useState } from "react"
import { IoAddCircle, IoCloseOutline } from "react-icons/io5"

export default function EditDrawerGroup() {
   const [openDrawerGroup, setOpenDrawerGroup] = useState(false)
   const openDrawerEdit = useHookstate(isDrawer)

   function onCLose() {
      setOpenDrawerGroup(false)
      openDrawerEdit.set(false)
   }
   return (
      <Box>
         <Stack pt={10}>
            <SimpleGrid
               cols={{ base: 3, sm: 3, md: 3 }}>
               <Flex justify={'center'} align={'center'} direction={'column'}>
                  <Box>
                     <IoCloseOutline size={30} color={WARNA.biruTua} />
                  </Box>
                  <Box>
                     <Text c={WARNA.biruTua}>Tidak Aktif</Text>
                  </Box>
               </Flex>
               <Flex justify={'center'} align={'center'} direction={'column'}>
               <Box>
                     <IoAddCircle size={30} color={WARNA.biruTua} />
               </Box>
               <Box>
                  <Text c={WARNA.biruTua}>Edit</Text>
               </Box>
               </Flex>
            </SimpleGrid>
         </Stack>
         <LayoutDrawer opened={openDrawerGroup} onClose={() => setOpenDrawerGroup(false)} title={'EDIT GROUP'}>
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
                  placeholder="Edit group" />
               <Box mt={'xl'}>
                  <Button
                     c={"white"}
                     bg={WARNA.biruTua}
                     size="lg"
                     radius={30}
                     fullWidth
                     onClick={onCLose}>
                     EDIT
                  </Button>
               </Box>
            </Box>
         </LayoutDrawer>
      </Box>
   );


}