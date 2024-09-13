import { WARNA } from '@/module/_global/fun/WARNA';
import { Box, ColorSchemeScript, Container, MantineProvider, rem } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Lato } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "SISTEM DESA MANDIRI",
  description: "I have followed setup instruction carefully",
};

const LatoFont = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript/>
      </head>
      <body className={LatoFont.className}>
        <MantineProvider>
        <Box bg={'#252A2F'} pos={"fixed"} h={"100%"} w={"100%"} style={{
          overflowY: "auto"
        }}>
          <Toaster/>
          <Container mih={'100vh'} p={0} size={rem(550)} bg={WARNA.bgWhite}>
            {children}
          </Container>
        </Box>  
        </MantineProvider>
        </body>
    </html>
  );
}