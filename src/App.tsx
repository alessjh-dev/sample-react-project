import reactLogo from './assets/react.svg'
import audi from './assets/audi.png'
import lamborghini from './assets/lamborgini.png'
import ferrari from './assets/ferrari.png'
import './App.css'
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';

function App() {

  const [car, setCar] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCar(event.target.value as string);
  };

  const carImage = () => {
    if (car === '1') {
      return <img src={lamborghini} alt="" height={100} />
    } else if (car === '2') {
      return <img src={audi} alt="" height={300} />
    } else if(car === '3') {
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
        <InputLabel id="demo-simple-select-label">Carro</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={car}
          label="Auto"
          onChange={handleChange}
        >
          <MenuItem value={'1'}>Lamborghini</MenuItem>
          <MenuItem value={'2'}>Audi</MenuItem>
          <MenuItem value={'3'}>Ferrari</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{marginTop:'2rem'}}>
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
