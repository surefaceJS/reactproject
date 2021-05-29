
import React, {Component} from 'react';
import axios from "axios";

class Server extends Component {

    constructor(props) {
        super(props);


        this.state = {
            covid: []
        }

    }

    componentDidMount() {

        console.log("covid")

        axios.get("https://api.covid19api.com/summary")
            .then((res)=>{

                console.log(res)
                this.setState({
                    covid: res.data
                })
            })

    }

    render() {


        return (
            <div className="container">

                <div className="row">

                    {this.state.covid.map(( item,index) => {

                        return(
                            <div className="col-10 m-auto">
                                <div className="table table-hover table-striped">
                                    <thead>
                                    <tr className="text-white">
                                        <th>№</th>
                                        <th>Country</th>
                                        <th>Confirmed</th>
                                        <th>Deaths</th>
                                        <th>Recovered</th>
                                        <th>Date</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>cvder</td>
                                    </tr>
                                    </tbody>
                                </div>
                            </div>
                        )

                    })}
                </div>
            </div>
        );
    }
}

export default Server;