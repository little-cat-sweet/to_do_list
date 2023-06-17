import React, {useEffect, useState} from "react";

const Footer = (props) => {

    const {isAllDone, updateAllStatus, persons} = props;

    const [isDoneNumber, setIsDoneNumber] = useState(0)

    useEffect(() => {
        let times = 0;
        for(let i = 0; i < persons.length; i ++){
            if(persons[i].isDone === true){
                times ++;
            }
        }
        setIsDoneNumber(times);
    }, [persons])


    return(
        <div>
            <input type={"checkbox"} checked={isAllDone} onChange={(e) => updateAllStatus(e.target.checked)}/>
            已选: {isDoneNumber}/ 所有:{persons.length}
        </div>
    )

}

export default Footer;