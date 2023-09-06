import { useContext } from "react";
import { UserContext } from "../userContext"



// "username": "atuny0",
// "password": "9uQFF1Lh"

export const Login = () => {


    const { setUser, user } = useContext(UserContext);

    const submitHandler = (event) => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value


        if (username !== '' && password !== "") {
            const url = 'https://dummyjson.com/auth/login'

            const options = {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password,


                })
            }

            fetch(url, options)
                .then((res) => res.json())
                .then((data) => setUser(data))
                .catch((err) => console.error(err));

        }
        else {
            alert('du skal udfylde felterne fær du sender!')
        }
        console.log('username', event.target.username.value)
        console.log('password', event.target.password.value);
    }
    if (user?.firstName)
        return (
            <>

                <h3>Velkommen{user?.firstName}</h3>
                <button onClick={() => setUser(null)}>Logout</button>

            </>
        )
    else
        return (

            <form style={{ margin: '2rem' }} onSubmit={(e) => submitHandler(e)}>
                <label >
                    Brugernavn:
                    <input name="username" placeholder="indsat dit brugernavn"></input>
                </label>

                <label >
                    Password:
                    <input name="password" type='password' placeholder="indsat password"></input>
                </label>
                <input type="submit" value='Send' />
            </form>

        )
}