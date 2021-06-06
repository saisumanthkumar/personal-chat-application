import React from 'react'
import {Link} from 'react-router-dom'
function Other() {
    return (
        <div>
            <h1>This is other component</h1>
            <Link to='/personal-chat-application/'>LOGIN</Link>
            <Link to='/personal-chat-application/signup'>SIGNUP</Link>
        </div>
    )
}

export default Other
