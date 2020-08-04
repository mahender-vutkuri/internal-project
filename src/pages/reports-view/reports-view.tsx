import * as React from 'react';
import { Route, Switch } from 'react-router';
import { isAuthenticated } from '../../state/AppState';
// import { ReportPage } from './report'
import { Typography } from '@material-ui/core';

// export class ReportViewPage extends React.Component<{}, {}> {
//     public render(): JSX.Element {
//         return (
//             <Typography noWrap={false}>
//                  all the content goes here for reports
//             </Typography>
//         );
//     }
// }


export function ReportViewPage() {
    const [user,setUsr] = React.useState('dwqdwqdw')
    return (
        <Typography noWrap={false}>
        {user}
            all the content goes here for reports
        </Typography>
    );
}