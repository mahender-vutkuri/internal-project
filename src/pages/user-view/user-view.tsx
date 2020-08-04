import * as React from 'react';
import { Route, Switch } from 'react-router';
import { isAuthenticated } from '../../state/AppState';
import { UserPage } from './user'

export class UserViewPage extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (<Switch>
            <Route path="/userview" exact={true} component={isAuthenticated(UserPage)} />
        </Switch>);
    }
}