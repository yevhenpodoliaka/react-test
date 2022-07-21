import React, { Component } from "react";
import s from './TodoEditer.module.css'


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
            <form className={s.form}  onSubmit={this.handleSubmit}>
                <textarea value={this.state.text} onChange={this.handleChange}></textarea>
                <button className={s.btn} type="submit">Створити</button>
        </form>
    )
}
} 
export default TodoEditer