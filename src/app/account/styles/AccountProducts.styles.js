const accountProductsStyles = (theme) => ({
    productInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    body: {
        padding: '20px',
    },
    footer: {
        padding: '20px',
    },
    info: {
        display: 'flex',
        padding: '10px',
        '& > span': {
            paddingRight: '10px',
            fontWeight: 'bold',
        }
    },

    customBadge: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        '& >  span': {
            borderRadius: '6px',
            marginRight: '10px',
            height: '5px',
        }
    },

    badgeWidth: {
        width: '100px'
    },

    firstBadge: {
            color: 'seagreen',
            '& > span': {
                border: '4px solid seagreen',
            },
        },
    secondBadge: {
            color: 'dodgerblue',
            '& > span': {
                border: '4px solid dodgerblue',
            },
        },

    infoFont: {
        color: 'cornflowerblue',
    },

});

export default accountProductsStyles;