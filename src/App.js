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

  return (
    <div className="App">
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
