
import Image from 'next/image';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Section from './Section';
import Tip from './Tip';
import { makeStyles } from "@mui/styles";

import defaultValues from '../scripts/const';
import theme from '../styles/theme';

const HowTo = ({ nextStep }) => {
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
                        onClick={nextStep}>
                        {defaultValues.howToBtnToGo}
                    </Button>
                </CardActions>
            </Card>

        </Section>
    );
}

const useStyles = makeStyles((theme) => ({
    placeholderContainer: {
        maxWidth: "50%",
        margin: "auto",
        borderRadius: theme.spacing(2),
    },
    placeholderImage: {
        maxHeight: "50vw",
        objectFit: "fitted",
    },
    howToContainer: {
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
    }
}));

export default HowTo;