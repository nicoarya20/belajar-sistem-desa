"use client"

import { isModal } from "@/module/_global/val/isModal"
import { useHookstate } from "@hookstate/core"
import { Box, Button, Stack, TextInput } from "@mantine/core"
import toast from "react-hot-toast"
import HeaderEditProfile from "./ui/header_edit_profile"
import { WARNA } from "@/module/_global/fun/WARNA"
import { HiUser } from "react-icons/hi2"
import LayoutModal from "@/module/_global/layout/layout_modal"

export default function EditProfile() {
   const openModal = useHookstate(isModal)

   function onTrue(){
    toast.success("Sukses Data Tersimpan!")
    openModal.set(false)
   }
    return (
       <Box>
        <HeaderEditProfile/>
        <Stack
        align="center"
        justify="center"
        gap={"xs"}
        pt={30}
        px={20}>
            <Box bg={WARNA.biruTua} py={30} px={50}
            style={{
               borderRadius: 10,
            }}>
                <HiUser size={100} color={WARNA.bgWhite}/>
            </Box>
            <TextInput
            size="md" type="number" radius={30} placeholder="NIK" withAsterisk label="NIK" w={"100%"}
            styles={{
                input: {
                   color: WARNA.biruTua,
                   borderRadius: WARNA.biruTua,
                   borderColor: WARNA.biruTua,
                },
            }}
            />
              <TextInput
            size="md" type="type" radius={30} placeholder="Nama" withAsterisk label="Nama" w={"100%"}
            styles={{
                input: {
                   color: WARNA.biruTua,
                   borderRadius: WARNA.biruTua,
                   borderColor: WARNA.biruTua,
                },
            }}
            />
              <TextInput
            size="md" type="email" radius={30} placeholder="Email" withAsterisk label="Email" w={"100%"}
            styles={{
                input: {
                   color: WARNA.biruTua,
                   borderRadius: WARNA.biruTua,
                   borderColor: WARNA.biruTua,
                },
            }}
            />
              <TextInput
            size="md" type="number" radius={30} placeholder="+62...." withAsterisk label="Nomor Telepon" w={"100%"}
            styles={{
                input: {
                   color: WARNA.biruTua,
                   borderRadius: WARNA.biruTua,
                   borderColor: WARNA.biruTua,
                },
            }}
            />
        </Stack>
        <Box mt={30} mx={20} pb={20}>
            <Button
            c={'white'}
            bg={WARNA.biruTua}
            radius={30}
            fullWidth
            onClick={() => openModal.set(true)}
            >Simpan
            </Button>
        </Box>
        <LayoutModal opened={openModal.get()} onClose={() => openModal.set(false)} 
        description={"Apakah anda yakin ingin mengganti status aktivasi anda?"} onYes={onTrue}/>
       </Box>
    )
}