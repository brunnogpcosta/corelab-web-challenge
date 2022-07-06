import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

import { getVehicles } from "../../lib/api";
import { Button, Card, Search } from "../../components";
import { IVehicle } from "../../types/Vehicle";

import styles from "./Vehicles.module.scss";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate()

  useEffect(() => {
    const fetchVehicles = async () => {
      const payload = await getVehicles();
      setVehicles(payload);
    };

    fetchVehicles();
  }, []);

  console.log({ vehicles });


  const navigateToAdd = () => {
    //navigate to /add
    navigate('/add');
  };

  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        <Search placeholder="Buscar" value={search} onChange={() => {}} />

        <Button text="Adicionar" onClick={navigateToAdd} />

        <Card title="Sandero Stepway">
          <p>Price: 22000</p>
          <p>Description: Carro usado por 2 anos...</p>
          <p>Year: 2018</p>
        </Card>
      </main>
    </div>
  );
};

export default VehiclesPage;
