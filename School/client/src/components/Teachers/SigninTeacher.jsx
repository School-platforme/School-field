import React, { Component } from 'react'
import axios from 'axios'

export default class SigninTeacher extends Component {
    constructor(props) {
        super()
        this.state = {
            TeacherName: '',
            TeacherLastName: '',
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
        let condition = { Email: this.state.Email, Password: this.state.Password, TeacherName: this.state.TeacherName, TeacherLastName: this.state.TeacherLastName }
        axios.post('http://localhost:3000/find', condition)
            .then(rst => {
                
                if (rst.data) {
                    this.props.setteacher(rst.data)
                    this.props.setMain('accessteacher')
                   
                }
            })
            .then(_=> {
                this.setState({
                    TeacherName: '',
                    TeacherLastName: '',
                    Email: '',
                    Password: '',
                })
            } )
    }


    render() {
        return (
            <div>

                <input type="text" placeholder='TeacherName' name='TeacherName' onChange={this.handleChange} value={this.state.TeacherName} />
                <input type="text" name='TeacherLastName' placeholder='teacherLastName' onChange={this.handleChange} value={this.state.TeacherLastName}  />
                <input type="text" name='Email' placeholder='Email' onChange={this.handleChange} value={this.state.Email} />
                <input type="password" placeholder='Password' name='Password' onChange={this.handleChange} value={this.state.Password} />
                <button type='button' onClick={this.access} >signin</button>

                <button onClick={() => this.props.setMain('main')}>back</button>
            </div>
        )
    }
}

