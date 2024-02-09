// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactItem = ({contact, onDeleteContact}) => {
    return (
        <li>
            <div>
                <div className="contact-detail"><PersonIcon/>{contact.name}</div>
                <div className="contact-detail"><PhoneIcon/>{contact.number}</div>
            </div>
            <button onClick={() => onDeleteContact(contact.name)}>Delete</button>
        </li>
    );
};

export default ContactItem;

ContactItem.propTypes = {
    contact: PropTypes.object,
    onDeleteContact: PropTypes.func,
};

