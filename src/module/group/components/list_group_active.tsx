import { WARNA } from "@/module/_global/fun/WARNA"
import LayoutDrawer from "@/module/_global/layout/layout_drawer"
import { ActionIcon, Box, Group, Text, TextInput } from "@mantine/core"
import { HiOutlineOfficeBuilding } from "react-icons/hi"
import { HiMagnifyingGlass } from "react-icons/hi2"
import EditDrawerGroup from "./ui/edit_drawer_group"
import React, { useState } from "react"

const dataGroup = [
   {
      id: 1,
      name: "Lembaga Pengkreditan Desa"
   },
   {
      id: 2,
      name: "Lembaga Pengkreditan Desa"
   },
   {
      id: 3,
      name: "Lembaga Pengkreditan Desa"
   },
   {
      id: 4,
      name: "Lembaga Pengkreditan Desa"
   },
   {
      id: 5,
      name: "Lembaga Pengkreditan Desa"
   },
   {
      id: 6,
      name: "Lembaga Pengkreditan Desa"
   },
   {
      id: 7,
      name: "Lembaga Pengkreditan Desa"
   },
   {
      id: 8,
      name: "Lembaga Pengkreditan Desa"
   }
]

export default function ListGroupActive() {
   const [openDrawer, setOpenDrawer] = useState(false)
   return (
      <Box pt={20}>
         <TextInput
            styles={{
               input: {
                  color: WARNA.biruTua,
                  borderRadius: WARNA.biruTua,
                  borderColor: WARNA.biruTua,
               },
            }}
            size="lg"
            radius={30}
            leftSection={<HiMagnifyingGlass size={20} />}
            placeholder="Pencarian"
         />
         {dataGroup.map((v, i) => {
            return (
               <Box key={i} pt={20}>
                  <Group align="center" style={{
                     border: `1px solid ${"#DCEED8"}`,
                     padding: 10,
                     borderRadius: 10
                  }} onClick={() => setOpenDrawer(true)}>
                     <Box>
                        <ActionIcon variant="light" bg={'#DCEED8'} size={50} radius={100} aria-label="icon">
                           <HiOutlineOfficeBuilding color={WARNA.biruTua} size={25} />
                        </ActionIcon>
                     </Box>
                     <Box>
                        <Text fw={'bold'} c={WARNA.biruTua}>{v.name}</Text>
                     </Box>
                  </Group>
               </Box>
            )
         })}
         <LayoutDrawer opened={openDrawer} onClose={() => setOpenDrawer(false)} title={"LEMBAGA PENGKREDITAN DESA"}>
            <EditDrawerGroup />
         </LayoutDrawer>
      </Box>
   )
}