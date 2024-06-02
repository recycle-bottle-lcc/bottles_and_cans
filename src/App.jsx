import { useState } from 'react'
import * as React from 'react'
import {RECYCLE_BOTTLES, RECYCLE_CANS} from './constants/machinedata.jsx'
import './index.css'
import WelcomeSection from './modules/WelcomeSection'
// import DemoTest from './modules/DemoTest'
import {Button, Grid, Typography} from '@mui/material/'
// import AddIcon from '@mui/material/Icon' -- add icons on the buttons if you got time
import { db } from '../firebase_config.js'
import { collection, addDoc } from 'firebase/firestore'


function App() {
  const [bottleCount, setBottleCount] = useState(0)
  const [canCount, setCanCount] = useState(0)
  const [isButtonDisabled, setisButtonDisabled] = useState(false)

  const moneyGenerated = (bottles, cans) => {
    const bottleMoney = bottles*RECYCLE_BOTTLES.value
    const canMoney = cans*RECYCLE_CANS.value
    const totalMoney = bottleMoney+canMoney
    return totalMoney
  }

  /*Hanlding the delay for bottle*/
  const delayedSetBottle = (delayValue) => {

    setisButtonDisabled(true)

    setTimeout(() => {
      setBottleCount((count) => count + 1)
      setisButtonDisabled(false)
    }, delayValue)
  }
  
  async function getVoucher(numberBottlesDelivered, numberCansDelivered, moneyRecieved) {
    try {
      const docRef = await addDoc(collection(db, "voucher"), {
        bottleDelivered: numberBottlesDelivered,
        cansDelivered: numberCansDelivered,
        moneyRecieved: moneyRecieved,
      })
      return docRef.id
    } catch (e) {
      console.error("could not add voucher: ", e)
    }
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
              <Button variant="contained" color='success' onClick={async() => {
              
                  const docId = await getVoucher(bottleCount, canCount, moneyGenerated(bottleCount, canCount))
                  if (docId) {
                    alert(`Please show this ID to the cashier: ${docId}`)
                  }
                  setBottleCount(0)
                  setCanCount(0)
                }}>
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
