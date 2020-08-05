import React from 'react';

export default class UpdateMovie extends React.Component {
    state = {
        title: this.props.movie.title,
        year: this.props.movie.year,
        seen: this.props.movie.seen
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/movies/${this.props.movie._id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state) 
        }) .then(response => response.json())
            .then(data => console.log(data))
            .then(this.props.toggleForm)
            .then(this.props.refresh)            
    }
    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="title"
                    type="text"
                    placeholder="Movie Title"
                    value={this.state.title}
                    onChange={this.handleChange} 
                    required/>
                <input name="year"
                    type="number"
                    placeholder="YYYY"
                    value={this.state.year}
                    onChange={this.handleChange} />
                <input name="seen"
                    type="text"
                    placeholder="Seen it?"
                    value={this.state.seen}
                    onChange={this.handleChange} />
                
                
                <input type="submit"
                    value="Update Movie"/>
            </form>           
        ) 
    }
}
