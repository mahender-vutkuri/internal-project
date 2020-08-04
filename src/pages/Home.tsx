// import * as React from 'react';
// import { Typography } from '@material-ui/core';

// class HomePage extends React.Component {
//     public render(): JSX.Element {
//         return (
//             <Typography noWrap={false}>
//                 load Dashboard  Page content here
//             </Typography>
//         )
//     }
// }


// export default HomePage;


import * as React from 'react';
import { Typography } from '@material-ui/core';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
interface IProps{
  offset ?: number;
            tableData ?:any[];
            orgtableData ?: string[];
            email ?:string;
            currentPage ?: number;
           pageCount?: number;
}
 class HomePage extends React.Component<{},IProps> {
     constructor(props:IProps) {
        super(props)
    
        this.state = {
            offset: 0,
            tableData: [],
            orgtableData: [],
           email:'',
            currentPage: 0,
            pageCount:0,
        }

        this.handlePageClick = this.handlePageClick.bind(this);

    }

    handlePageClick = (e:any) => {
        const selectedPage = e.selected;
        const offset = selectedPage * 10;

        this.setState({
            currentPage: selectedPage,
            offset: selectedPage * 10
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
		const data = this.state.orgtableData;
		
		const slice = data.slice(this.state.offset, this.state.offset +10)
		this.setState({
			pageCount: Math.ceil(data.length / 10),
			tableData:slice
		})
	
    }

   componentDidMount(){
        this.getData();
    }
    getData() {
        axios
            .get('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                const tdata = res.data;
                console.log('data-->'+JSON.stringify(tdata))
				 const slice = tdata.slice(this.state.offset, this.state.offset + 10)
                this.setState({
                    pageCount: Math.ceil(tdata.length / 10),
                    orgtableData : tdata,
                    tableData:slice
                })
            });
    }


    render() {
        return (
            <div>

                 <table >
                     <thead>
                      
                         <th>Name</th>
                        

                     </thead>
                     <tbody>
                        {
                          this.state.tableData.map((tdata, i) => (
                                <tr>
                                    <td>{tdata.email}</td>
                                    
                                </tr>
                            
                          ))
                        }

                     </tbody>
                 </table>   

                 <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    // subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
        )
    }
}
export default HomePage;