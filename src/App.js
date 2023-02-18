import "./App.css";
import Contacts from "./contacts.json";
import Celebrity from "./components/Celebrity";
import { useState } from "react";

const displayContacts = Contacts.slice(0, 5);

function App() {
  const [newContacts, setNewContacts] = useState(displayContacts);

  function AddContact() {
    const random = Contacts[Math.floor(Math.random() * Contacts.length)];
    setNewContacts(prevContacts => {
      const newList = [random, ...prevContacts]

      return newList
    });

  }


  function sortByName(){
    const tempArr = [...newContacts]

    tempArr.sort((a,b)=> {
      if(a.name > b.name){
        return 1
      }else if (a.name < b.name){
        return -1
      }
      return 0
    })

    setNewContacts(tempArr)
  }


  function sortByPopularity(){
    const tempArr = [...newContacts]
    tempArr.sort((a,b)=>  b.popularity - a.popularity)
    setNewContacts(tempArr)
  }
  return (
    <div className="App">
    <h1>IronContacts</h1>

      <button
        onClick={() => {
          sortByName();
        }}
      >
        Sort by name
      </button>
      <button
        onClick={() => {
          sortByPopularity();
        }}
      >
        Sort by popularity
      </button>
      <button
        onClick={() => {
          AddContact();
        }}
      >
        Add Random Contact
      </button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {newContacts.map((contact) => {
          return <Celebrity contact={contact}></Celebrity>;
        })}
        {/* {newContacts.name} */}
      </table>
    </div>
  );
}

export default App;
