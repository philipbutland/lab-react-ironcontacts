import './App.css';
import Contacts from "./contacts.json"
import Celebrity from './components/Celebrity';



function App() {
  const fiveContacts = Contacts.slice(0,5)
  return (
    <div className="App">
    <table>
      <tr><th>Picture</th><th>Name</th><th>Popularity</th></tr>
      {fiveContacts.map(contact => {
        return <Celebrity contact={contact}></Celebrity>
      })}
    </table>

    </div>
  );
}

export default App;
