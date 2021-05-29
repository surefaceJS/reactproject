
import React, {Component} from 'react';

class NavigationBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cardwosh: false,
            boardTitile: '',
            boards: [],
            taskTitles: [],
            selectedIndex: -1
        }
    }

    render() {

        const changeCardShow = () => {

            this.setState( {
                cardwosh: !this.state.cardwosh
            })
        }

        const changeBoardTitle = (event) => {
            this.setState( {
                boardTitile: event.target.value
            })

        }


        const addboard = () => {
            let newBoard = {
                title: this.state.boardTitile,
                tasks: []
            }
            this.state.boards.push(newBoard)

            this.setState({
                boards: this.state.boards,
                boardTitile: '',
                selectedIndex: -1

            })
        }


        const changeTaskTitle = (event, index) => {
            this.state.taskTitles[index] = event.target.value;


            this.setState({
                taskTitles: this.state.taskTitles

            })
        }


        const addTask = (index) => {
            this.state.boards[index].tasks.push(this.state.taskTitles[index]);

            this.setState({
                boards: this.state.boards,
                boardTitile: ''
            })
        }

        const delateCard = (index) => {
            this.state.boards.splice(index, 1)


            this.setState({
                boards: this.state.boards,
                taskTitles: this.state.taskTitles
            })
        }

        const deleteInTasksTitles = (index1, index2) => {

            this.state.boards[index1].tasks.splice(index2, 1)
            this.setState({
                boards: this.state.boards
            })
        }

        const changeAgain = (index) =>{
            this.setState({
                selectedIndex: index,

            })
        }


        return (
            <div className="container">
                <div className="row mb-3">
                    <div className="col-3">
                        <button type="button" className="btn btn-success mt-3 btn-block" onClick={changeCardShow}>Add Board</button>

                        {this.state.cardwosh ?


                            <div className="card mt-3 bg-dark border ">

                                <div className="card-body">
                                    <textarea value={this.state.boardTitile} className="form-control" placeholder="Type Here"  onChange={changeBoardTitle}></textarea>

                                    <button type="button" className="btn btn-success btn-block mt-3 ml-auto" onClick={addboard}>Add Board</button>
                                </div>

                            </div>: ''


                        }





                    </div>

                    <div className="col-9">
                        <div className="row">
                            {this.state.boards.map((item,index) => {
                                return (
                                    <div className="col-4 mt-3">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>{item.title}</h5>
                                                <div onClick={()=> delateCard(index)} className="task-close">&times;</div>
                                            </div>
                                            <div className="card-body">

                                                {item.tasks.map((item, index1) => {

                                                    return (
                                                        <div className="task">
                                                            <span>{item}</span>
                                                            <div onClick={ () => deleteInTasksTitles(index, index1)} className="task-close">&times;</div>
                                                        </div>
                                                    )

                                                })}

                                            </div>
                                            <div className="card-footer">
                                                <textarea  className="form-control" placeholder="Typle here" onChange={ (event) => changeTaskTitle(event,index)}></textarea>

                                                <button type="button" className="btn btn-success btn-block mt-3 ml-auto" onClick={() =>  addTask(index)}>Add</button>
                                                <button type="button" className="btn btn-success btn-block mt-3 ml-auto" onClick={() =>  changeAgain(index)}>Change</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationBar;