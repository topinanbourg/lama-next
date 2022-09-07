import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Section = ({ children, ...rest }) => {
    // les infos sur le thème
    const CurrentTheme = useTheme();
    const classes = useStyles();

    return (
        <Box className={classes.sectionContainer} {...rest}>
            {children}
        </Box >
    );
}
const useStyles = makeStyles((theme) => ({
    sectionContainer: {
        my: 0,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        height: `calc(100vh - ${theme.headerHeight}px)`,
    },
}));

export default Section;