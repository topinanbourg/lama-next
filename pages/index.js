import React, { useState } from "react";
import HowTo from '../components/HowTo';
import PimpYourHown from "../components/PimpYourOwn";

export default function Index() {
  // affichage du "HowTo" ou seulement du "PimpYourOwn"
  const [displayHowTo, setDisplayHowTo] = useState(true);

  return displayHowTo
    ? <HowTo handleClose={() => setDisplayHowTo(false)} />
    : <PimpYourHown displayHowTo={() => setDisplayHowTo(true)} />
    ;
}
