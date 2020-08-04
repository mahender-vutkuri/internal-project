import * as React from "react";
import { Typography } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MaterialTable, { Column } from "material-table";
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

interface IRow {
    skillName: string;
    experience: string;
    hrRating: string;
    tpRating: string;
}

interface ITableState {
    columns: Array<Column<IRow>>;
    data: IRow[];
}

function RequirementsInfoTable() {
    const [state, setState] = React.useState<ITableState>({
        columns: [
            { title: "Technology", field: "skillName" },
            { title: "Experience", field: "experience" },
            { title: "BenchMark", field: "hrRating" },
            { title: "Skill Type", field: "tpRating" }
        ],
        data: []
    });

    const postRequirment = () => {
        console.log(state.data);
    };
    return (
        <div className="requirements-table" id="req-tbl">
            <MaterialTable
                options={{
                    search: false,
                    paging: false,
                    actionsColumnIndex: -1
                }}
                actions={[
                    {
                        icon: 'add',
                        tooltip: 'Add Skill',
                        isFreeAction: true,
                        onClick: (event) => {
                            setState((prevState) => {
                                const obj = {
                                    skillName: "",
                                    experience: "",
                                    hrRating: "",
                                    tpRating: "",
                                }
                                const data = [...prevState.data];
                                data.push(obj);
                                return { ...prevState, data };
                            });
                            setTimeout(() => {
                                const addedRow: any = document.getElementById("req-tbl").getElementsByClassName("material-icons MuiIcon-root");
                                addedRow[addedRow.length - 2].click()
                            }, 100)
                        }
                    }
                ]}
                title="Techonologies Required"
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                console.log(newData);
                                console.log(oldData);

                                if (oldData) {
                                    setState(prevState => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        })
                }}
            />
            <div className="req-actions">
                <Button
                    className="post-req "
                    variant="contained"
                    color="primary"
                    onClick={postRequirment}
                >
                    Save
                </Button>
                <Button className="post-req " variant="contained">
                    Cancel
                </Button>
            </div>
        </div>
    );
}

function NewRequirement() {
    const [subject, setSubject] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [hrName, setHrName] = React.useState("");

    return (
        <div className="new-requirement-wrapper">
            <Typography noWrap={false} className="heading">
                Add Requirement
            </Typography>

            <div className="subject">
                <TextField fullWidth={true} label="Subject" variant="outlined" value={subject}
                    onChange={e => setSubject(e.target.value)} />

            </div>
            <div className="description">

                <TextField fullWidth={true} multiline={true} rowsMax={5} label="Description" variant="outlined" value={description}
                    onChange={e => setDescription(e.target.value)} />
            </div>
            <div className="hr-info">
                <TextField fullWidth={true} label=" HR Name " variant="outlined" value={hrName}
                    onChange={e => setHrName(e.target.value)} />

            </div>
            <div className="requirements-table-wrapper">
                <RequirementsInfoTable />
            </div>
        </div>
    );
}

export { NewRequirement };