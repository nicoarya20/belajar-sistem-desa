"use client"
import { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { WARNA } from "@/module/_global/fun/WARNA";
import { Flex, Text } from "@mantine/core";
import Autoplay  from "embla-carousel-autoplay";

export default function Carosole() {
   const autoplay = useRef(Autoplay({ delay: 5000 }));
   return (
      <>
         <Carousel
            withIndicators
            height={150}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
         >
            <Carousel.Slide bg={WARNA.biruTua} style={{ borderRadius: 10 }}>
            <Flex justify={'center'} h={"100%"} align={'center'}>
            <Text c={"white"}>INFORMASI DARMASABA</Text> 
            </Flex>
            </Carousel.Slide>
            <Carousel.Slide bg={WARNA.biruTua} style={{ borderRadius: 10 }}>
            <Flex justify={'center'} h={"100%"} align={'center'}>
            <Text c={"white"}>INFORMASI DARMASABA</Text> 
            </Flex>
            </Carousel.Slide>
            <Carousel.Slide bg={WARNA.biruTua} style={{ borderRadius: 10 }}>
            <Flex justify={'center'} h={"100%"} align={'center'}>
            <Text c={"white"}>INFORMASI DARMASABA</Text> 
            </Flex>
            </Carousel.Slide>
         </Carousel>
      </>
   );
}