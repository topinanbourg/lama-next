
import { Box, Card, CardMedia } from '@mui/material';
import { GoLightBulb } from 'react-icons/go';

import Section from './Section';
import bgStyles from '../styles/bgContainer';
import defaultValues from '../scripts/const';
import Part from './Part';

import { useContext } from 'react';
import MaxWidthContext from '../scripts/maxWidthContext';

const PimpYourHown = ({ displayHowTo, parts }) => {

    const fileImage = "background.jpg";
    const maxWidth = useContext(MaxWidthContext);
    const imgUrl = '/_next/image?url=%2F' + fileImage + '&w=' + defaultValues.bgSizes[maxWidth.key] + '&q=75';

    return (
        <Section>
            <Card sx={sxStyles.bgContainer}>
                <Box sx={sxStyles.partContainer}>
                    <CardMedia sx={sxStyles.bgImage}
                        component="img"
                        image={imgUrl}
                        alt="placeholders"
                    />
                    {parts.map((part, index) => (
                        <Part key={part.id} itemToDisplay={part} emptyImg={defaultValues.transparentPixel} />
                    ))}
                </Box>
            </Card>
            <Box
                component={GoLightBulb}
                sx={sxStyles.btnHowTo}
                onClick={displayHowTo}
                title={defaultValues.displayHowToBtn} >
            </Box>
        </Section >
    );
}

const sxStyles = {
    partContainer: {
        position: "relative",
    },
    lamaContainer: {
        position: "relative",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        marginTop: "-100%",
        bgcolor: "#FFAA00",
    },
    ...bgStyles,
    btnHowTo: (theme) => ({
        position: "fixed",
        left: theme.spacing(2),
        bottom: theme.spacing(2),
        opacity: 0.5,
        cursor: "pointer",
        "&:hover": {
            opacity: 1,
        }
    }),
};

export default PimpYourHown;