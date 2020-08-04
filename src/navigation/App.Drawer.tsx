import * as React from 'react';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import BusinessIcon from '@material-ui/icons/Business';

import { Drawer, IconButton, Divider, Theme, ListItem, ListItemIcon, ListItemText, withStyles } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { User } from '../state/User';
import { Utility } from '../state/Utility';
import { NavLink } from 'react-router-dom';
import { styles } from './styles';
const classNames = require('classnames');

interface IAppDrawer {
    authentication?: User;
    utility: Utility;
    classes?: any;
    theme?: Theme;
    handleDrawerClose?: () => void;
}

class AppDrawer extends React.Component<IAppDrawer, {}> {
    public routes = [
        { path: '/', title: 'Dashboard', icon: () => <DashboardIcon /> },
        { path: '/userview', title: 'User View', icon: () => <PersonIcon /> },
        { path: '/hrview', title: 'HR View', icon: () => <BusinessIcon /> },
        { path: '/reports', title: 'Reports', icon: () => <InsertDriveFileIcon /> },
        { path: '/add-requirement', title: 'Add Requirement', icon: () => <DashboardIcon /> }
    ]

    public render(): JSX.Element {
        const { authentication, classes, utility, theme } = this.props;
        return (
            <Drawer
                hidden={!authentication}
                variant="permanent"
                classes={{
                    paper: classNames(classes.drawerPaper, !utility.drawerOpen && classes.drawerPaperClose),
                }}
                open={utility.drawerOpen}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={this.props.handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                {this.routes.map((route, index) => {
                    return (
                        <NavLink key={index} exact={true} activeClassName={classes.current} className={classes.link} to={route.path} >
                            <ListItem button={true}>
                                <ListItemIcon>
                                    {route.icon()}
                                </ListItemIcon>
                                <ListItemText primary={route.title} />
                            </ListItem>
                        </NavLink>
                    );
                })}
                <Divider />
                <div >
                    <img className="app-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuPusoaaYOnlpw3i-KfaBiqwCJZ_rHIULQpA&usqp=CAU" alt="logo" />
                </div>
            </Drawer>
        );
    }
}

export default withStyles(styles as any, { withTheme: true })(AppDrawer as any) as any;