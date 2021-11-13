import { FC } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useColorModeValue,
  useDisclosure,
  Box,
  VStack,
  FormLabel,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
interface Props {}

const ContactModal: FC<Props> = () => {
  const {
    isOpen: isContactModalOpen,
    onOpen: onContactModalOpen,
    onClose: onContactModalClose,
  } = useDisclosure();

  return (
    <>
      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={useColorModeValue('red.900', 'red.700')}
        href={'#'}
        _hover={{
          bg: useColorModeValue('red.700', 'red.900'),
        }}
        onClick={onContactModalOpen}
      >
        Contact Me
      </Button>
      <Modal
        onClose={onContactModalClose}
        isOpen={isContactModalOpen}
        // motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Me</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <VStack spacing={5}>
                <FormControl id="name">
                  <FormLabel>Your Name</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsPerson color="gray.800" />}
                    />
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Mail</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<FiMail color="gray.800" />}
                    />
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Message</FormLabel>
                  <Textarea borderColor="gray.300" />
                </FormControl>
                <FormControl>
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    color="white"
                    float="right"
                    mb={3}
                  >
                    Send Message
                  </Button>
                </FormControl>
              </VStack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactModal;
