import React, { Component } from "react";

const options = [
    { label: 'IT', value: 'it' },
    { label: 'Engineer', value: 'engineer' },
    { label: 'Unemployed', value: 'unemployed' },

]

class DemoPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "Pesho",
            bio: 'Lorem Ipsum',
            occupation: "unemployed"
        }

        this.emailInput = React.createRef();

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

    }

    onSubmitHandler(e) {
        e.preventDefault();

        console.log(this.state)
        console.log(this.emailInput.current.value)

    }
    // onUsernameChangeHandler(e) {
    //     this.setState({ username: e.target.value })
    // }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>Demo form:</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.onChangeHandler} />

                    <label htmlFor="age">Number:</label>
                    <input type="number" id="age" name="age" />

                    <label htmlFor="bio">Bio:</label>
                    <textarea name="bio" id="bio" value={this.state.bio} onChange={this.onChangeHandler}></textarea>

                    <label htmlFor="occupation">Dropdown:</label>
                    <select name="occupation" id="occupation" value={this.state.occupation} onChange={this.onChangeHandler}>
                        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                        {/* <option value="it">IT</option>
                        <option value="engineer">Engineer</option>
                        <option value="unemployed"  >Unemployed</option> */}
                    </select>
                    
                    <label htmlFor="email">Email</label>
                    <input
                        ref={this.emailInput}
                        type="email"
                        id="email"
                        placeholder="examle@pesho.com"
                    />
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}

export default DemoPage