import React from "react";

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li>
      {contact.name} - {contact.number}
      <button onClick={() => onDeleteContact(contact.name)}>Delete</button>
    </li>
  );
};

export default ContactItem;
