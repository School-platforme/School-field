import React, { Component } from 'react'
import axios from 'axios'

export default class SigninStudent extends Component {
    constructor(props) {
        super()
        this.state = {
            StudentName: '',
            StudentLastName: '',
            Email: '',
            Password: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.access = this.access.bind(this)
    }
    handleChange(evt) {
        const value = evt.target.value;
        this.setState({

            [evt.target.name]: value,

        });
    }
    access() {
        let condition = { Email: this.state.Email, Password: this.state.Password, StudentName: this.state.StudentName, StudentLastName: this.state.StudentLastName }
        axios.post('http://localhost:3000/findstudent', condition)
            .then(rst => {
                
                if (rst.data) {
                    this.props.setStudent(rst.data)
                    this.props.setMain('accessstudent')
                   
                }
            })
            .then(_=> {
                this.setState({
                    StudentName: '',
                    StudentLastName: '',
                    Email: '',
                    Password: '',
                })
            } )
    }


    render() {
        
        return (
            <div>

                <input type="text" placeholder='StudentName' name='StudentName' onChange={this.handleChange} value={this.state.StudentName} />
                <input type="text" name='StudentLastName' placeholder='StudentLastName' onChange={this.handleChange} value={this.state.StudentLastName}  />
                <input type="text" name='Email' placeholder='Email' onChange={this.handleChange} value={this.state.Email} />
                <input type="password" placeholder='Password' name='Password' onChange={this.handleChange} value={this.state.Password} />
                <button type='button' onClick={this.access} >signin</button>

                <button onClick={() => this.props.setMain('main')}>back</button>
            </div>
        )
    }
}