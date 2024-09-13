'use client'
import { Box, rem, Tabs } from '@mantine/core';
import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoCloseCircleOutline } from 'react-icons/io5';
import ListGroupActive from './list_group_active';
import ListGroupNonActive from './list_group_non_active';

export default function Tab_List_Group() {
   const iconStyle = { width: rem(20), height: rem(20) };

   return (
      <Box p={20}>
         <Tabs variant="pills" color='#FF9861' radius="xl" defaultValue={"aktif"}>
            <Tabs.List bg={"white"} style={{
               border: `1px solid ${"#EDEDED"}`,
               padding: 5,
               borderRadius: 100

            }}>
               <Tabs.Tab value="aktif" w={"45%"} leftSection={<IoMdCheckmarkCircleOutline style={iconStyle} />}>
                  Aktif
               </Tabs.Tab>
               <Tabs.Tab value="tidak-aktif" w={"53%"} leftSection={<IoCloseCircleOutline style={iconStyle} />}>
                  Tidak Aktif
               </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="aktif">
               <ListGroupActive />
            </Tabs.Panel>
            <Tabs.Panel value="tidak-aktif">
               <ListGroupNonActive />
            </Tabs.Panel>
         </Tabs>
      </Box>
   )
}
