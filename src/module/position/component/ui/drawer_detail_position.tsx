import { WARNA } from "@/module/_global/fun/WARNA"
import LayoutDrawer from "@/module/_global/layout/layout_drawer"
import { isDrawer } from "@/module/_global/val/isDrawer"
import { useHookstate } from "@hookstate/core"
import { Box, Button, Flex, Select, SimpleGrid, Stack, Text, TextInput } from "@mantine/core"
import { useState } from "react"
import { FaPencil } from "react-icons/fa6"
import { ImUserCheck } from "react-icons/im"

export default function DrawerDetailPosition() {
    const [openDrawerGroup, setOpenDrawerGroup] = useState(false)
    const openDrawer = useHookstate(isDrawer)
    function onCLose() {
        setOpenDrawerGroup(false)
        openDrawer.set(false)    
    }
    return (
        <Box>
          <Stack pt={10}>
            <SimpleGrid
            cols={{ base: 3, sm: 3, md: 3 }}
            >
                <Flex justify={"center"} align={"center"} direction={"column"}>
                <Box>
                <ImUserCheck size={30} color={WARNA.biruTua}/>
                </Box>
                <Box>
                    <Text c={WARNA.biruTua} ta={"center"}>Status</Text>
                </Box>
                </Flex>
                <Flex justify={"center"} align={"center"} direction={"column"}
                onClick={() => setOpenDrawerGroup(true)}>
                
                <Box>
                    <FaPencil size={30} color={WARNA.biruTua}/>
                </Box>
                <Box>
                    <Text c={WARNA.biruTua} ta={"center"}>Edit</Text>
                </Box>
                </Flex>
            </SimpleGrid>
            </Stack>

            <LayoutDrawer opened={openDrawerGroup} onClose={()=>setOpenDrawerGroup(false)} title={"Edit Jabatan"} size={"lg"}>
                <Box pt={10}>
                    <Select
                    label="Group"
                    placeholder="Pilih Group"
                    data={['Dinas', 'Adat', 'LPD']}
                    size="md"
                    radius={10}
                    mb={5}
                    withAsterisk
                    styles={{
                        input: {
                            color: WARNA.biruTua,
                            borderRadius: WARNA.biruTua,
                            borderColor: WARNA.biruTua,
                        }
                    }}
                    />
                    <TextInput
                    label="Jabatan"
                    styles={{
                        input: {
                            color: WARNA.biruTua,
                            borderRadius: WARNA.biruTua,
                            borderColor: WARNA.biruTua,
                        }
                    }}
                    my={15}
                    size="md"
                    radius={10}
                    placeholder="Nama Jabatan"
                    />
                    <Box mt={'xl'}>
                        <Button
                        c={'white'}
                        bg={WARNA.biruTua}
                        size="lg"
                        radius={30}
                        fullWidth
                        onClick={onCLose}
                        >
                            EDIT
                        </Button>
                    </Box>

                </Box>
            </LayoutDrawer>
        </Box>
    )
}