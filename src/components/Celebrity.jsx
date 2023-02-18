function Celebrity(prop){
    const {contact} = prop 
    return (
        <tr>
            <td><img src={contact.pictureUrl}></img></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
        </tr>
    ) 
}



export default Celebrity