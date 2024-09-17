'use client'
import { WARNA } from "@/module/_global/fun/WARNA"
import LayoutDrawer from "@/module/_global/layout/layout_drawer"
// import EditDrawerGroup from "@/module/group/components/ui/edit_drawer_group"
import { ActionIcon, Box, Group, Text, TextInput } from "@mantine/core"
import { useState } from "react"
import { FaUserTie } from "react-icons/fa6"
import { HiMagnifyingGlass } from "react-icons/hi2"
import DrawerDetailPosition from "./drawer_detail_position"

const dataGroup = [
    {
        id: 1,
        name: 'Kepala'
      },
      {
        id: 2,
        name: 'Sekretaris'
      },
      {
        id: 3,
        name: 'Bendahara'
      },
      {
        id: 4,
        name: 'Anggota'
      },
      {
        id: 5,
        name: 'Kepala Urusan kemasyarakatan'
      }
]
export default function ListPositionNonActive(){
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <Box pt={20}>
            <TextInput
            styles={{
                input: {
                    color: WARNA.biruTua,
                    borderRadius: WARNA.biruTua,
                    borderColor: WARNA.biruTua
                },
            }}
            size="md"
            radius={30}
            leftSection={<HiMagnifyingGlass size={20}/> }
            placeholder="Pencarian"
            />
            {dataGroup.map((v, i) => {
                return(
                    <Box pt={20} key={i}>
                        <Group align="center" style={{
                            border: `1px solid ${"#DCEED8"}`,
                            padding: 10,
                            borderRadius: 10
                        }} onClick={() => setOpenDrawer(true)}>
                            <Box>
                                <ActionIcon variant="light" bg={'#DCEED8'} size={50} radius={100} aria-label="Icon">
                                    <FaUserTie size={25} color={WARNA.biruTua}/>
                                </ActionIcon>
                            </Box>
                            <Box>
                                <Text fw={'bold'} c={WARNA.biruTua}>{v.name}</Text>
                            </Box>
                        </Group>
                    </Box>
                )
            })}
                <LayoutDrawer opened={openDrawer} onClose={() => setOpenDrawer(false)} title="Lembaga Pengkreditan Desa">
                <DrawerDetailPosition />
                </LayoutDrawer>
        </Box>
        

    );
}