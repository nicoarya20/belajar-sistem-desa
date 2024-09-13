import { Box, Group, Text } from "@mantine/core";
import NavbarDetailMember from "../component/ui/navbar_detail_member";
import { RiIdCardFill } from "react-icons/ri";

export default function ViewDetailMember({data}: {data: string}) {
  return (
    <Box>
      <NavbarDetailMember/>
      <Box p={20}>
         <Group justify="space-between" grow py={5}>
            <Group>
            <RiIdCardFill size={28}/>
            <Text fz={18}>NIK</Text>
            </Group>
            <Text fz={18} fw={'bold'} ta={'right'}>1234567890</Text>
         </Group>
         <Group justify="space-between" grow py={5}>
            <Group>
            <RiIdCardFill size={28}/>
            <Text fz={18}>NoTelepon</Text>
            </Group>
            <Text fz={18} fw={'bold'} ta={'right'}>+6283456789012</Text>
         </Group>
         <Group justify="space-between" grow py={5}>
            <Group>
            <RiIdCardFill size={28}/>
            <Text fz={18}>Email</Text>
            </Group>
            <Text fz={18} fw={'bold'} ta={'right'}>marcel@gmail.com</Text>
         </Group>
      </Box>
    </Box>
  )
}
