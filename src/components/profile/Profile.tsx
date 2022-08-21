
import React from "react";
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Logout from '@mui/icons-material/Logout';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import PersonAdd from '@mui/icons-material/PersonAdd';

const Profile: React.FC<any> = ({openProfile, anchorEl, handleClose}) => {
    return (
        <Menu
            id="fade-menu"
            MenuListProps={{
                'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={openProfile}
            onClose={handleClose}
            TransitionComponent={Fade}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem onClick={handleClose}>
                <CodeOutlinedIcon style={{marginRight: '10px', color: '#EF4137', opacity: '0.8'}}>
                    <PersonAdd fontSize="small" />
                </CodeOutlinedIcon>
                Промокод
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <LoginOutlinedIcon style={{marginRight: '10px', color: '#EF4137', opacity: '0.8'}}>
                    <Logout fontSize="small" />
                </LoginOutlinedIcon>
                Войти
            </MenuItem>
        </Menu>
    )

}

export default Profile;