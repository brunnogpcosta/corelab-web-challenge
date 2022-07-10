import React, { FormEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'



import icoArrow from '../../assets/Arrow.svg'
import { getVehiclesById, postVehicles, updateVehicles } from '../../lib/api'


const ContainerAddCarForm = styled.div`
    width: 70%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    margin: 0 auto;
    padding: 40px;

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
            width: 80%;
           
            

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

const EditCarForm = () => {
    const [id, setId] = useState(3)
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [description, setDescription] = useState('')
    const [color, setColor] = useState('')
    const [year, setYear] = useState(1900)
    const [price, setPrice] = useState(0)
    const [plate, setPlate] = useState('')
    const [is_favorite, setIsFavorite] = useState(false)
    const [createdAt, setCreatedAt] = useState(new Date())

    const navigate = useNavigate()


    useEffect(() => {
        const url = window.location.href

        const id = Number(url.slice(27, url.length));

        //console.log(id)

        const fetchVehicles = async () => {
          const data = await getVehiclesById(id);
          setName(data.name)
          setBrand(data.brand)
          setColor(data.color)
          setPrice(data.price)
          setPlate(data.plate)
          setIsFavorite(data.is_favorite)
          setDescription(data.description)
          setYear(data.year)

          setId(id)
          
        };
    
        fetchVehicles();
    
      }, []);

    const navigateToHome = () => {
        //navigate to /
        navigate('/');
    };


    

    const handleUpdateCar = async (event: FormEvent) => {
        event.preventDefault();

        const data = {
            name,
            brand,
            description,
            plate,
            is_favorite,
            year,
            color,
            price
        }
        try {
            const vehicle = await updateVehicles(data, id)

            //console.log(vehicle.id)

            navigateToHome()
        }


        catch (err) {
            console.log("Error: " + err)
        }
    }


    return (
        <>
            <BackButton onClick={navigateToHome}>
                <img src={icoArrow}></img>
            </BackButton>
            <ContainerAddCarForm>

                <form onSubmit={handleUpdateCar}>
                    <label>Nome: <br />
                        <input type="text" value={name} onChange={event => setName(event.target.value)} required />
                    </label>
                    <br />

                    <label>Marca:<br />
                        <input type="text" value={brand} onChange={event => setBrand(event.target.value)} required />
                    </label>
                    <br />

                    <label>Descrição: <br />
                        <input type="text" value={description} onChange={event => setDescription(event.target.value)} required />
                    </label>
                    <br />

                    <label>Cor:<br />
                        <input type="color" value={color} onChange={event => setColor(event.target.value)} style={{ height: '35px', width: '84%' }} required />
                    </label>
                    <br />

                    <label>Ano:<br />
                        <input type="Number" value={year} min="1900" onChange={event => setYear(Number(event.target.value))} required />
                    </label>
                    <br />

                    <label>Price:<br />
                        <input type="Number" value={price} onChange={event => setPrice(Number(event.target.value))} required />
                    </label>
                    <br />

                    <label>Placa:<br />
                        <input type="text" value={plate} onChange={event => setPlate(event.target.value)} required />
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

export default EditCarForm