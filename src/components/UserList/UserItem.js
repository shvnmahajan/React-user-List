import React from "react";

const UserItem = (props) => {
    return (
        <div className="user-item">
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
        </div>
    )
}

export default UserItem;