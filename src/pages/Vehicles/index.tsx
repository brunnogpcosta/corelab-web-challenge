import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { filterVehicles, getVehicles } from "../../lib/api";
import { Button, Card, Search } from "../../components";
import { IVehicle } from "../../types/Vehicle";

import styles from "./Vehicles.module.scss";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [changed, setChanged] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [favorite, setFavorite] = useState<string>("");
  const navigate = useNavigate()

  useEffect(() => {
    const fetchVehicles = async () => {
      const payload = await getVehicles();
      //console.log("payload", payload)
      setVehicles(payload);
      setChanged(false)
    };

    fetchVehicles();

  }, [changed]);


  const navigateToAdd = () => {
    //navigate to /add
    navigate('/add');
  };

  const hasChanged = ()=>{
    setChanged(true);
    console.log("true")
  }

  const handleChangeValue = async (value: string) => {
    setSearch(value)

    if (value === "") {
      setChanged(true)
    }else{
      const payload = await filterVehicles(value);
      console.log("teste: ", payload.values)
      setVehicles(payload);
    }
  
  }

  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        <Search placeholder="Buscar" value={search} handleChangeValue={event => handleChangeValue(event)} />

        <Button text="Adicionar" onClick={navigateToAdd} />

        <div className={styles.ContainerCardVehicles}>
          {vehicles.map(vehicle => (
            <Card key={vehicle.id} title={vehicle.name} id={vehicle.id} is_favorite={vehicle.is_favorite} colorCard={vehicle.color} hasChanged={() => hasChanged()}>
              <p>Marca: {vehicle.brand}</p>
              <p>Preço: {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(vehicle.price)}</p>
              <p>Descrição: {vehicle.description}</p>
              <p>Ano: {vehicle.year}</p>
              <p>Cor: {vehicle.color}</p>

            </Card>
          ))}

        </div>
      </main>
    </div>
  );
};

export default VehiclesPage;
