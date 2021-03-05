// import { Auth } from 'aws-amplify';
import { withStyles } from '@material-ui/core';
import compose from 'recompose/compose';
import { bindActionCreators } from 'redux';
import { getOrganization } from '../reducers/organizationSlice';
import logoStyles from './styles/Logo.styles';



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
    withStyles(logoStyles),
    // connect(mapStateToProps, mapDispatchToProps)
)(Sidebar);