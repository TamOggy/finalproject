import React from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const CheckoutModal = ({ open, onClose, product }) => {
  if (!product) return null;

  const handleConfirmPayment = () => {
    alert("Đặt hàng thành công!");
    onClose(); 
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '50%', bgcolor: 'background.paper', borderRadius: 2, boxShadow: 24, p: 4,
        }}
      >
        {/* Nút X để đóng modal */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            fontSize: '24px',
          }}
        >
          <i className="fas fa-times" />
        </button>

        <Typography variant="h6" component="h2" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Thanh Toán
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          Sản phẩm: {product.name}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Giá: {product.price} VNĐ
        </Typography>

        <TextField label="Họ và tên" fullWidth sx={{ mb: 2 }} />
        <TextField label="Email" fullWidth sx={{ mb: 2 }} />
        <TextField label="Địa chỉ giao hàng" fullWidth sx={{ mb: 2 }} />
        <TextField label="Số điện thoại" fullWidth sx={{ mb: 2 }} />

        <Box display="flex" justifyContent="center" mt={2}>
          <Button variant="contained" color="primary" onClick={handleConfirmPayment}>
            Xác nhận Thanh Toán
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CheckoutModal;