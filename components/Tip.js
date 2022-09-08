import * as React from 'react';
import { GoLightBulb } from "react-icons/go";
import { Box } from '@mui/material';

const Tip = () => {

    return (
        <Box sx={sxStyles.tipContainer} >
            <Box sx={sxStyles.tipIconContainer}>
                <GoLightBulb />
            </Box>
            <Box sx={sxStyles.tipTextContainer}>
                Dans le doute: Click ! <br />
                (il n'y a rien de dangereux par ici)
            </Box>
        </Box>
    );
}

const sxStyles = {
    tipContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 6,
        marginBottom: 3,
        color: "text.secondary",
    },
    tipIconContainer: {
        verticalAlign: 'middle',
        px: 2
    },
    tipTextContainer: {
        display: 'inline',
        textAlign: 'left',
    },
};

export default Tip;