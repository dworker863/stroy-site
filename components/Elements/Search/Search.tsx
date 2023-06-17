import { ChangeEvent, FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { TSearchProps } from './TSearch';
import { StyledSearch, StyledSearchWrapper } from './StyledSearch';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Search: FC<TSearchProps> = ({ changeHandler }) => {
  return (
    <StyledSearchWrapper>
      <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} />
      <StyledSearch
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          changeHandler(e.target.value)
        }
      ></StyledSearch>
    </StyledSearchWrapper>
  );
};

export default Search;
