import * as React from 'react';
import Typography from '@mui/material/Typography';
import { GoLightBulb } from "react-icons/go";
import { Box, useTheme } from '@mui/material';
import { makeStyles } from "@mui/styles";

const Tip = () => {

    const theme = useTheme();
    const classes = useStyles();

    return (
        <Box className={classes.tipContainer} >
            <Box className={classes.tipIconContainer}>
                <GoLightBulb size={theme.typography.pxToRem(20)} />
            </Box>
            <Box className={classes.tipTextContainer}>
                Dans le doute: Click ! <br />
                (il n'y a rien de dangereux par ici)
            </Box>
        </Box>
    );
}
const useStyles = makeStyles((theme) => ({
    tipContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(3),
        color: theme.palette.text.secondary,
    },
    tipIconContainer: {
        verticalAlign: 'middle'
    },
    tipTextContainer: {
        display: 'inline',
        textAlign: 'center'
    },
}));

export default Tip;