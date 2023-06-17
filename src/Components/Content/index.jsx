import React from 'react';
import Item from "../Item";

const Content = (props) => {

    const {persons, deletePerson, updateStatus} = props


    return (
        <div>
            {persons.map(person => {
                return <Item key={person.id} {...person} deletePerson={deletePerson} updateStatus={updateStatus}/>
            })}
        </div>
    )
}

export default Content