import React, {Component} from 'react';

import {AvForm, AvField} from "availity-reactstrap-validation";

import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

import axios from "axios";

import  {PacmanLoader} from "react-spinners";

import  {ToastContainer, toast} from "react-toastify";


class Employee extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            employees: [],
            deleteModal: false,
            selectedId: "",
            selectedItem: {},
            isLoading: true,
            saveLoading: false
        }
    }



    componentDidMount() {
        axios.get("https://nimadir.herokuapp.com/api/employee")
            .then((res) => {
                this.setState({
                    employees: res.data.object,
                    isLoading: false
                })
            })

    }

    render() {

        const changeModal = () => {
            this.setState({
                modal: !this.state.modal
            })
        }



        const changeDeleteModal = () => {
            this.setState({
                deleteModal: !this.state.deleteModal
            })
        }



        const saveEmployee = (event, errors, values) => {
            // button  kop posilmasligi uchun
            this.setState({
                saveLoading: true
            })

            if (this.state.selectedItem.id){
                axios.put("https://nimadir.herokuapp.com/api/employee/" + this.state.selectedItem.id, values)
                    .then((res) => {
                        getEmployee();
                        changeModal();
                        this.setState({
                            selectedItem: {}
                        })
                    })
            } else {
                axios.post("https://nimadir.herokuapp.com/api/employee", values)
                    .then((res) => {
                        getEmployee();
                        changeModal();
                    })

                    .catch((error) => {
                        toast.error("Xatolik")
                    })
                    .finally(() =>{
                        this.setState({
                            saveLoading: false
                        })
                    })
            }
            console.log(values);
        }



        const deleteEmployee = (id) =>{
            this.setState({
                selectedId: id,
            })
            changeDeleteModal();
        }

        const deleteEmployeeOriginal = () => {
            axios.delete("https://nimadir.herokuapp.com/api/employee/" + this.state.selectedId)
                .then((res) => {
                    getEmployee();
                    changeDeleteModal();
                    toast.success(res.data.message)
                })
        }
        const getEmployee =() => {
            axios.get("https://nimadir.herokuapp.com/api/employee")
                .then((res2) => {
                    this.setState({
                        employees: res2.data.object
                    })
                })
        }

        const editEmployee = (item) => {
            this.setState({
                selectedItem: item
            })

            changeModal();
        }


        // const deleteEmployee = () => {
        //     for (let i = 0; i < 2000; i++) {
        //          axios.delete("https://nimadir.herokuapp.com/api/employee/" + this.state.employees[i].id)
        //     axios.delete("https://nimadir.herokuapp.com/api/employee/" + this.state.selectedId)
        //         .then((res) => {
        //             // getEmployees();
        //             changeDeleteModal();
        //         })
        //     }
        // }



        return (
            <div className="container">

                {this.state.isLoading ?
                    <div className="loader">
                        <PacmanLoader loading={this.state.isLoading} color={"yellow"}/>
                    </div>:""
                }


                <div className="row mt-3">
                    <div className="col-12">
                        <button type="button" className="btn btn-success d-block ml-auto" onClick={changeModal}>Add
                        </button>
                    </div>

                    {this.state.employees.map((item,index) => {
                        return (
                            <div className="col-4 mt-3">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <h5>{item.firstName} {item.lastName}</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>Age: <b>{item.age}</b></p>
                                        <p>Salary: <b>{item.salary} $</b></p>
                                        <p>Position: <b>{item.position}</b></p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <button type="button" className="btn btn-primary" onClick={() => editEmployee(item)}>Edit</button>
                                        <button type="button" className="btn btn-danger" onClick={() => deleteEmployee(item.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <Modal isOpen={this.state.modal} toggle={changeModal}>
                    <ModalHeader>
                        <h5>Add Employee</h5>
                    </ModalHeader>
                    <AvForm onSubmit={saveEmployee} model={this.state.selectedItem}>
                        <ModalBody>

                            <AvField name="firstName" type="text" label="Firstname" placeholder="Type here"/>
                            <AvField name="lastName" type="text" label="Lastname" placeholer="Type here"/>
                            <AvField name="age" type="number" label="Age" placeholder="Type here"/>
                            <AvField name="salary" type="number" label="Salary" placeholder="Type here"/>

                            <AvField name="position" type="select" label="Position">
                                <option value="Security">Security</option>
                                <option value="Driver">Driver</option>
                                <option value="Director">Director</option>
                                <option value="Programmer">Programmer</option>
                            </AvField>

                        </ModalBody>
                        <ModalFooter>
                            <button type="submit" className="btn btn-success" >Save</button>
                            <button type="button" className="btn btn-secondary"  onClick={changeModal}>Close</button>
                        </ModalFooter>
                    </AvForm>
                </Modal>

                <Modal isOpen={this.state.deleteModal} toggle={changeDeleteModal}>
                    <ModalBody>
                        <h5>Rostdan ham o'chirmoqchimisiz?</h5>
                    </ModalBody>
                    <ModalFooter>
                        <button type="button" className="btn btn-danger" onClick={deleteEmployeeOriginal}>Ha</button>
                        <button type="button" className="btn btn-secondary" onClick={changeDeleteModal}>Yo'q</button>
                    </ModalFooter>
                </Modal>


                <ToastContainer/>
            </div>
        );
    }
}

export default Employee;