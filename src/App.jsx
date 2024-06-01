import { useState } from 'react'

import {RECYCLE_BOTTLES, RECYCLE_CANS} from './constants/machinedata.jsx'
import './index.css'
import WelcomeSection from './modules/WelcomeSection'
// import DemoTest from './modules/DemoTest'
import * as React from 'react';
import {Button, Grid, Typography} from '@mui/material/';
// import AddIcon from '@mui/material/Icon' -- add icons on the buttons if you got time



function App() {
  const [bottleCount, setBottleCount] = useState(0)
  const [canCount, setCanCount] = useState(0)
  const [isButtonDisabled, setisButtonDisabled] = useState(false)

  const moneyGenerated = (bottles, cans) => {
    const bottleMoney = bottles*RECYCLE_BOTTLES.value
    const canMoney = cans*RECYCLE_CANS.value
    return bottleMoney+canMoney
  }

  /*Hanlding the delay for bottle*/
  const delayedSetBottle = (delayValue) => {

    setisButtonDisabled(true)

    setTimeout(() => {
      setBottleCount((count) => count + 1)
      setisButtonDisabled(false)
    }, delayValue)
  }
  
const delayedSetCan = (delayValue) => {
  setisButtonDisabled(true)

  setTimeout(() => {
    setCanCount((count) => count +1)
    setisButtonDisabled(false)
  }, delayValue)
}


  
  return (
    <>
     <WelcomeSection title='Recycle Machine'/>


      <section className="card">
        <div className='buttons'>
          <div className='bottlebutton'>
            <Button  variant="contained"  onClick = {() => delayedSetBottle(RECYCLE_BOTTLES.latency)} disabled={isButtonDisabled}>
              Bottle 3 NOK
            </Button>
          </div>
          <div className='canbutton'>
            <Button variant="outlined"  onClick={() => delayedSetCan(RECYCLE_CANS.latency)} disabled={isButtonDisabled}>
              Can 2 NOK
            </Button>
          </div>
        </div>

        <Grid container justifyContent="center">
        <div className='voucher'>
          <Typography variant="body1">
          Number of bottles returned: {bottleCount} <br/>
          Number of bottles cans: {canCount}  <br/>
          Total of bottles and cans returned {bottleCount+canCount}
          </Typography>
          <hr/>
          <div className='moneyearned'>
            <Typography variant="body1">
            Total money earned: {moneyGenerated(bottleCount,canCount)} <br/>
            </Typography>
            <div>
              <Button variant="contained" color='success' onClick={() => alert("here is your voucher")}>
                Get voucher
              </Button>
            </div>
          </div>
        </div>
        </Grid>
      </section>
  
  
    </>
  )
}

export default App
