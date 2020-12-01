import React, {useState} from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Home from './view/index'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  
  const theme = createMuiTheme({
    palette:{
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f33436'
      },
      secondary: {
        main:'#3ea6ff'
      },
      background: {
        default: darkMode ? '#232323' : '#fff',
        dark: darkMode ? '#181818' : '#f3f6f8',
        paper: darkMode ? '#232323' : '#fff' 
      }
    },
    spacing: 4
  })


  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  )
}

export default App