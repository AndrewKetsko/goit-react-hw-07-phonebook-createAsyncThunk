import React from 'react';
import PropTypes from 'prop-types';
import { Input, Name } from './FilterField.styled';

export const FilterField = ({ searchFunc }) => {
  return (
    <>
      <Name htmlFor="search">Find contacts by name</Name>
      <Input type="text" name="filter" onInput={searchFunc} />
    </>
  );
};
  
FilterField.propTypes = {
  searchFunc: PropTypes.func.isRequired
};
