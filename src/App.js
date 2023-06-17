import './App.css';
import Content from "./Components/Content";
import Header from "./Components/Header";
import {useState} from "react";

function App() {

    const initPersons = [
        {
            "id" : "001",
            "name" : "Jack",
            "age" : 18,
        },
        {
            "id" : "002",
            "name" : "Mary",
            "age" : 19,
        },
        {
            "id" : "003",
            "name" : "Bob",
            "age" : 20,
        }
    ]

    const [persons, setPersons] = useState(initPersons)

    const deletePerson = (id) => {

        let newPersons = [];
        for(let i = 0; i < persons.length; i ++){
            if(persons[i].id !== id){
                newPersons.push(persons[i])
            }
        }
        setPersons(newPersons)
    }

    const addPerson = (person) => {


        const newPersons = [...persons, person]
        setPersons(newPersons)
    }

    return (
        <div className="App">
            <Header addPerson={person => addPerson(person)}/>
            <Content persons={persons} deletePerson={id => deletePerson(id)}/>
        </div>
    );
}

export default App;
