import './App.css';
import Content from "./Components/Content";
import Header from "./Components/Header";
import {useState} from "react";
import Footer from "./Components/Footer";

function App() {

    const initPersons = [
        {
            "id" : "001",
            "name" : "Jack",
            "age" : 18,
            "isDone" : true
        },
        {
            "id" : "002",
            "name" : "Mary",
            "age" : 19,
            "isDone" : true
        },
        {
            "id" : "003",
            "name" : "Bob",
            "age" : 20,
            "isDone" : false
        }
    ]

    const [persons, setPersons] = useState(initPersons)

    const initStatus = () => {
        for(let i = 0; i < persons.length; i ++){
            if(persons[i].isDone === false){
                return false;
            }
        }
        return true;
    }
    const [isAllDone, setIsAllDone] = useState(initStatus)

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
    const updateIsDone = (id, isDone) => {

        let newPersons = [];
        for(let i = 0; i < persons.length; i ++){
            if(id === persons[i].id){
                persons[i].isDone = isDone;
            }
            newPersons.push(persons[i]);
        }
        setPersons(newPersons)
        setIsAllDone(initStatus())
    }

    const updateAllStatus = (isDone) => {
        const newPersons = persons.map((person) => ({ ...person, isDone }));
        setPersons(newPersons);
        setIsAllDone(isDone);
        console.log(JSON.stringify(persons))
    }

    return (
        <div className="App">
            <Header addPerson={person => addPerson(person)}/>
            <Content persons={persons} deletePerson={id => deletePerson(id)} updateStatus={(id, isDone) => updateIsDone(id, isDone)}/>
            <Footer isAllDone={isAllDone} updateAllStatus={updateAllStatus} persons={persons}/>
        </div>
    );
}

export default App;
