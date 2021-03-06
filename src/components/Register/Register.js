import React from 'react'
import { useNavigate } from 'react-router-dom'
import firebase from '../../utils/firebase'

const Register = () => {

    const navigate = useNavigate();

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();
        const email = e.target.username.value
        const passwpord = e.target.password.value


        firebase.auth().createUserWithEmailAndPassword(email, passwpord)
            .then(userCredential => {
                console.log('Registered')
                navigate('/')
            })
    }

    return (
        <section className="register">
            <form onSubmit={onRegisterSubmitHandler}>
                <fieldset>
                    <legend>Register</legend>
                    <p className="field">
                        <label htmlFor='username'>Username</label>
                        <span className="input">
                            <input type="text" name="username" id="username" placeholder="Username" />
                            <span className="actions"></span>
                            <i className="fas fa-user"></i>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor='password'>Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                            <span className="actions"></span>
                            <i className="fas fa-key"></i>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    )
}

export default Register