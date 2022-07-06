import styled from 'styled-components'

import icoSearch from '../../assets/Search.svg'
import icoFilter from '../../assets/filter.png'


const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const SearchImg = styled.img`
    width: 30px;
    height: 30px;
    color: #020202;
    position: absolute;
    margin: 5px 0px 0px 10px;


`

const Input = styled.input`
  background-color: rgba(101, 220, 199, 0.3);
  color: #020202;
  border-radius: 100px;
  border: none;
  width: 100%;
  height: 30px;
  padding: 5px 0px 5px 50px;

`

interface ISearch {
  placeholder: string;
  value: string;
  onChange: () => void;
}

const Search = (props: ISearch) => {
  return (
    <Container>
      <SearchImg src={icoSearch}></SearchImg>
      <Input type="text" placeholder={props.placeholder} value={props.value} ></Input>

      <img src={icoFilter}></img>

    </Container>
  );
};

export default Search;
