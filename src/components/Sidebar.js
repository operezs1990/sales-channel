// import { Auth } from 'aws-amplify';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { bindActionCreators } from 'redux';

import { getUser, logoutAction } from '../reducers/authSlice';
import { getOrganization } from '../reducers/organizationSlice';
import sidebarStyles from '../styles/Sidebar.styles';
import Logo from './Logo';
import Menu from './Menu';
import UserInfo from './UserInfo';

const Sidebar = ({ classes, organization }) => {

    return (
        <div className={classes.main}>
            <Logo />
            <div className={classes.menu}>
                <Menu />
            </div>
            <UserInfo />
        </div>
    );
}

const mapStateToProps = (state) => ({
    organization: getOrganization(state),
    user: getUser(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
    logout: logoutAction,
}, dispatch)

export default compose(
    withStyles(sidebarStyles),
    connect(mapStateToProps, mapDispatchToProps)
)(Sidebar);