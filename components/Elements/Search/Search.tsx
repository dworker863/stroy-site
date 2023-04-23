import React, { ChangeEvent, FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ISearch } from './ISearch';
import { StyledSearch, StyledSearchWrapper } from './StyledSearch';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Search: FC<ISearch> = ({ onChange }) => {
  return (
    <StyledSearchWrapper>
      <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} />
      <StyledSearch
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      ></StyledSearch>
    </StyledSearchWrapper>
  );
};

export default Search;
