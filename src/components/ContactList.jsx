import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts
        .filter((contact) => contact.name.toLowerCase())
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
