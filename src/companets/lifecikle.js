import React, {Component} from 'react';
import axios from "axios";

class lifecikle extends Component {

    //companent yaratilayotganda ishlaydi

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            photos: []
        }

        console.log("constructor")
    }



    //render dan keyon shu funksiya iwlidi
    componentDidMount()     {
        console.log("tcomponentDidmount")

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {

                console.log(res);
                this.setState({
                    posts: res.data
                })
            })

        axios.get("https://jsonplaceholder.typicode.com/photos?_limit=100")
            .then((res) => {
                this.setState({
                    photos: res.data
                })
            })
    }
    //
    //
    // ///   hozirchali iwlatilmidi
    //
    // // companent  ochiwidan oldin iwlidi ochib ketayotganda iwlidi,hotrani tozalaw iwlari qlinadi
    // componentWillUnmount() {
    //     console.log("sdfssfsdfs  ?????")
    // }
    //
    //
    // // companentda ozgarish bogandan keyin iwlidi
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("copmanentdidupdate")
    // }
    //
    // // companentda xatolik bogandan keyin iwlidi....!
    // componentDidCatch(error, errorInfo) {
    //     console.log("chatck")
    // }
    //
    // ///   hozirchali iwlatilmidi

    render() {

        console.log("it is render")
        return (
            <div className="container">

                <div className="row">
                    {this.state.posts.map((item,index) => {
                        return (
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{item.title}</h5>
                                    </div>
                                    <div className="card-body">
                                        <img src={this.state.photos[index]?.url} className="w-100" alt="error"/>;
                                        {item.body}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        );
    }
}

export default lifecikle;