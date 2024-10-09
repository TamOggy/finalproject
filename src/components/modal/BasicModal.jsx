import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import './BasicModal.css'

import Latteinbox from '../../../public/lateinbox.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal  ({data})  {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{fontStyle: "italic",fontSize: "18px", color: "#AD6132",textDecoration: "underline", fontWeight: "bold"}}>{data.btn}</Button>
      <Modal
        className='boxmodal'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="box">
          <img src={data.details.img} alt="latte" />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p>{data.details.row1}</p><br />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>{data.details.row2}</p><br />
            <p>{data.details.row3}</p><br />
            <p>{data.details.row4}</p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
