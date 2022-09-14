export default {
    bgContainer: {
        maxWidth: "100%",
        maxHeight: "100%",
        margin: "auto",
        borderRadius: 2,
        boxShadow: 10,
    },
    bgImage: {
        maxWidth: "80vw",
        maxHeight: "80vh",
        objectFit: "fitted",
    },
    popInContainer: {
        zIndex: "10000",
        boxShadow: 10,
        margin: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
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