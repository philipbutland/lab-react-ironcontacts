function Celebrity(prop){
    const {contact, clickToDelete} = prop 
    return (
        <tr>
            <td><img src={contact.pictureUrl}></img></td>
            <td><b>{contact.name}</b></td>
            <td>{Math.round(contact.popularity*100)/100}</td>
            <td style={{"font-size": "2em"}}>{contact.wonOscar ? "🏆" : ""}</td>
            <td style={{"font-size": "2em"}}>{contact.wonEmmy ? "🏆" : ""}</td>
            <td><button onClick={clickToDelete} className="deleteBtn">🗑️</button></td>
        </tr>
    ) 
}


export default Celebrity