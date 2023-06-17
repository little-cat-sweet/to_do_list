import React from "react";

const Item = (props) => {

    const {deletePerson, id, name, age} = props

    return (
        <div>
            <p key={id}>I am {name}, I'm almost {age} years old <button onClick={() => deletePerson(id)}>delete</button></p>
        </div>
    )
}

export default Item