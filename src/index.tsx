import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer} from 'miragejs'
import App from './App';




createServer({
  routes(){
    this.namespace ='api';

    this.get('/vehicles',()=>{
      return[
        {
          id:1,
          nome: 'Sandero Stepway',
          marca: '2018',
          cor:'Preto',
          ano: '2022',
          placa:'KJB-2022',
          favorite: false,
          createdAt: new Date()
        },
        {
          id:1,
          nome: 'Sandero Stepway',
          marca: '2018',
          cor:'Preto',
          ano: '2022',
          placa:'KJB-2022',
          favorite: false,
          createdAt: new Date()
        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

