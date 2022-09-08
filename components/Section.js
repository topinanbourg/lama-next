import { Box } from "@mui/material";

const Section = ({ children, ...rest }) => {

    return (
        <Box sx={sxStyles.sectionContainer} {...rest}>
            {children}
        </Box >
    );
}
const sxStyles = {
    sectionContainer: (theme) => ({
        my: 0,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        height: `calc(100vh - ${theme.headerHeight}px)`,
    }),
};

export default Section;