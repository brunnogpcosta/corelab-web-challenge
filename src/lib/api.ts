import ICreateVehicleDto from "../types/dtos/CreateVehiclesDto";
import { IVehicle } from "../types/Vehicle";

const API = "http://127.0.0.1:3333";

const endpoint = (path: string): string => API + path;

const get = async (path: string): Promise<any> => {
  return fetch(endpoint(path)).then((res) => res.json());
};

const post = async (path: string, body: ICreateVehicleDto): Promise<any> => {

  const myHeaders = new Headers({
    "Content-Type": "application/json"
  });
  return fetch(endpoint(path), {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(body)
  }).then((res) => res.json());
  
};

const patch = async (path: string, body: ICreateVehicleDto): Promise<any> => {

  const myHeaders = new Headers({
    "Content-Type": "application/json"
  });
  return fetch(endpoint(path), {
    method: "PATCH",
    headers: myHeaders,
    body: JSON.stringify(body)
  }).then((res) => res.json());
  
};

const toDelete = async (path: string, id: number): Promise<any> => {
  return fetch(endpoint(path + id), {
    method: 'DELETE',
  }).then((res) => res.json());
};

const toFavorite = async (path: string, id: number, is_favorite: boolean): Promise<any> => {
  return fetch(endpoint(path + id),
    {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify({
        is_favorite: is_favorite,
      }),
    })
    .then((res) => res.json());

}

export const getVehicles = async (): Promise<IVehicle[]> => {
  return get("/api/vehicles");
};

export const filterVehicles = async (params: string): Promise<IVehicle[]> => {
  return get("/api/vehicles/filter/" + params);
};

  export const filterVehiclesByParams = async (brand: string, color:string, year:number, minPrice:number, maxPrice:number ): Promise<IVehicle[]> => {
  const makeUrl = "/api/vehicles/filter/" + brand+"/"+color+"/"+year+"/"+minPrice+"/"+maxPrice+"/*"

  console.log(makeUrl)
    return get(makeUrl);
};


export const postVehicles = async (body: ICreateVehicleDto): Promise<IVehicle> => {
  return post("/api/vehicles", body);
};

export const updateVehicles = async (body: ICreateVehicleDto, id: number): Promise<IVehicle> => {
  return patch("/api/vehicles/" + id, body);
};

export const deleteVehicles = async (id: number): Promise<number> => {
  //console.log("/api/vehicles/"+id)
  return toDelete("/api/vehicles/", id);
};

export const getVehiclesById = async (id: number): Promise<IVehicle> => {
  //console.log("/api/vehicles/"+id)
  return get("/api/vehicles/" + id);
};

export const favoriteVehicles = async (id: number, is_favorite: boolean): Promise<number> => {
  //console.log("/api/vehicles/"+id)
  return toFavorite("/api/vehicles/", id, is_favorite);
};
