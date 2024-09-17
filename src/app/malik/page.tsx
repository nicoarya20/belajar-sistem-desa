'use client'
import { Button, Stack } from "@mantine/core";

export default function Page() {
   const nomor = "6289647037426"
   const pesan = "ini adalah kode verifikasi 3453"
   async function onKirim(){
      const kirim = await fetch(`https://wa.wibudev.com/code?nom=${nomor}&text=${pesan}`)
      const data = await kirim.text()
      console.log(data)
   }
   return <Stack>
      <h1>Malik</h1>
      <Button onClick={onKirim}>Kirim</Button>
   </Stack>
}