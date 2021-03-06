import { Icon } from '@iconify/react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import compose from 'recompose/compose';
import { bindActionCreators } from 'redux';

import MenuEntries from '../menu';
import { getUser } from '../reducers/authSlice';
import menuStyles from '../styles/Menu.styles';

const Menu = ({ classes, user }) => {

    const { pathname } = useLocation();
    // TODO: make all menu item clickable
    return (
        MenuEntries.filter(namespace => (!namespace.roles || user?.role === 'root' ||
            namespace.roles.findIndex(role => role === user?.role) !== -1))
            .map(entry => {
                return (
                    <div key={entry.namespace} className={classes.namespaceContainer}>
                        <span className={classes.namespace}>{entry.namespace.toUpperCase()}</span>
                        <ul>
                            {
                                entry.items.filter(item => (!item.roles || user?.role === 'root' ||
                                    item.roles.findIndex(role => role === user?.role) !== -1))
                                    .map((item) => {
                                        return (
                                            <li key={item.name} className={classes.menuItem + ' ' + (pathname === item.path ? classes.menuItemActive : '')}>

                                                <Icon icon={item.icon} />
                                                <Link to={item.path} className={classes.menuLink}>{item.name}</Link>
                                            </li>
                                        )
                                    })

                            }
                        </ul>
                    </div>
                );
            })
    );
}

const mapStateToProps = (state) => ({
    user: getUser(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default compose(
    withStyles(
        menuStyles,
    ),
    connect(mapStateToProps, mapDispatchToProps)
)(Menu);