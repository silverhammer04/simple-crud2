import React from 'react';
// import YearPicker from 'react-year-picker';
export default class NewMovie extends React.Component {
    state = {
        title: "",
        year: "",
        seen: ""
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/movies`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state) 
        }) .then(response => response.json())
            .then(data => console.log(data))
            .then(() => {
                this.setState({
                    title: "",
                    year: "",
                    seen: ""
                })
            }) .then(this.props.refresh)            
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
                    value="Add Movie"/>
            </form>           
        ) 
    }
}
