import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Badge,
    Box,
    Container,
} from '@mui/material';
import {
    ShoppingCart,
    Person,
    Logout,
    Visibility,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';

const Header = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated, isAdmin, logout } = useAuth();
    const { cartCount } = useCart();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <AppBar position="sticky" color="secondary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Logo */}
                    <Visibility sx={{ mr: 1, fontSize: 32, color: '#FFC107' }} />
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            fontWeight: 700,
                            cursor: 'pointer',
                            color: '#FFC107',
                        }}
                        onClick={() => navigate('/')}
                    >
                        OptiBelleza
                    </Typography>

                    {/* Navigation */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Button
                            color="inherit"
                            onClick={() => navigate('/products')}
                            sx={{ color: 'white', '&:hover': { color: '#FFC107' } }}
                        >
                            Productos
                        </Button>

                        {isAuthenticated && (
                            <>
                                <Button
                                    color="inherit"
                                    onClick={() => navigate('/home')}
                                    sx={{ color: 'white', '&:hover': { color: '#FFC107' } }}
                                >
                                    Home
                                </Button>

                                {isAdmin && (
                                    <Button
                                        color="inherit"
                                        onClick={() => navigate('/admin/dashboard')}
                                        sx={{
                                            color: '#FFC107',
                                            fontWeight: 700,
                                            '&:hover': { bgcolor: 'rgba(255, 193, 7, 0.1)' }
                                        }}
                                    >
                                        Dashboard Admin
                                    </Button>
                                )}

                                {!isAdmin && (
                                    <Button
                                        color="inherit"
                                        onClick={() => navigate('/orders')}
                                        sx={{ color: 'white', '&:hover': { color: '#FFC107' } }}
                                    >
                                        Mis Pedidos
                                    </Button>
                                )}

                                {!isAdmin && (
                                    <IconButton
                                        color="inherit"
                                        onClick={() => navigate('/cart')}
                                        sx={{ color: 'white', '&:hover': { color: '#FFC107' } }}
                                    >
                                        <Badge badgeContent={cartCount} color="primary">
                                            <ShoppingCart />
                                        </Badge>
                                    </IconButton>
                                )}

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Person sx={{ color: '#FFC107' }} />
                                    <Typography variant="body2" sx={{ color: 'white' }}>
                                        {user?.user_name}
                                    </Typography>
                                    <IconButton
                                        color="inherit"
                                        onClick={handleLogout}
                                        size="small"
                                        sx={{ color: 'white', '&:hover': { color: '#FFC107' } }}
                                    >
                                        <Logout />
                                    </IconButton>
                                </Box>
                            </>
                        )}

                        {!isAuthenticated && (
                            <>

                                <Button
                                    variant="outlined"
                                    onClick={() => navigate('/home')}
                                    sx={{
                                        color: 'white',
                                        borderColor: 'white',
                                        '&:hover': {
                                            borderColor: '#FFC107',
                                            color: '#FFC107',
                                        },
                                    }}
                                >
                                    Home
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => navigate('/login')}
                                    sx={{
                                        color: 'white',
                                        borderColor: 'white',
                                        '&:hover': {
                                            borderColor: '#FFC107',
                                            color: '#FFC107',
                                        },
                                    }}
                                >
                                    Iniciar Sesión
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => navigate('/register')}
                                >
                                    Registrarse
                                </Button>
                            </>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
