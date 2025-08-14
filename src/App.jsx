import * as React from 'react';
import './App.css';
import './index.css';
import AlertDialog from './components/pop';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import ClientSection from './components/Client/Client';
import VectorScreen from './components/VectorScreen/VectorScreen';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>

      <Header />
      <HeroSection />
      <ClientSection />
      <VectorScreen />
      <h2 className="text-3xl font-bold underline text-center">
        Hello world!
      </h2>
      <Box className='flex justify-center items-center mt-10'>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
      </Box>
      <AlertDialog open={open} handleClose={handleClose} />
    </>
  );
}

export default App;
