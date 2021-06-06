import React from 'react'
import {Link} from 'react-router-dom'
import './other.css'
function Other() {
    return (
        <div className="error">
            <p>😥😥😥</p>
            <h1>Error 404-Page not found</h1>
            <h3>Please Go Back</h3>
            <Link to='/personal-chat-application/'>LOGIN</Link>
            <Link to='/personal-chat-application/signup'>SIGNUP</Link>
        </div>
    )
}

export default Other
