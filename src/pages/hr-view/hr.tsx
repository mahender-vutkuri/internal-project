import * as React from 'react';
import { Typography } from '@material-ui/core';

export class HrPage extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (<Typography noWrap={false}>{"HR view Page"}</Typography>)
    }
}