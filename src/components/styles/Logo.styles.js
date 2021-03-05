const logoStyles = (theme) => ({
    logo: {
        height: '65px',
        backgroundColor: '#ff0000',
        display: 'flex',
    },
    container: {
        paddingLeft: '15px',
        alignItems: 'center',
        display: 'flex',
        width: '54%',
        '& img': {
            width: '107px',
            height: '33px',
        },
    },
});

export default logoStyles;