'use client'

import { WARNA } from "@/module/_global/fun/WARNA";
import { ActionIcon, Box, Center, SimpleGrid, Text } from "@mantine/core";
import {useRouter} from "next/navigation";
import { HiMegaphone, HiMiniPresentationChartBar, HiMiniUserGroup } from "react-icons/hi2";
import { PiUsersFourFill } from "react-icons/pi";

export default function Features() {
   const router = useRouter()
   return (
      <>
         <Box pt={10}>
            <Text c={WARNA.biruTua}>Features</Text>
            <SimpleGrid
               cols={{ base: 4, sm: 4, lg: 4 }}
            >
               <Box>
                  <Center>
                     <ActionIcon variant="gradient"
                        size={68}
                        aria-label="Gradient action icon"
                        radius={100}
                        gradient={{ from: '#DFDA7C', to: '#F2AF46', deg: 174 }}>
                        <HiMiniUserGroup size={35} color={WARNA.biruTua} />
                     </ActionIcon>
                  </Center>
                  <Center>
                     <Text fz={15} c={WARNA.biruTua}>Divisi</Text>
                  </Center>
               </Box>
               <Box onClick={() => router.push('/project')}>
                  <Center>
                     <ActionIcon variant="gradient"
                        size={68}
                        aria-label="Gradient action icon"
                        radius={100}
                        gradient={{ from: '#DFDA7C', to: '#F2AF46', deg: 174 }}>
                        <HiMiniPresentationChartBar size={35} color={WARNA.biruTua} />
                     </ActionIcon>
                  </Center>
                  <Center>
                     <Text fz={15} c={WARNA.biruTua}>Divisi</Text>
                  </Center>
               </Box>
               <Box onClick={() => router.push('/announcement')}>
                  <Center>
                     <ActionIcon variant="gradient"
                        size={68}
                        aria-label="Gradient action icon"
                        radius={100}
                        gradient={{ from: '#DFDA7C', to: '#F2AF46', deg: 174 }}>
                        <HiMegaphone  size={35} color={WARNA.biruTua} />
                     </ActionIcon>
                  </Center>
               </Box>
               <Box onClick={() => router.push('detail-feature')}>
                  <Center>
                     <ActionIcon variant="gradient"
                        size={68}
                        aria-label="Gradient action icon"
                        radius={100}
                        gradient={{ from: '#DFDA7C', to: '#F2AF46', deg: 174 }}>
                        <PiUsersFourFill size={35} color={WARNA.biruTua} />
                     </ActionIcon>
                  </Center>
               </Box>
            </SimpleGrid>
         </Box>
      </>
   );
}