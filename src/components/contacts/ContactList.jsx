import React from 'react';
import ContactEl from './ContactEl';
import { Element, List } from './ContactList.styled';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);

  return (
    <>
      <List>
        {contacts
          .filter(contact => {
            return contact.name.toLowerCase().includes(filter);
          })
          .map(contact => {
            return (
              <Element key={contact.id}>
                <ContactEl contact={contact} />
              </Element>
            );
          })}
      </List>
    </>
  );
}

