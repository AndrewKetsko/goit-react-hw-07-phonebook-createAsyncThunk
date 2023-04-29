import React from 'react';
import { Form } from './form/Form';
import { FilterField } from './filter/FilterField';
import ContactList from './contacts/ContactList';
import { Container, Header } from './App.styled';

export const App = () => {

  return (
    <Container>
      <Header>PhoneBook</Header>
      <Form />

      <Header>Contacts</Header>
      <FilterField />

      <ContactList />
    </Container>
  );
};
