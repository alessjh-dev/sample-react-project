import reactLogo from './assets/react.svg'
import audi from './assets/audi.png'
import lamborghini from './assets/lamborgini.png'
import ferrari from './assets/ferrari.png'
import './App.css'
import { Box, FormControl, TextField } from '@mui/material';
import React from 'react';

function App() {

  const [car, setCar] = React.useState('');

  const handleChange = (event: any) => {
    setCar(event.target.value as string);
  };

  const carImage = () => {
    if (car === 'lamborghini') {
      return <img src={lamborghini} alt="" height={100} />
    } else if (car === 'audi') {
      return <img src={audi} alt="" height={300} />
    } else if (car === 'ferrari') {
      return <img src={ferrari} alt="" height={200} />
    }
  }


  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Contador con React</h1>
      <div className="card">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <TextField id="outlined-basic" label="Carro" variant="outlined" value={car} onChange={handleChange} />
          </FormControl>
        </Box>
        <Box sx={{ marginTop: '2rem' }}>
          {carImage()}
        </Box>
      </div>
      <p className="read-the-docs">
        Este proyecto se usará para test en TestSigma :)
      </p>
    </>
  )
}

export default App
