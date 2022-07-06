import React from "react";
import styled from 'styled-components'

import icoArrow from '../../assets/Arrow.svg'


const ContainerFilterCarForm = styled.div`
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


         select{
            border-radius: 100px;
            border: 1px solid;
            padding: 5px 20px 5px 20px;
            font-weight: 300;
            background-color: rgba(255, 255, 255, 1);
            margin-bottom: 15px;
            margin-left: 20px;
            font-size: 14px;
            height: 35px;
            width: 85%;
         }
        }
`

const ContainerPrice = styled.div`
    width: 95%;
    margin:  0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    text-align: center;
    align-content: center;

    label{
      
  
    }

    input{
        position: relative;
        right: 45px;
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


const FilterCarForm = () => {
    return (
        <>
            <BackButton>
                <img src={icoArrow}></img>
            </BackButton>
            <ContainerFilterCarForm>

                <form action="">
                    <label>Marca: <br />
                        <select id="marca" name="marca">
                            <option value="empty"></option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>
                    </label>
                    <br />

                    <label>Cor:<br />
                        <select id="cor" name="cor">
                            <option value="empty"></option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>
                    </label>
                    <br />


                    <label>Ano:<br />
                        <select id="ano" name="ano">
                            <option value="empty"></option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>
                    </label>
                    <br />

                    <ContainerPrice>
                        <label>Preço min.
                            <input type="number" min="1" step="any" />
                        </label>

                        <label>Preço máx.
                            <input type="number" min="1" step="any" />
                        </label>
                    </ContainerPrice>
                    <br />
                    <ContainerSubmitButton>
                        <SubmitButton>salvar</SubmitButton>
                    </ContainerSubmitButton>

                </form>
            </ContainerFilterCarForm>
        </>

    )
}

export default FilterCarForm