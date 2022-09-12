import React, { useState } from "react";
import HowTo from '../components/HowTo';
import PimpYourHown from "../components/PimpYourOwn";

import defaultValues from '../scripts/const';
import fs from 'fs';
import path from 'path';

const nbFilesInFolder = (folder) => {
  const files = fs.readdirSync(path.join(process.cwd(), "public", "parts", folder));
  return files.length;
}
export const getServerSideProps = async (context) => {
  const parts = defaultValues.parts.reverse().map((part, index) => {
    return {
      ...part,
      nb: nbFilesInFolder(part.id),
    };
  });
  return {
    props: { parts: parts },
  };
}

export default function Index({ parts }) {
  // affichage du "HowTo" ou seulement du "PimpYourOwn"
  const [displayHowTo, setDisplayHowTo] = useState(true);

  return displayHowTo
    ? <HowTo handleClose={() => setDisplayHowTo(false)} />
    : <PimpYourHown displayHowTo={() => setDisplayHowTo(true)} parts={parts} />
    ;
}
