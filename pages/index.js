import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tip from '../components/Tip';
import Link from '../components/Link';
import { useTheme } from '@mui/material';
import Image from 'next/image';
import HowTo from '../components/HowTo';
import Section from '../components/Section';


export default function Index() {

  // affichage du "HowTo" ou du "PimpYourOwn"
  const [currentStep, setCurrentStep] = React.useState(0);

  // vers le "PimpYourOwn"
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  }
  // retour au "HowTo"
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  }

  return (
    <>
      {currentStep === 0 && <HowTo nextStep={nextStep} />}
      {
        currentStep === 1 && (
          <Section key="step1">
            <Typography variant="h4" component="h1" gutterBottom>
              Play ({currentStep})
            </Typography>
            <Button variant="contained" onClick={prevStep}>
              Go to previous step
            </Button>
            <Tip />
          </Section >
        )}
    </>
  );
}
