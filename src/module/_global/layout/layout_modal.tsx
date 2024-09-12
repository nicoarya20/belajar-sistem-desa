import { useHookstate } from '@hookstate/core'
import { isModal } from '../val/isModal'
import { Box, Button, Flex, Modal, Text } from '@mantine/core'
import { BsQuestionCircleFill } from 'react-icons/bs'
export default function LayoutModal({ opened, onClose, description, onYes }: { opened: boolean, onClose: () => void, description: string, onYes: (val: boolean) => void, }) {
   const openModal = useHookstate(isModal)
   return (
      <Modal styles={{
         body: {
            margin: 10,
         },
         content: {
            border: `2px solid ${'#828AFC'}`,
            borderRadius: 10,
         }
      }} opened={opened} onClose={onClose} withCloseButton={false} centered closeOnClickOutside={false}>
         <Flex justify={"center"} align={"center"} direction={"column"}>
            <BsQuestionCircleFill size={100} color="red" />
            <Text mt={30} ta={"center"} fz={18} fw={"bold"}>{description}</Text>
            <Box>
               <Button mb={20} fullWidth size="lg" radius={'xl'} bg={'#4754f0'} onClick={() => onYes(true)}>YA</Button>
               <Button fullWidth size="lg" radius={'xl'} bg={'#DCE1FE'} color={'#4754f0'} onClick={() => openModal.set(false)}>TIDAK</Button>
            </Box>
         </Flex>
      </Modal>
   );

}