import { Navigate, useNavigate } from 'react-router-dom';
import firebase from '../utils/firebase'

const Logout = () => {
    firebase.auth().signOut();

    return (
        <Navigate to='/' />
    )
}

export default Logout