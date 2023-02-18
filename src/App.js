import "./App.css";
import Contacts from "./contacts.json";
import Celebrity from "./components/Celebrity";
import { useState } from "react";

const displayContacts = Contacts.slice(0, 5);

function App() {
  const [newContacts, setNewContacts] = useState(displayContacts);

  function AddContact() {
    const random = Contacts[Math.floor(Math.random() * Contacts.length)];
    // console.log("Math: ", Math.floor(Math.random() * Contacts.length), Contacts.length)
    console.log(random);
    console.log(displayContacts);
    setNewContacts(prevContacts => {
      const newList = [random, ...prevContacts]

      return newList
    });

  }

  return (
    <div className="App">
      {/* <button>Add Random Contact</button> */}
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
