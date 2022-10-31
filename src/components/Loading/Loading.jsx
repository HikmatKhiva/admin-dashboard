import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Loading = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '100%', alignItems: 'center',height:'150px' }}>
            <CircularProgress sx={{color:'#504178',height:'60px !important',width:'60px !important'}} />
            <p style={{marginTop:'10px',fontSize:'18px',fontWeight:'500',color:'#504178',letterSpacing:'1px'}}>Loading</p>
        </Box>
    )
}

export default Loading