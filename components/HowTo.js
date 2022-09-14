
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Section from './Section';
import Tip from './Tip';
import { motion } from "framer-motion";

import defaultValues from '../scripts/const';
import getNextImage from '../scripts/utils';
import bgStyles from '../styles/bgContainer';

const HowTo = ({ handleClose }) => {

    return (
        <Section>
            <Card sx={sxStyles.bgContainer}>
                <CardMedia sx={sxStyles.bgImage}
                    component="img"
                    image={getNextImage("placeholders.jpg")}
                    alt="placeholders"
                />
            </Card>
            <Card sx={sxStyles.popInContainer}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {defaultValues.howToTitle}
                    </Typography>
                    <Typography variant="body2" sx={sxStyles.howToText}>
                        {defaultValues.howToText}
                    </Typography>
                    <Tip texte={defaultValues.howToTip} />
                </CardContent>
                <Divider variant="middle" />
                <CardActions sx={sxStyles.btnContainer}>
                    <Button
                        variant="contained" size="small"
                        onClick={handleClose}>
                        {defaultValues.howToBtnToGo}
                    </Button>
                </CardActions>
            </Card>
            <Box
                component={motion.div}
                sx={sxStyles.blurContainer}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                intial="hidden"
                animate="visible"
                exit="hidden"
                onClick={handleClose}
            >
            </Box>
        </Section>
    );
}

const sxStyles = {
    ...bgStyles,
    howToContainer: {
        zIndex: "10000",
        boxShadow: 10,
        margin: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    howToText: {
        color: 'text.primary',
        mb: 2
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    blurContainer: {
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.22)",
        backdropFilter: "blur(2px)",
        opacity: 0,
        zIndex: "9999",
    }
};

export default HowTo;