function Celebrity(prop){
    const {contact, clickToDelete} = prop 
    return (
        <tr>
            <td><img src={contact.pictureUrl}></img></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar ? "🏆" : ""}</td>
            <td>{contact.wonEmmy ? "🏆" : ""}</td>
            <td><button onClick={clickToDelete }>🗑️</button></td>
        </tr>
    ) 
}



export default Celebrity