import { createTheme } from '@mui/material'
import React from 'react'

 const theme = createTheme({
   palette: {
     primary: {
       main: "#2aff00",
       light: "#264420",
       dark: "#ced4da",
       contrastText: "#264420",
     },
     secondary: {
       main: "#1976d2",
       light: "#42a5f5",
       dark: "#1565c0",
       contrastText: "#fff",
     },
   },
 });


export default theme
