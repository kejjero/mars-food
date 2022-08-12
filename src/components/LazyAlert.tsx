import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import React from "react";

const LazyAlert: React.FC = () => {
    return (
        <Box sx={{
            display: 'flex' ,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '30px'
        }}>
            <h2>Идет загрузка страницы...</h2>
            <CircularProgress color="error"/>
        </Box>
    );
}


export default LazyAlert;
