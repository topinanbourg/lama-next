
import { Box, Card, CardMedia } from '@mui/material';
import { GoLightBulb } from 'react-icons/go';

import Section from './Section';
import defaultValues from '../scripts/const';
import bgStyles from '../styles/bgContainer';

const PimpYourHown = ({ displayHowTo }) => {

    return (
        <Section>
            <Card sx={sxStyles.bgContainer}>
                <CardMedia sx={sxStyles.bgImage}
                    component="img"
                    image="/background.jpg"
                    alt="placeholders"
                />
            </Card>
            <Box
                component={GoLightBulb}
                sx={sxStyles.btnHowTo}
                onClick={displayHowTo}
                title={defaultValues.displayHowToBtn} />
        </Section>
    );
}

const sxStyles = {
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