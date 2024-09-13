'use client'

import { Carousel } from "@mantine/carousel"
import { Stack } from "@mantine/core"

export default function Page() {
   return <Stack>
      <Carousel withIndicators height={200}>
         <Carousel.Slide>1</Carousel.Slide>
         <Carousel.Slide>2</Carousel.Slide>
         <Carousel.Slide>3</Carousel.Slide>
      </Carousel>
   </Stack>
}