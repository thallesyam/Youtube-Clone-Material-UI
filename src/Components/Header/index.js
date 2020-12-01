import React from 'react'

import { AppBar, Toolbar, IconButton, Button, makeStyles, Switch } from '@material-ui/core'

// Icones
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle'

import VideoCall from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';

import { useTheme } from '@material-ui/core/styles'


const useStyle = makeStyles( (theme) => ({
  AppBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft:  theme.spacing(6)
  },
  icons: {
    paddingRight: theme.spacing(5)
  },
  grow: {
    flexGrow: 1
  },
  logo: {
    height: 30
  }
}))

const Header = ({ darkMode, setDarkMode }) => {
  const classes = useStyle()
  const theme = useTheme()


  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.AppBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuIcon} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src={ theme.palette.type === 'dark' 
            ? "/images/branco.png" : "/images/preto.png" 
          
          } alt="Logo" className={classes.logo}/>
          <div className={classes.grow} />

          <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} />

          {/* Quebrar Icones em outro component */}
          <IconButton className={classes.icons}>
            <VideoCall />

          </IconButton>
          <IconButton className={classes.icons}>
            <AppsIcon />
          </IconButton>

          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>

          <Button startIcon={<AccountCircle />} variant={"outlined"} color="secondary">Fazer Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
