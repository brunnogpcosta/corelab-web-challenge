import React from 'react'
import styled from 'styled-components'
import { Navigate, useNavigate } from 'react-router-dom'

import icoArrow from '../../assets/Arrow.svg'


const ContainerAddCarForm = styled.div`
    width: 70%;
    height: 80vh;
    background-color: rgba(255, 255, 255, 0.7);
    margin: 0 auto;
    display: flex;
    justify-content: center ;
    align-items: center;
    align-content: center;

        label{
            margin-left: 40px;
            font-weight: 500;
        }

        form{
            width: 100%;
      
     

        input{
       
            border-radius: 100px;
            border: 1px solid;
            padding: 5px 20px 5px 20px;
            font-weight: 300;
            background-color: rgba(255, 255, 255, 1);
            margin-bottom: 15px;
            margin-left: 20px;
            font-size: 14px;
            height: 20px;
            width: 70%;
            

         }
        }
`

const ContainerSubmitButton = styled.div`
    width: 100%;
    text-align: right;

  
`

const SubmitButton = styled.button`
                background: rgba(101, 220, 199, 0.8);
                color: #000;
                cursor: pointer;
                margin-bottom: 0;
                text-transform: uppercase;
                position: relative;
                right: 10px;
                top: 20px;
                border: none;
                border-radius: 100px;
                width: 100px;
                height: 30px;
`


const BackButton = styled.button`
    border: none;
    background-color: #E5E5E5;
    height: 60px;
    margin-left: 5px;
    cursor: pointer;
`



const NewCarForm = () => {
    const navigate = useNavigate()

    const navigateToHome = () => {
        //navigate to /
        navigate('/');
    };


    return (
        <>
            <BackButton onClick={navigateToHome}>
                <img src={icoArrow}></img>
            </BackButton>
            <ContainerAddCarForm>

                <form action="">
                    <label>Nome: <br />
                        <input type="text" />
                    </label>
                    <br />

                    <label>Marca:<br />
                        <input type="text" />
                    </label>
                    <br />

                    <label>Cor:<br />
                        <input type="text" />
                    </label>
                    <br />

                    <label>Ano:<br />
                        <input type="Number" />
                    </label>
                    <br />

                    <label>Placa:<br />
                        <input type="text" />
                    </label>
                    <br />
                    <ContainerSubmitButton>
                        <SubmitButton>salvar</SubmitButton>
                    </ContainerSubmitButton>

                </form>
            </ContainerAddCarForm>
        </>

    )

}

export default NewCarForm