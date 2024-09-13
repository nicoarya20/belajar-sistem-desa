'use client'

import { WARNA } from "@/module/_global/fun/WARNA"
import { ActionIcon, Box, Grid, Text } from "@mantine/core"
import { HiUser } from "react-icons/hi"

const dataNotification = [
   {
      id: 1,
      title: 'Rapat Kamis',
      description: 'Pengumuman mengenai penggunaan aplikasi versiku',
   },
   {
      id: 2,
      title: 'Rapat Jumat',
      description: 'Pengumuman mengenai penggunaan aplikasi versiku',
   },
   {
      id: 3,
      title: 'Rapat Sabtu',
      description: 'Pengumuman mengenai penggunaan aplikasi versiku',
   },
   {
      id: 4,
      title: 'Rapat Minggu',
      description: 'Pengumuman mengenai penggunaan aplikasi versiku',
   },
   {
      id: 5,
      title: 'Rapat Senin',
      description: 'Pengumuman mengenai penggunaan aplikasi versiku',
   },
   {
      id: 6,
      title: 'Rapat Selasa',
      description: 'Pengumuman mengenai penggunaan aplikasi versiku',
   },
   {
      id: 7,
      title: 'Rapat Rabu',
      description: 'Pengumuman mengenai penggunaan aplikasi versiku',
   },
   {
      id: 8,
      title: 'Rapat Kamis',
      description: 'Pengumuman mengenai penggunaan aplikasi versiku',
   }

]

export default function ListNotification() {

   return (
      <Box>
         {dataNotification.map((v, i) => {
            return (
               <Grid style={{
                  border: `1px solid ${WARNA.borderOrange}`,
                  padding: 15,
                  borderRadius: 15,
               }} gutter={1} key={i} mb={"sm"}>
                  <Grid.Col span={3} pl={'xs'}>
                     <ActionIcon variant="light" bg={WARNA.bgIcon} size="50" radius="100" aria-label="icon">
                        <HiUser size={30} color='white' />
                     </ActionIcon>
                  </Grid.Col>
                  <Grid.Col span={9}>
                     <Box>
                        <Text fw={'bold'} fz={18}>{v.title}</Text>
                     </Box>
                  </Grid.Col>
               </Grid>
            )
         })}
      </Box>
   )
}