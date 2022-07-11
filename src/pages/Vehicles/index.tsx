import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { filterVehicles, filterVehiclesByParams, getVehicles } from "../../lib/api";
import { Button, Card, Search } from "../../components";
import { IVehicle } from "../../types/Vehicle";

import styles from "./Vehicles.module.scss";



const VehiclesPage = () => {

  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [changed, setChanged] = useState(false);
  const [temFiltro, settemFiltro] = useState(false);
  const [temfiltroForm, setTemFiltroForm] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [favorite, setFavorite] = useState<IVehicle[]>([]);
  const navigate = useNavigate()


  useEffect(() => {
    const fetchVehicles = async () => {

      if (window.location.href.includes("filter") == true) {
        const pre = window.location.href.slice(32, window.location.href.length)
        var arrayList = pre.split("/");

        const brand = arrayList[0]
        const color = arrayList[1]
        const year = Number(arrayList[2])
        const minPrice = Number(arrayList[3])
        const maxPrice = Number(arrayList[4])

        console.log("Props: " + brand + " | " + color.slice(1,color.length) + " | " + year + " | " + minPrice + " | " + maxPrice)



        const payload = await filterVehiclesByParams(brand, color.slice(1,color.length), year, minPrice, maxPrice);
        console.log(payload)

        setVehicles(payload);
        setTemFiltroForm(true)
      } else {
        const payload = await getVehicles();
        setVehicles(payload);
      }


      setChanged(false)
    };

    fetchVehicles();
  }, [changed]);




  useEffect(() => {
    const fetchFavoritedVehicles = async () => {
      const vehicles = await getVehicles();
      const favorited = vehicles.filter(vehicle => vehicle.is_favorite == true)
      //console.log("payload", favorited)
      setFavorite(favorited)

    };

    fetchFavoritedVehicles();

  }, [changed]);


  const navigateToAdd = () => {
    //navigate to /add
    navigate('/add');
  };

  const hasChanged = () => {
    setChanged(true);

  }

  const removeFilter = () => {
    setTemFiltroForm(false);
    setChanged(true);

    navigate('/');

  }

  const handleChangeValue = async (value: string) => {
    setSearch(value)

    if (value === "") {
      setChanged(true)
      settemFiltro(false)
    } else {
      const payload = await filterVehicles(value);
      //console.log("teste: ", payload.values)
      setVehicles(payload);
      settemFiltro(true)
    }

  }

  return (
    <div className={styles.Vehicles}>


      <main className={styles.main}>
        <Search placeholder="Buscar" value={search} handleChangeValue={event => handleChangeValue(event)} />

        <Button text="Adicionar" onClick={navigateToAdd} />
        {temfiltroForm == true ? <button onClick={() => { removeFilter() }} className={styles.removeButton}>Remover filtros aplicados [x]</button> : <span></span>}

        <div className={styles.ContainerCardVehicles}>

          <div className={styles.favorites}>
            <h3>Favoritos ({favorite.length})</h3>
            {favorite.length <= 0 ? <p>Sem carros favoritados.</p> :
              favorite.map(vehicle =>

              (
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
              )

              )}


          </div>

          <div className={styles.allItens}>
            <h3>Veículos filtrados ({vehicles.length}) {temFiltro == true ? `para o termo "${search}"` : ""}</h3>

            {vehicles.length <= 0 ? <p>Sem carros para o filtro informado.</p> :

              vehicles.map(vehicle => (
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

        </div>
      </main>
    </div>
  );
};

export default VehiclesPage;
