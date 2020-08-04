import * as React from 'react';
import { Route, Switch } from 'react-router';
import { isAuthenticated } from '../../state/AppState';
import { NewRequirement } from './new-requirement'

export class AddRequirementPage extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (<Switch>
            <Route path="/add-requirement" exact={true} component={isAuthenticated(NewRequirement)} />
        </Switch>);
    }
}