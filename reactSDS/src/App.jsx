import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material';
import './App.css';
import { useState } from 'react';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

function App() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white' }}>
        <Typography variant="h1" component="h1" sx={{ textAlign: 'center', padding: 2 }}>
          Sensor Directed Sampling
        </Typography>
      </Box>

      {/* Main content area */}
      <Box sx={{ padding: 2, flexGrow: 1 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          padding: 1,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div></div>
        <Typography variant="body2">Built with React and MUI</Typography>
        <Typography variant="body2">© 2023 Sensor Directed Sampling. All rights reserved.</Typography>
        <div></div>
      </Box>
    </div>
  );
}

export default App;
