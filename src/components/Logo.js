// import { Auth } from 'aws-amplify';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { bindActionCreators } from 'redux';

import { getOrganization } from '../reducers/organizationSlice';
import sidebarStyles from '../styles/Sidebar.styles';

const Sidebar = ({ classes, organization, onClick }) => {

    return (
        <div className={classes.logo}>
            <div className={classes.container}>
                <img src={organization.logo} alt="logo" onClick={onClick} style={onClick && {cursor: 'pointer'}} />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    organization: getOrganization(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default compose(
    withStyles(sidebarStyles),
    connect(mapStateToProps, mapDispatchToProps)
)(Sidebar);