
import Image from 'next/image';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Section from './Section';
import Tip from './Tip';
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";

import defaultValues from '../scripts/const';
import { GoLightBulb } from 'react-icons/go';

const PimpYourHown = ({ displayHowTo }) => {
    // les infos sur le thème
    const CurrentTheme = useTheme();
    // la taille max du container en fonction de la taille de l'écran
    let maxWidth = CurrentTheme.breakpoints.current.value || 1234;

    // moins la hauteur du H1 et du footer
    let margins = CurrentTheme.headerHeight + CurrentTheme.footerHeight;
    // moins les marges de padding de container (qui est en "px")
    margins += 2 * CurrentTheme.spacing(3).slice(0, -2);

    const classes = useStyles();
    const theme = useTheme();

    return (
        <Section>
            <Card className={classes.placeholderContainer}>
                <CardMedia className={classes.backgroundImage}
                    component="img"
                    image="/background.jpg"
                    alt="placeholders"
                />
            </Card>
            <GoLightBulb size={theme.typography.pxToRem(20)}
                className={classes.btnHowTo}
                onClick={displayHowTo}
                title={defaultValues.displayHowToBtn} />
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
    backgroundImage: {
        maxHeight: "50vw",
        objectFit: "fitted",
    },
    btnHowTo: {
        position: "fixed",
        left: theme.spacing(2),
        bottom: theme.spacing(2),
        color: theme.palette.primary.contrastText,
        opacity: 0.5,
        cursor: "pointer",
        "&:hover": {
            opacity: 1,
        }
    },
}));

export default PimpYourHown;