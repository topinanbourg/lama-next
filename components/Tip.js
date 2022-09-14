import * as React from 'react';
import { GoLightBulb } from "react-icons/go";
import { Box } from '@mui/material';

const Tip = ({ texte }) => {

    if (Array.isArray(texte)) {
        texte = texte.join("\n");
    }

    return (
        <Box sx={sxStyles.tipContainer} >
            <Box sx={sxStyles.tipIconContainer}>
                <GoLightBulb />
            </Box>
            <Box sx={sxStyles.tipTextContainer}>
                {texte}
            </Box>
        </Box>
    );
}

const sxStyles = {
    tipContainer: (theme) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 6,
        marginBottom: 3,
        color: "text.secondary",
        [theme.breakpoints.down('md')]: {
            marginTop: 3,
            marginBottom: 1,
        }
    }),
    tipIconContainer: (theme) => ({
        verticalAlign: 'middle',
        px: 2,
        [theme.breakpoints.down('md')]: {
            display: 'none',
        }
    }),
    tipTextContainer: {
        display: 'inline',
        textAlign: 'left',
        whiteSpace: "pre-line"
    },
};

export default Tip;