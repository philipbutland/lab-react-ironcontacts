import "./App.css";
import Contacts from "./contacts.json";
import Celebrity from "./components/Celebrity";
import { useState } from "react";

const firstFive = Contacts.slice(0, 5);

function App() {
  const [newContacts, setNewContacts] = useState(firstFive);

  function AddContact() {
    const randomIndex = Math.floor(Math.random() * Contacts.length);
    const spreadedContacts = [...newContacts]
    spreadedContacts.push(Contacts[randomIndex])
    // duplicates not treated in this lab. but eventually we could be splicing 
    setNewContacts(spreadedContacts);
  }

  function sortByName() {
    const tempArr = [...newContacts];

    tempArr.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    setNewContacts(tempArr);
  }

  function sortByPopularity() {
    const tempArr = [...newContacts];
    tempArr.sort((a, b) => b.popularity - a.popularity);
    setNewContacts(tempArr);
  }

  function deleteContact(contactId) {
    const tempArr = [...newContacts];

    const filteredContacts = tempArr.filter((contact) => {
      return contact.id !== contactId;
    });

    console.log(filteredContacts);
    setNewContacts(filteredContacts);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <div className="buttons">
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
      </div>

      <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Remove Contact</th>
        </tr>
        </thead>
        <tbody>
        {newContacts.map((contact) => {
          return (
            <Celebrity
              key={contact.id}
              contact={contact}
              clickToDelete={() => deleteContact(contact.id)}
            ></Celebrity>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
