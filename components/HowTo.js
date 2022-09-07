
import Image from 'next/image';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Section from './Section';
import Tip from './Tip';
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";

import defaultValues from '../scripts/const';

const HowTo = ({ handleClose }) => {
    // les infos sur le thème
    const CurrentTheme = useTheme();
    // la taille max du container en fonction de la taille de l'écran
    let maxWidth = CurrentTheme.breakpoints.current.value || 1234;

    // moins la hauteur du H1 et du footer
    let margins = CurrentTheme.headerHeight + CurrentTheme.footerHeight;
    // moins les marges de padding de container (qui est en "px")
    margins += 2 * CurrentTheme.spacing(3).slice(0, -2);

    const classes = useStyles();

    return (
        <Section key="step0">
            <Card className={classes.placeholderContainer}>
                <CardMedia className={classes.placeholderImage}
                    component="img"
                    image="/placeholders.jpg"
                    alt="placeholders"
                />
            </Card>
            <Card className={classes.howToContainer}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {defaultValues.titleHowTo}
                    </Typography>
                    <Typography variant="body2" className={classes.howToText}>
                        {defaultValues.howToText}
                    </Typography>
                    <Tip />
                </CardContent>
                <Divider variant="middle" />
                <CardActions className={classes.btnContainer}>
                    <Button
                        variant="contained" size="small"
                        onClick={handleClose}>
                        {defaultValues.howToBtnToGo}
                    </Button>
                </CardActions>
            </Card>
            <motion.div
                className={classes.blurContainer}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                intial="hidden"
                animate="visible"
                exit="hidden"
                onClick={handleClose}
            >
            </motion.div>
        </Section>
    );
}

const useStyles = makeStyles((theme) => ({
    placeholderContainer: {
        maxWidth: "50%",
        margin: "auto",
        borderRadius: theme.spacing(2),
        boxShadow: theme.shadows[10],
    },
    placeholderImage: {
        maxHeight: "50vw",
        objectFit: "fitted",
    },
    howToContainer: {
        zIndex: "10000",
        boxShadow: theme.shadows[10],
        margin: "auto",
        maxHeight: "40%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    howToText: {
        color: theme.palette.text.primary,
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
    }
}));

export default HowTo;