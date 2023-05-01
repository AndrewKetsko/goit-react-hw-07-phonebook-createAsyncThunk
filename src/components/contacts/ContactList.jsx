import React from 'react';
import ContactEl from './ContactEl';
import { Element, List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'components/redux/query';

export default function ContactList() {
  // const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.filter.filter);

  const { data = []} = useGetContactsQuery();
  return (
    <>
      <List>
        {data
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

