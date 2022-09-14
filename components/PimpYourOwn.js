
import { Box, Card, CardMedia } from '@mui/material';
import { GoLightBulb } from 'react-icons/go';

import Section from './Section';
import Part from './Part';
import bgStyles from '../styles/bgContainer';
import defaultValues from '../scripts/const';
import getNextImage from '../scripts/utils';

const PimpYourHown = ({ displayHowTo, parts }) => {

    return (
        <Section>
            <Card sx={sxStyles.bgContainer}>
                <Box sx={sxStyles.partContainer}>
                    <CardMedia sx={sxStyles.bgImage}
                        component="img"
                        image={getNextImage("background.jpg")}
                        alt="background"
                    />
                    {parts.map((part, index) => (
                        <Part key={part.id} itemToDisplay={part} emptyImg={defaultValues.transparentPixel} />
                    ))}
                </Box>
            </Card>
            <Box
                component={GoLightBulb}
                sx={sxStyles.howToBtn}
                onClick={displayHowTo}
                title={defaultValues.howToBtn} >
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
    howToBtn: (theme) => ({
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