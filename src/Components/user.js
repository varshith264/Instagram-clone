import React from 'react'

const user = ({username}) => {
    return (
        <div>
            <p>{username}</p>
            {alert(username)};
        </div>
    )
}

export default user
