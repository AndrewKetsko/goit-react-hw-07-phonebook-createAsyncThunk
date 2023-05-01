import React from 'react';
import PropTypes from 'prop-types';
import { Delete, Card, Name, Tel } from './ContactEl.styled';
// import { useDispatch } from 'react-redux';
// import { delContact } from 'components/redux/slice';
import { useDelContactMutation } from 'components/redux/query';

export default function ContactEl({ contact }) {
  // const dispatch = useDispatch();
  const [delContact] = useDelContactMutation();

  const delFunc = e => {
    delContact(contact.id);
  };

  return (
    <Card>
      <Delete type="button" onClick={delFunc}>
        X
      </Delete>
      <Name>{contact.name}:</Name>
      <Tel> {contact.phone}</Tel>
    </Card>
  );
}

ContactEl.propTypes = {
  contact: PropTypes.object.isRequired,
};
