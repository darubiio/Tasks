import React from 'react';
import {
  Box,
  Grid,
  Button,
  Divider,
  ButtonGroup,
  Drawer,
  CheckIcon,
  IconButton,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Editable,
  EditablePreview,
  EditableInput,
  useEditableControls
} from "@chakra-ui/react";

export const DrawerC = ({ isOpen, onClose, btnRef, taskD }) => {

  const EditableHandle = () => {
    const {
      isEditing,
      getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
      <i className="bi bi-hand-thumbs-up" />
    ) : (
      <i style={{color:'#38B2AC'}} className="bi bi-pencil" {...getEditButtonProps()} />
    )
  };
   

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody >
          <Box color='blackAlpha.800' pt={10}>
            <Editable
              selectAllOnFocus={false}
              isPreviewFocusable={false}
              textAlign='center'              
              fontSize='xl'
              defaultValue={taskD.name}>
              <EditablePreview />
              <EditableInput style={{ boxShadow: 'none' }} />
              <Grid mt={5} templateColumns="repeat(3, 1fr)" gap={4}>
                <i className='bi bi-check-circle' />
                <i style={{color:'#CA3B3B'}} className='bi bi-star' />
                <EditableHandle />
              </Grid>
            </Editable>

            <Button
              mt={5}
              textAlign='left'  
              isFullWidth
              leftIcon={<i className='bi bi bi-sun' />}
              style={{ boxShadow: 'none' }}
              colorScheme="yellow"
              variant="link">
              Agregar a Mi Día
            </Button>
            

            <Button
              mt={5}
              isFullWidth
              leftIcon={<i className="bi bi-calendar-event"/>}
              style={{ boxShadow: 'none' }}
              colorScheme="blue"
              variant="link">
              Agregar fecha de Vencimiento
            </Button>

            <Button
              mt={5}
              isFullWidth
              leftIcon={<i className="bi bi-plus"/>}
              style={{ boxShadow: 'none' }}
              colorScheme="green"
              variant="link">
              Agregar Paso
            </Button>

            <Divider mt={6} mb={6} />

          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
};