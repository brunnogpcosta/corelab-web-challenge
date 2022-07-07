import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import App from './App';


createServer({
  models: {
    vehicles: Model
  },

  seeds(server){
    server.db.loadData({
      vehicles:
      [
        {
          id: 1,
          name: 'Sandero',
          brand: 'Renault',
          description: 'Carro importado',
          plate: 'xxxx-123',
          isFavorite: 'false',
          year: 2021,
          color: 'Red',
          price: '20000.00',
          createdAt: Date
        },
        {
          id: 2,
          name: 'Sandero',
          brand: 'Renault',
          description: 'Carro importado',
          plate: 'xxxx-123',
          isFavorite: 'false',
          year: 2021,
          color: 'Blue',
          price: '20000.00',
          createdAt: Date
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/vehicles', () => {
      return this.schema.all('vehicles')
    })


    this.post('/vehicles', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
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

