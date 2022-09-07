import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tip from '../components/Tip';
import Link from '../components/Link';
import { useTheme } from '@mui/material';
import Image from 'next/image';
import HowTo from '../components/HowTo';
import Section from '../components/Section';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import PimpYourHown from "../components/PimpYourOwn";


export default function Index() {

  // affichage du "HowTo" ou du "PimpYourOwn"
  const [currentStep, setCurrentStep] = useState(0);
  // affichage du "HowTo" ou non
  const [displayHowTo, setDisplayHowTo] = useState(true);

  return displayHowTo
    ? <HowTo handleClose={() => setDisplayHowTo(false)} />
    : <PimpYourHown displayHowTo={() => setDisplayHowTo(true)} />
    ;
}
