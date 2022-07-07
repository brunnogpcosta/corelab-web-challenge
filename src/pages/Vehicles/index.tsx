import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { getVehicles } from "../../lib/api";
import { Button, Card, Search } from "../../components";
import { IVehicle } from "../../types/Vehicle";

import styles from "./Vehicles.module.scss";
//import { api } from "../../services/api";


const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate()

  useEffect(() => {
    const fetchVehicles = async () => {
      const payload = await getVehicles();

      console.log("payload", payload)
      setVehicles(payload);
    };

    fetchVehicles();
  }, []);

  console.log({ vehicles });


  /* Mocki API
  useEffect(() => {
    api.get('vehicles')
      .then(response => setVehicles(response.data.vehicles))
  }, [])
*/
  const navigateToAdd = () => {
    //navigate to /add
    navigate('/add');
  };

  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        <Search placeholder="Buscar" value={search} onChange={() => { }} />

        <Button text="Adicionar" onClick={navigateToAdd} />

        <div className={styles.ContainerCardVehicles}>
          {vehicles.map(vehicle => (
            <Card key={vehicle.id} title={vehicle.name} colorCard={vehicle.color}>
              <p>Nome: {vehicle.name} {vehicle.brand}</p>
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
