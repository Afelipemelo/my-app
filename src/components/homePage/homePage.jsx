import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
const HomePage = () => {
    const {logout} = useAuth0()
    const {user, isAuthenticated, isLoading} = useAuth0()
    return (
        <div>
            {isAuthenticated && (
                <div>
                    <img src={user.picture}/>
                    <h2>{user.name} </h2>
                    <h2>{user.nickname} </h2>
                    <p>Emai: {user.email}</p>
                </div>
            )} 
            <button onClick={()=>logout({returnTo:window.location.origin})}>Cerrar Sesion</button>
        </div>
      );
}
 
export default HomePage;