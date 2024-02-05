import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, onDeleteContact, filterText }) => {
  return (
    <ul>
      {contacts
        .filter((contact) => contact.name.toLowerCase().includes(filterText))
        .map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
    </ul>
  );
};

export default ContactList;
