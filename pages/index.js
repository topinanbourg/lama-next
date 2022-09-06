import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import { useTheme } from '@mui/material';
import Image from 'next/image';


const Section = ({ children, ...rest }) => {
  return (
    <Box sx={{
      my: 0,
    }}
      {...rest}
    >
      {children}
    </Box >
  );
}


export default function Index() {

  const [currentStep, setCurrentStep] = React.useState(0);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  }
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  }

  return (
    <>
      {currentStep === 0 && (
        <Section key="step0">
          <Typography variant="h4" component="h1" gutterBottom>
            How to ({currentStep})
          </Typography>
          <Button variant="contained" onClick={nextStep}>
            Go to next step
          </Button>
          <ProTip />
        </Section>
      )}
      {
        currentStep === 1 && (
          <Section key="step1">
            <Typography variant="h4" component="h1" gutterBottom>
              Play ({currentStep})
            </Typography>
            <Button variant="contained" onClick={prevStep}>
              Go to previous step
            </Button>
            <ProTip />
          </Section >
        )}
    </>
  );
}
