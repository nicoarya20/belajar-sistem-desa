'use client'

import { WARNA } from "@/module/_global/fun/WARNA";
import LayoutLogin from "@/module/_global/layout/layout_login";
import { Box, Stack, Title, Text, Button, PinInput } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function ViewVerification() {
   const router = useRouter();
   function onNext() {
      router.push("/welcome")
      window.location.href = "/welcome"
   }
   return (
      <>
         <Box>
            <LayoutLogin>
               <Stack pt={30}>
                  <Box p={10}>
                     <Title order={5} c={WARNA.biruTua}>
                        Verifikasi Nomor Telepon
                     </Title>
                     <Text fz={12} c={WARNA.biruTua}>
                        Masukkan kode yang kami kirimkan melalui WhatsApp
                     </Text>
                     <Text fz={12} c={WARNA.biruTua} fw={"bold"}>
                        +6289647037426
                     </Text>
                  </Box>
                  <Box pt={30}>
                  <PinInput
                  style={{justifyContent:"center"}}
                  placeholder=""
                  size="lg"
                  styles={{
                     input: {
                        color: WARNA.biruTua,
                        borderRadius: 15,
                        borderColor: WARNA.biruTua
                     },
                  }}
                  />
                  </Box>
                  <Box mt={40}>
                     <Button
                        c={"white"}
                        bg={WARNA.biruTua}
                        size="md"
                        radius={30}
                        fullWidth
                        onClick={onNext}
                     >
                        Lanjut
                     </Button>
                  </Box>
               </Stack>
            </LayoutLogin>
         </Box>
      </>
   );
}