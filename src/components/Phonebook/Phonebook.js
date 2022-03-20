import React, { Component } from 'react';
import './Phonebook.scss'
class Phonebook extends Component {
state = {
name: "",
number: ""
}


textChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

addContact = (e)=>{
    e.preventDefault()
    
    this.props.onSubmit(this.state);
    this.setState({ name: "",
                    number: ""
                })
}  

    render() {
        const {name, number} = this.state
        return (
           
            (
             
                <form onSubmit={this.addContact}>
                   <label>Name
                   <input
                   className='form-input'
                    onChange={this.textChange}
                    value={name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                   </label>
        
                    <label>Number
                    <input
                    className='form-input'
                    onChange={this.textChange}
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                    </label>
        
                    <button className='form-button' type="submit"> Add contact </button>
                </form>
            
                )
        )
    }



}

export default  Phonebook