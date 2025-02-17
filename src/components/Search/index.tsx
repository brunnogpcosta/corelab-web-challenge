import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

import Modal from 'react-modal'

import icoSearch from '../../assets/Search.svg'
import icoFilter from '../../assets/filter.png'

import { useState } from 'react';

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
  margin-right: 5px;

`
const ButtonFilter = styled.button`
  border: none;
  background-color: #E5E5E5;
  cursor: pointer;
`

interface ISearch {
  placeholder: string;
  value: string;
  handleChangeValue: (event: string) => void;
}

const Search = (props: ISearch) => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)


  function handleOpenModal() {
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }



  const navigateToFilter = () => {
    //navigate to /filter
    navigate('/filter');
  };


  return (
    <Container>
      <SearchImg src={icoSearch}></SearchImg>
      <Input type="text" placeholder={props.placeholder} onChange={event => props.handleChangeValue(event.target.value)}></Input>

      <ButtonFilter onClick={navigateToFilter}>
        <img src={icoFilter}></img>
      </ButtonFilter>

      <Modal isOpen={isModalOpen}>
        <label>Marca:</label>
      </Modal>
    </Container>
  );
};

export default Search;
