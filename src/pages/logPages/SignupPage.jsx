import {useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'


function SignupPage() {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [errorMessage, setErrorMessage] = useState(null)

    const navigate = useNavigate();

    const handleUsername = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = {username, password}

        axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, body)
        .then(() => {
            navigate('/login')
        })
        .catch((err) => {
            console.log(err)
            setErrorMessage(err.response.data.errorMessage);
        });
    }


  return (
    <div className='SignupPage'>
        <h1>Sign</h1>
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

            <button type='submit'>Sign Up</button>
        </form>

        {errorMessage && <p>{errorMessage}</p>}

        <p>Already have an account?</p>
        <Link to="/login">LogIn</Link>

    </div>
  )
}

export default SignupPage