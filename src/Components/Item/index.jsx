import React from "react";

const Item = (props) => {

    const {deletePerson, id, name, age, isDone, updateStatus} = props

    return (
        <div>
            <p key={id}> <input type={"checkbox"} onChange={(event) => updateStatus(id, event.target.checked)} checked={isDone}/>I am {name}, I'm almost {age} years old <button onClick={() => deletePerson(id)}>delete</button></p>
        </div>
    )
}

export default Item