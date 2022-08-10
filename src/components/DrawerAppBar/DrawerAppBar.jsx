import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './DrawerAppBar.css';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [ 
{ name: 'Home', path: '/user' },
{ name: 'New Workout', path: '/new' },
{ name: 'Current Workout', path: '/current' },
{ name: 'Workout History', path: '/history' },
{ name: 'About', path: '/about' },
];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogOut = () => {
        // dispatch logout
        dispatch ({ type: 'LOGOUT'});
        // route useer to login page
        history.push('/login');
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
            STEEL CORE
        </Typography>
        <Divider />
        <List>
            {navItems.map((item) => (
            <Link  className="navLinks" to={item.path} underline='none' key={item.name}>
            
                <ListItem key={item.name} disablePadding >
                <ListItemButton sx={{ textAlign: 'center', color: '#fff' }} >
                <ListItemText primary={item.name} underline="none"/>
                </ListItemButton>
            </ListItem>
            </Link>
            ))}
            <Toolbar />
            <ListItem onClick={handleLogOut} disablePadding>
                <ListItemButton sx={{ textAlign: 'center', color: '#fff' }} >
                <ListItemText primary='Log Out' />
                </ListItemButton>
            </ListItem>
        </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

return (
    <Box sx={{ display: 'flex' }}>
    <AppBar component="nav">
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
        >
            <MenuIcon />
        </IconButton>
        {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
            STEEL CORE
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
            <Button key={item.name} sx={{ color: '#fff' }}>
                {item.name}
            </Button>
            ))}
        </Box> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            STEEL CORE
        </Typography>
        </Toolbar>
    </AppBar>
    <Box component="nav">
        <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
            keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        >
        {drawer}
        </Drawer>
    </Box>
    <Toolbar />
    {/* <Box component="main" sx={{ p: 3 }}>
        {/* <Toolbar /> */}
        {/* <Typography>

        </Typography> */}
        {/* </Box> */}
    </Box>
    );
};


export default DrawerAppBar;