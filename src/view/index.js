import React from 'react'
import { 
  makeStyles,
  Box
} from '@material-ui/core';

// Components
import Header from '../Components/Header';
import DrawerComponent from '../Components/Drawer';
import Content from '../Components/Content'

// Dados

const useStyle = makeStyles( (theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark
  },
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPager: {
    width: 240,
    borderRight: 'none'
  },

  listItemText: {
    fontSize: 14
  },
  listItem: {
    paddingTop: 4
  },
  subheader: {
    textTransform: "uppercase"
  }
}))


const Home = ({ darkMode, setDarkMode }) => {
  const classes = useStyle()
  
  return (
    <div className={classes.root}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Box display="flex">
        <DrawerComponent />
        <Content />
      </Box>
    </div>
  )
}

export default Home
