import * as React from 'react';
import { Typography } from '@material-ui/core';

export class UserPage extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (<Typography noWrap={false}>{"User Page"}</Typography>)
    }
}