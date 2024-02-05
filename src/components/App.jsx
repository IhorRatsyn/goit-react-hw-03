import React, { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
// import { v4 as uuidv4 } from "uuid";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
      filterText: "",
    };
  }

  addContact = (values) => {
    const newContact = {
      id: uuidv4(),
      name: values.name,
      number: values.number,
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = (name) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.name !== name),
    }));
  };

  handleFilterChange = (e) => {
    this.setState({ filterText: e.target.value.toLowerCase() });
  };

  getFilteredContacts = () => {
    const { filterText, contacts } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterText)
    );
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <div className="search-container">
          <SearchBox
            filterText={this.state.filterText}
            onChange={this.handleFilterChange}
          />
        </div>
        <div className="contact-list">
          <ContactList
            contacts={this.getFilteredContacts()}
            onDeleteContact={this.deleteContact}
            filterText={this.state.filterText}
          />
        </div>
      </div>
    );
  }
}

export default App;
