import { useContext, useEffect, useState } from "react"
import { UserContext } from "../components/userContext"
import { useNavigate } from 'react-router-dom'


export const UserPostsPage = () => {

    // Lav et fech med brugerne id for at  få
    const { user } = useContext(UserContext)
    const [errorMsg, setErrorMsg] = useState('')
    const [userPosts, setUserPosts] = useState(null)


    const navigate = useNavigate()

    useEffect(() => {

        //Tjek først om user findes
        if (user) {
            const id = user.id;
            const url = `https://dummyjson.com/auth/users/${id}/posts`

            const token = user.token// {eto dlya token}
            const options = {

                mehod: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': `application/json`
                },
            }

            fetch(url, options)
                .then((res) => res.json())
                .then((data) => setUserPosts(data))
                .catch((err) => console.error(err));

            console.log('User er logget ind');
        }
        else {

            setErrorMsg(
                'Du skal være logget ind for at se posts- Du vil blive viderestillet til loin'
            );

            const timeout = setTimeout(() => {
                navigate('/login')
            }, 5000)

            return () => clearTimeout(timeout)
        }

    }, []);

    console.log('userPosts', userPosts);
    return (

        <section>
            <h2>Posts</h2>
            <h4>{errorMsg}</h4>
            {userPosts?.posts.map((item) => {
                return (
                    <div key={item.id}>
                        <h4>{item.title}</h4>
                        <p>{item.body}</p>
                    </div>
                )
            }
            )}
        </section>
    )
}














8