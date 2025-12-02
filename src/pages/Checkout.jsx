import React, { useState } from 'react';
import {
    Container,
    Box,
    Typography,
    Paper,
    Grid,
    TextField,
    Button,
    Divider,
    Alert,
    MenuItem,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { ordersAPI } from '../api/client';

const Checkout = () => {
    const navigate = useNavigate();
    const { cartItems, cartTotal, clearCart } = useCart();
    const [formData, setFormData] = useState({
        user_address: '',
        payment: 'Tarjeta de Crédito',
        shipping_method: 'Estándar',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.user_address.trim()) {
            setError('Por favor ingresa tu dirección de envío');
            return;
        }

        setLoading(true);
        setError('');

        try {
            await ordersAPI.create(formData);
            setSuccess(true);
            clearCart();

            // Redirect to orders page after 2 seconds
            setTimeout(() => {
                navigate('/orders');
            }, 2000);
        } catch (error) {
            setError(error.response?.data?.detail || 'Error al procesar el pedido');
        } finally {
            setLoading(false);
        }
    };

    if (cartItems.length === 0 && !success) {
        navigate('/cart');
        return null;
    }

    if (success) {
        return (
            <Container maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
                <CheckCircle sx={{ fontSize: 80, color: '#4CAF50', mb: 2 }} />
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                    ¡Pedido Realizado!
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    Tu pedido ha sido procesado exitosamente. Redirigiendo a tus pedidos...
                </Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>
                Finalizar Compra
            </Typography>

            {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                </Alert>
            )}

            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    {/* Shipping Information */}
                    <Grid item xs={12} md={8}>
                        <Paper sx={{ p: 3, mb: 3 }}>
                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                                Información de Envío
                            </Typography>

                            <TextField
                                fullWidth
                                label="Dirección de Envío"
                                name="user_address"
                                value={formData.user_address}
                                onChange={handleChange}
                                required
                                multiline
                                rows={3}
                                sx={{ mb: 3 }}
                            />

                            <TextField
                                fullWidth
                                select
                                label="Método de Envío"
                                name="shipping_method"
                                value={formData.shipping_method}
                                onChange={handleChange}
                                sx={{ mb: 3 }}
                            >
                                <MenuItem value="Estándar">Estándar (5-7 días) - Gratis</MenuItem>
                                <MenuItem value="Express">Express (2-3 días) - $10</MenuItem>
                            </TextField>
                        </Paper>

                        <Paper sx={{ p: 3 }}>
                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                                Método de Pago
                            </Typography>

                            <TextField
                                fullWidth
                                select
                                label="Forma de Pago"
                                name="payment"
                                value={formData.payment}
                                onChange={handleChange}
                            >
                                <MenuItem value="Tarjeta de Crédito">Tarjeta de Crédito</MenuItem>
                                <MenuItem value="Tarjeta de Débito">Tarjeta de Débito</MenuItem>
                                <MenuItem value="PayPal">PayPal</MenuItem>
                                <MenuItem value="Transferencia">Transferencia Bancaria</MenuItem>
                            </TextField>
                        </Paper>
                    </Grid>

                    {/* Order Summary */}
                    <Grid item xs={12} md={4}>
                        <Paper sx={{ p: 3, position: 'sticky', top: 80 }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                                Resumen del Pedido
                            </Typography>

                            {/* Cart Items */}
                            <Box sx={{ mb: 2 }}>
                                {cartItems.map((item) => (
                                    <Box
                                        key={item.id}
                                        sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}
                                    >
                                        <Typography variant="body2">
                                            {item.product_name} x{item.product_quantity}
                                        </Typography>
                                        <Typography variant="body2">
                                            ${item.price * item.product_quantity}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>

                            <Divider sx={{ my: 2 }} />

                            <Box sx={{ mb: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography>Subtotal:</Typography>
                                    <Typography>${cartTotal}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography>Envío:</Typography>
                                    <Typography>
                                        {formData.shipping_method === 'Express' ? '$10' : 'Gratis'}
                                    </Typography>
                                </Box>
                            </Box>

                            <Divider sx={{ my: 2 }} />

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                    Total:
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, color: '#FFC107' }}>
                                    ${cartTotal + (formData.shipping_method === 'Express' ? 10 : 0)}
                                </Typography>
                            </Box>

                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="large"
                                disabled={loading}
                            >
                                {loading ? 'Procesando...' : 'Confirmar Pedido'}
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default Checkout;
