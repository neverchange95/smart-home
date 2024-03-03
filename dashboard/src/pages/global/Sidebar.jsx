import { useState } from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from "../../theme";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AnalyticsIcon from '@mui/icons-material/BarChartOutlined'
import ProfileIcon from '@mui/icons-material/PersonOutlined';
import MapOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const CustomSidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');

    return (
        <Box
            sx={{
                background: `${colors.primary[400]} !important`,
                "& .sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .menu-item.active": {
                    color: "#6870fa !important"
                },
            }}
        >
            <Sidebar collapsed={isCollapsed} padding="5px 35px 5px 20px !important">
                <Menu iconShape="square">
                    {/* LOGO AND MENU ITEM */}
                    <MenuItem 
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h4" color={colors.grey[100]}>
                                    SMARTHUB
                                </Typography>
                                <IconButton><MenuOutlinedIcon /></IconButton>
                            </Box>
                        )}

                    </MenuItem>
                </Menu>
            </Sidebar>
        </Box>
    )
};

export default CustomSidebar;