import axios from 'axios'
import {useState, useContext} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {AuthContext} from '../../context/auth.context'


function LoginPage() {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [errorMessage, setErrorMessage] = useState(null)

    const navigate = useNavigate();
    const {storeToken, authenticateUser} = useContext(AuthContext);

    const handleUsername = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = {username, password}

        axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, body)
        .then((response) => {
            storeToken(response.data.authToken)
            authenticateUser()
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
            setErrorMessage(err.response.data.errorMessage);
        });
    }


  return (
    <div className='LoginPage'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>UserName</label>
            <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsername}
            />
            <label htmlFor='password'>password</label>
            <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            />

            <button type='submit'>Login</button>
        </form>

        {errorMessage && <p>{errorMessage}</p>}

        <p>Dont`t have an account?</p>
        <Link to="/signup">Signup</Link>

    </div>
  )
}

export default LoginPage