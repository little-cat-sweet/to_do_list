import React, {useRef} from 'react';
import {nanoid} from 'nanoid'
const Header = (props) => {

    const nameRef = useRef(null);
    const ageRef = useRef(null);

    const {addPerson} = props

    const addPersonLocalFun = () => {

        let person = {
            id : nanoid(),
            name : nameRef.current.value,
            age : Number(ageRef.current.value)
        };
        console.log(person)
        nameRef.current.value = null;
        ageRef.current.value = null;
        addPerson(person)
        alert("add successfully !")
    }
    return (
        <div>
            <input ref={nameRef}/> 姓名
            <input ref={ageRef}/> 年龄
            <button onClick={() => addPersonLocalFun()}>add person</button>
        </div>
    )
}

export default Header