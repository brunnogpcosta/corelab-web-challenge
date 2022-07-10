import styled from 'styled-components'

import icoButton from '../../assets/Add.svg'


const ImgButton = styled.img`
  position: absolute;
  top: 92px;
  left: 60px;
  color: rgba(2, 2, 2, 0.7);
  cursor: pointer;
`

const AddButton = styled.button`
    margin-top: 10px;
    background-color: rgba(101, 220, 199, 0.8);
    border: none;
    border-radius: 100px;
    padding: 15px;
    text-transform: uppercase;
    font-weight: bolder;
    color: rgba(2, 2, 2, 0.7);
    margin-right: 20px;
    cursor: pointer;

                &:hover{
                    background: rgba(2, 173, 142, 0.8);
                   transition: .2s;
                }

                &:focus{
                    background: rgba(2, 128, 104, 0.8);
                   transition: .2s;
                }

`

interface IButton {
  onClick: () => void;
  text: string;
}

const Button = (props: IButton) => {
  return (
    <>
      <ImgButton src={icoButton} onClick={props.onClick}></ImgButton>
      <AddButton onClick={props.onClick}>{props.text}</AddButton>
    </>
  )



};

export default Button;
