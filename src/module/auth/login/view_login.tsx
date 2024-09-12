'use client'

import { WARNA } from "@/module/_global/fun/WARNA";
import LayoutLogin from "@/module/_global/layout/layout_login";
import { Box, Button, Checkbox, Stack, Text, TextInput } from "@mantine/core";
import { useRouter } from "next/navigation";

function ViewLogin() {
   const router = useRouter()
   const textInfo =
      "Kami akan mengirim kode verifikasi melalui WhatsApp, guna mengkonfirmasikan nomor Anda.";

   function onMasuk() {
      router.push("/verification")
      window.location.href = "/verification"
   }

   return (
      <>
         <Box>
            <LayoutLogin>
               <Stack pt={30}>
                  <Box p={10}>
                     <TextInput
                        styles={{
                           input: {
                              color: WARNA.biruTua,
                              borderRadius: WARNA.biruTua,
                              borderColor: WARNA.biruTua
                           },
                        }}
                        size="md"
                        type="number"
                        radius={30}
                        leftSection={<Text>+62</Text>}
                        placeholder="XXX XXX XXX"
                     />
                     <Text fz={10} mt={10} c={WARNA.biruTua}>
                        {textInfo}
                     </Text>
                     <Checkbox
                     mt={20}
                     label={
                        <Text fz={10} c={WARNA.biruTua}>
                           Ingat saya
                        </Text>
                     }
                     />
                     <Box mt={20}>
                        <Button
                        c={"white"}
                        bg={WARNA.biruTua}
                        size="md"
                        radius={30}
                        fullWidth
                        onClick={onMasuk}
                        >
                           Masuk
                        </Button>   
                     </Box>
                  </Box>
               </Stack>
            </LayoutLogin>
         </Box>
      </>
   );
}

export default ViewLogin;