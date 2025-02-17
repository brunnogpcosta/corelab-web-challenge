import React, { FormEvent, useEffect, useState } from "react";
import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom";

import icoArrow from '../../assets/Arrow.svg'
import { IVehicle } from "../../types/Vehicle";
import { filterVehiclesByParams, getVehicles } from "../../lib/api";


const ContainerFilterCarForm = styled.div`
    width: 70%;
    padding: 40px;
    background-color: rgba(255, 255, 255, 0.7);
    margin: 0 auto;


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
            width: 95%;
         }

         
        }
`

const ContainerPrice = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
 


    div{
     text-align: center;
    
         label{
         
        }

        input{
     width: 50%;

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

                :hover{
                    background: rgba(2, 173, 142, 0.8);
                   transition: .2s;
                }

                :focus{
                    background: rgba(2, 128, 104, 0.8);
                   transition: .2s;
                }
`


const BackButton = styled.button`
    border: none;
    background-color: #E5E5E5;
    height: 60px;
    margin-left: 5px;
    cursor: pointer;
`

const FilterCarForm = () => {
    const navigate = useNavigate()
    const [vehicles, setVehicles] = useState<IVehicle[]>([]);
    const [brand, setBrand] = useState("")
    const [color, setColor] = useState("")
    const [year, setYear] = useState(0);
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)

    useEffect(() => {
        const fetchVehicles = async () => {
            const payload = await getVehicles();
            //console.log("payload filter: ", payload)
            setVehicles(payload);
        };

        fetchVehicles();

    }, []);


    const handleFilterCar = async (event: FormEvent) => {
        event.preventDefault();

        const data = {
            brand,
            year,
            color,
            minPrice,
            maxPrice
        }
        try {
            const vehicle = await filterVehiclesByParams(brand, color, year, minPrice, maxPrice);
        }
        catch (err) {
            console.log("Error: " + err)
        }
    }


    const navigateToHome = () => {
        //navigate to /
        navigate('/');
    };


    return (
        <>

            <BackButton onClick={navigateToHome}>
                <img src={icoArrow}></img>
            </BackButton>

            <ContainerFilterCarForm>
                <form onSubmit={handleFilterCar}>
                    <label>Marca: <br />
                        <select id="marca" name="marca" onChange={event => setBrand(event.target.value)}>
                            <option value="empty"></option>
                            {
                                vehicles.map(vehicle => (
                                    <option key={vehicle.id} value={vehicle.brand}>{vehicle.brand.toLowerCase()}</option>
                                ))}

                        </select>
                    </label>
                    <br />

                    <label>Cor:<br />
                        <select id="cor" name="cor" onChange={event => setColor(event.target.value)}>
                            <option value="empty"></option>
                            {vehicles.map(vehicle => (
                                <option key={vehicle.id} value={vehicle.color}>{vehicle.color.toLowerCase()}</option>
                            ))}
                        </select>
                    </label>
                    <br />


                    <label>Ano:<br />
                        <select id="ano" name="ano" onChange={event => setYear(Number(event.target.value))}>
                            <option value="empty"></option>
                            {vehicles.map(vehicle => (
                                <option key={vehicle.id} value={vehicle.year}>{vehicle.year}</option>
                            ))}
                        </select>
                    </label>
                    <br />

                    <ContainerPrice>

                        <div>
                            <label>Preço min.  </label>
                            <input type="number" min="1" step="any" onChange={event => setMinPrice(Number(event.target.value))} />
                        </div>

                        <div>
                            <label>Preço máx.</label>
                            <input type="number" min="1" step="any" onChange={event => setMaxPrice(Number(event.target.value))} />
                        </div>

                    </ContainerPrice>

                    <br />

                    <Link to={{
                        pathname: "/",
                        search: `filter?q=${brand}/${color}/${year}/${minPrice}/${maxPrice}`
                    }}>
                        <ContainerSubmitButton>
                            <SubmitButton>salvar</SubmitButton>
                        </ContainerSubmitButton>
                    </Link>
                </form>
            </ContainerFilterCarForm>
        </>

    )
}

export default FilterCarForm