import React, { Component } from "react";
import styled from 'styled-components';


class TodoEditer extends Component {
    state = {
        text: '',
    }

    handleChange = e => {
        this.setState({ text:e.currentTarget.value})
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.text)
        this.setState({text:''})
      
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <textarea value={this.state.text} onChange={this.handleChange}></textarea>
                <Btn type="submit">Створити</Btn>
        </Form>
    )
}
} 
export default TodoEditer


const Form = styled.form`
   display: flex;
      flex-direction: column;`
     

const Btn = styled.button` 
  margin-top: 10px;`
   
  