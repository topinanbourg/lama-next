import { Box } from "@mui/material";
import { useState } from "react";
import defaultValues from '../scripts/const';

const Part = ({ itemToDisplay, emptyImg }) => {

    const [index, setIndex] = useState(0);
    const [image, setImage] = useState(emptyImg);
    const nbMaxImages = itemToDisplay.nb;

    const handleClick = () => {
        if (index < nbMaxImages) {
            setIndex(index + 1);
            setImage(`/parts/${itemToDisplay.id}/${index + 1}.png`);
        } else {
            setIndex(0);
            setImage(emptyImg);
        }
    }

    return (
        <Box
            id={itemToDisplay.id}
            title={itemToDisplay.title}
            component="img"
            src={image}
            onClick={handleClick}
            sx={{
                position: "absolute",
                cursor: "pointer",
                ...itemToDisplay.positions,
            }}
        />
    );
}

export default Part;