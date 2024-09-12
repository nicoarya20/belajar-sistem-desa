'use client'
import { WARNA } from "@/module/_global/fun/WARNA"
import { ActionIcon, Box, Group } from "@mantine/core"
import { HiOutlineBell, HiOutlineUser } from "react-icons/hi"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter } from "next/navigation";


export default function IconNavbar() {
   const router = useRouter()
   return (
      <Box>
         <Group>
            <ActionIcon onClick={() => router.push("/search")} variant="light" bg={WARNA.bgIcon} size="lg" radius="lg" aria-label="Settings">
               <FaMagnifyingGlass size={20} color='white' />
            </ActionIcon>
            <ActionIcon onClick={() => router.push("/notification")} variant="light" bg={WARNA.bgIcon} size="lg" radius="lg" aria-label="Settings">
               <HiOutlineBell size={20} color='white' />
            </ActionIcon>
            <ActionIcon onClick={() => router.push("/profile")} variant="light" bg={WARNA.bgIcon} size="lg" radius="lg" aria-label="Settings">
               <HiOutlineUser size={20} color='white' />
            </ActionIcon>
         </Group>
      </Box>
   )
}