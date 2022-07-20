import React, { Component } from "react";


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
            <form className="TodoEditer"  onSubmit={this.handleSubmit}>
                <textarea value={this.state.text} onChange={this.handleChange}></textarea>
                <button type="submit">Створити</button>
        </form>
    )
}
} 
export default TodoEditer