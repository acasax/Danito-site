import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Styles } from '../../constants/StyleConstants'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  maxWidth: 240,
  bgcolor: 'background.paper',
  border: `1px solid ${Styles.Colours.PALETTE.DANITO._darkGray}`,
  boxShadow: 24,
  borderRadius: 5,
  p: 2
}

const ContactModal = ({ title, content, open, onClose }: any) => {
  useEffect(() => {
    console.log('onClose', onClose)
  }, [])

  return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {content}
                </Typography>
            </Box>
        </Modal>
  )
}

export default ContactModal
