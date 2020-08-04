import * as React from 'react';
import { Route, Switch } from 'react-router';
import { isAuthenticated } from '../../state/AppState';
import { HrPage } from './hr'

export class HrViewPage extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (<Switch>
            <Route path="/hrview" exact={true} component={isAuthenticated(HrPage)} />
        </Switch>);
    }
}