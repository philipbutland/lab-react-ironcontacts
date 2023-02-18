function Celebrity(prop){
    const {contact} = prop 
    return (
        <tr>
            <td><img src={contact.pictureUrl}></img></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar ? "🏆" : ""}</td>
            <td>{contact.wonEmmy ? "🏆" : ""}</td>
        </tr>
    ) 
}



export default Celebrity