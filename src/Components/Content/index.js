import React from 'react'

import {   
  Typography,
  Toolbar,
  Box
} from '@material-ui/core'

import GridContent from '../GridContent'

const Content = () => {
  return (
    <Box p={8}>
      <Toolbar />
      <Typography
        variant='h5'
        color="textPrimary"
        style={{ fontWeight: 600 }}
      >
        Recomendados
      </Typography>

      <GridContent />


    </Box>
  )
}

export default Content
