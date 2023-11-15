import React, { useState } from "react";
import virat from "../components/Images/Kohli.jpg"
import Dhoni from "../components/Images/Dhoni.jpg"
import Sachin from "../components/Images/Sachin.jpg"
import Rohit from "../components/Images/Rohit.jpg"
import Hardikpandia from "../components/Images/Hardik Pandya.jpg"
import "./Personsdata.css"
const Personsdata = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);
const Data = [
    {
      id: 1,
      name: 'Virat Kohli',
      age: 34,
      photo: virat,
    },
    {
      id: 2,
      name: 'MsDhoni',
      age: 42,
      photo: Dhoni,
    },
    {
      id: 3,
      name: 'SachinTendulkar',
      age: 50,
      photo: Sachin,
    },
    {
      id: 4,
      name: 'RohitSharma',
      age: 36,
      photo: Rohit,
    },
    {
      id: 5,
      name: 'Hardikpandia',
      age: 30,
      photo: Hardikpandia,
    }
    
  ];

  return (
    <>
      <div className="persons-list">
        <table>
          <thead>
            <tr>
              <td><h3>Photo</h3></td>
              <td><h3>Name</h3></td>
              <td><h3>Age</h3></td>
              <td><h3>ID</h3></td>
            </tr>
          </thead>
          <tbody>
            {Data.map((person, index) => (
              <tr key={index} className="person-item" onClick={() => setSelectedPerson(person)}>
                <td>
                  <img src={person.photo} alt={person.name} />
                </td>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedPerson && (
        <div className="selected-person">
          <img src={selectedPerson.photo} alt={selectedPerson.name} />
          <h2>Name:{selectedPerson.name}</h2>
          <p>ID: {selectedPerson.id}</p>
          <p>Age: {selectedPerson.age}</p>
        </div>
      )}
    </>
  );
};

export default Personsdata;