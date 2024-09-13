'use client'

import { WARNA } from "@/module/_global/fun/WARNA"
import { ActionIcon, Box, Group, Text, TextInput } from "@mantine/core"
import { useRouter } from "next/navigation"
import { HiMagnifyingGlass, HiMiniUser } from "react-icons/hi2"

const dataMember = [
   {
      id: 1,
      name: 'Yono',
      desc: 'Taruna'
   },
   {
      id: 2,
      name: 'Yanto',
      desc: 'Pengurus'
   },
   {
      id: 3,
      name: 'Marcel',
      desc: 'Kepala Desa'
   },
   {
      id: 4,
      name: 'Yanu',
      desc: 'Taruna'
   },
   {
      id: 5,
      name: 'Yunus',
      desc: 'Pengurus'
   },
   {
      id: 6,
      name: 'Marko',
      desc: 'Wakil Kepala Desa'
   },
]

export default function ListMember() {
   const router = useRouter()
   return (
     <Box p={20}>
      <TextInput
      styles={{
         input: {
            color: WARNA.biruTua,
            borderRadius: WARNA.biruTua,
            borderColor: WARNA.biruTua,
         },
      }}
      size="md"
      radius={30}
      leftSection={<HiMagnifyingGlass size={20} />}
      placeholder="Pencarian"
      />
      {dataMember.map((v, i) => {
         return (
            <Box pt={20} key={i} onClick={() => {
               router.push(`/member/${v.id}`)
            }}>
               <Group align="center" style={{
                  borderBottom: `1px solid #D9D9D9 `,
                  padding: 10,
               }}>
                  <Box>
                     <ActionIcon>
                        <HiMiniUser color='white' size={25}/>
                     </ActionIcon>
                  </Box>
                  <Box>
                     <Text fw={'bold'} c={WARNA.biruTua}>{v.name}</Text>
                  </Box>

               </Group>
               
            </Box>
         )
      })}
     </Box>
   )
}