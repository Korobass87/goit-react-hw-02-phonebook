import './Contacts.scss'

export default function Contacts ({contactsList, deleteContact }) {

    return (
        <ul  className='contacts-list'>
            {contactsList.map(({id, name, number}) => 
            <li className='contacts-item' key={id}>
                <p className='contacts-text'>{name}: {number}</p>
                <button className='contacts-button' onClick={() => deleteContact(id)}>Delete</button> 
            </li> )}
        </ul>
        
      
    )
}