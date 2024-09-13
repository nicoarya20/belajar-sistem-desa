import React from 'react'
import NavbarSearch from '../components/ui/navbar_search'
import { Box, TextInput } from '@mantine/core'
import { WARNA } from '@/module/_global/fun/WARNA'
import { HiMagnifyingGlass } from 'react-icons/hi2'

export default function ViewSearch() {
  return (
    <>
      <NavbarSearch/>
      <Box p={20}>
      <TextInput
      styles={{
         input: {
            color: WARNA.biruTua,
            borderRadius: WARNA.biruTua,
            borderColor: WARNA.biruTua
         },
      }}
      size='md'
      radius={30}
      leftSection={<HiMagnifyingGlass size={20}/> }
      placeholder='Pencarian'
      />
      </Box>
    </>
  )
}
