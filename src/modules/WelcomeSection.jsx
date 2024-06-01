import React from 'react'
import recycleLogo from '../assets/images/recycleLogo.png'
import {Typography, Grid } from '@mui/material'


const WelcomeSection = ({title}) => {
  return (

    <section className='welcomeSection'>
        <div>
          <div className='headerSection'>
            <img src={recycleLogo} className="recycleLogo" alt="recycle logo" />
            <Typography variant="h3">{title}</Typography>
          </div>
        </div>
    </section>

  )
}

export default WelcomeSection