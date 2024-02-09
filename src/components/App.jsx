import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filterText, setFilterText] = useState("");

  const addContact = (values) => {
    const newContact = {
      id: Date.now(),
      name: values.name,
      number: values.number,
    };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (name) => {
    setContacts(contacts.filter((contact) => contact.name !== name));
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value.toLowerCase());
  };

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterText)
    );
  };

  return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <div className="search-container">
          <SearchBox filterText={filterText} onChange={handleFilterChange} />
        </div>
        <div className="contact-list">
          <ContactList
              contacts={getFilteredContacts()}
              onDeleteContact={deleteContact}
              filterText={filterText}
          />
        </div>
      </div>
  );
};

export default App;