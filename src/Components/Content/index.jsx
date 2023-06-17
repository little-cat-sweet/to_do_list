import React, {useEffect} from 'react';
import Item from "../Item";

const Content = (props) => {

    const {persons, deletePerson} = props

    useEffect = () => {
        console.log("content reRender")
    }
    return (
        <div>
            {persons.map(person => {
                return <Item key={person.id} {...person} deletePerson={deletePerson}/>
            })}
        </div>
    )
}

export default Content