import React, { ChangeEvent, FC } from 'react';
import { ISearch } from './ISearch';
import { StyledSearch } from './StyledSearch';

const Search: FC<ISearch> = ({ onChange }) => {
  return (
    <StyledSearch
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    />
  );
};

export default Search;
