import React, { useState, useEffect } from 'react';
import {
    Container,
    Box,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    CircularProgress,
    Alert,
    Chip,
} from '@mui/material';
import { Add, Edit, Delete, Visibility } from '@mui/icons-material';
import { productsAPI } from '../api/client';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        product_image: '',
        shoes_category: '',
        shoes_type: 'New',
        shoes_stock: '',
        shoes_description: '',
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await productsAPI.getAll();
            setProducts(response.data);
        } catch (err) {
            setError('Error al cargar productos');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleOpenDialog = (product = null) => {
        if (product) {
            setEditingProduct(product);
            setFormData({
                name: product.name,
                price: product.price,
                product_image: product.product_image || '',
                shoes_category: product.shoes_category,
                shoes_type: product.shoes_type,
                shoes_stock: product.shoes_stock,
                shoes_description: product.shoes_description || '',
            });
        } else {
            setEditingProduct(null);
            setFormData({
                name: '',
                price: '',
                product_image: '',
                shoes_category: '',
                shoes_type: 'New',
                shoes_stock: '',
                shoes_description: '',
            });
        }
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setEditingProduct(null);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const productData = {
                ...formData,
                price: parseInt(formData.price),
                shoes_stock: parseInt(formData.shoes_stock),
            };

            if (editingProduct) {
                await productsAPI.update(editingProduct.id, productData);
            } else {
                await productsAPI.create(productData);
            }

            handleCloseDialog();
            fetchProducts();
        } catch (err) {
            setError(err.response?.data?.detail || 'Error al guardar producto');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de eliminar este producto?')) {
            try {
                await productsAPI.delete(id);
                fetchProducts();
            } catch (err) {
                setError('Error al eliminar producto');
            }
        }
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
                <CircularProgress sx={{ color: '#FFC107' }} />
            </Box>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Panel de Administración
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<Add />}
                    onClick={() => handleOpenDialog()}
                    sx={{ bgcolor: '#FFC107', color: '#000', '&:hover': { bgcolor: '#FFD54F' } }}
                >
                    Nuevo Producto
                </Button>
            </Box>

            {error && (
                <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError('')}>
                    {error}
                </Alert>
            )}

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: '#000' }}>
                            <TableCell sx={{ color: 'white', fontWeight: 700 }}>Imagen</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 700 }}>Nombre</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 700 }}>Categoría</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 700 }}>Tipo</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 700 }}>Precio</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 700 }}>Stock</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 700 }}>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id} hover>
                                <TableCell>
                                    <Box
                                        component="img"
                                        src={product.product_image || 'https://via.placeholder.com/50'}
                                        alt={product.name}
                                        sx={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 1 }}
                                    />
                                </TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.shoes_category}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={product.shoes_type}
                                        size="small"
                                        color={product.shoes_type === 'Featured' ? 'primary' : 'default'}
                                    />
                                </TableCell>
                                <TableCell>${product.price}</TableCell>
                                <TableCell>{product.shoes_stock}</TableCell>
                                <TableCell>
                                    <IconButton
                                        size="small"
                                        onClick={() => handleOpenDialog(product)}
                                        sx={{ color: '#FFC107' }}
                                    >
                                        <Edit />
                                    </IconButton>
                                    <IconButton
                                        size="small"
                                        onClick={() => handleDelete(product.id)}
                                        sx={{ color: '#D32F2F' }}
                                    >
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Dialog for Create/Edit */}
            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
                <DialogTitle>
                    {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
                </DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField
                            fullWidth
                            label="Nombre"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Precio"
                            name="price"
                            type="number"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="URL de Imagen"
                            name="product_image"
                            value={formData.product_image}
                            onChange={handleChange}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Categoría"
                            name="shoes_category"
                            value={formData.shoes_category}
                            onChange={handleChange}
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            select
                            label="Tipo"
                            name="shoes_type"
                            value={formData.shoes_type}
                            onChange={handleChange}
                            required
                            sx={{ mb: 2 }}
                            SelectProps={{ native: true }}
                        >
                            <option value="New">New</option>
                            <option value="Featured">Featured</option>
                        </TextField>
                        <TextField
                            fullWidth
                            label="Stock"
                            name="shoes_stock"
                            type="number"
                            value={formData.shoes_stock}
                            onChange={handleChange}
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Descripción"
                            name="shoes_description"
                            value={formData.shoes_description}
                            onChange={handleChange}
                            multiline
                            rows={3}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog}>Cancelar</Button>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ bgcolor: '#FFC107', color: '#000', '&:hover': { bgcolor: '#FFD54F' } }}
                        >
                            {editingProduct ? 'Actualizar' : 'Crear'}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Container>
    );
};

export default AdminDashboard;
