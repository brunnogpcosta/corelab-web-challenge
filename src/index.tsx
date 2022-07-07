import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import App from './App';


/*createServer({
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
          color: '#eb4d4d',
          price: '20000.00',
          createdAt: new Date()
        },
        {
          id: 2,
          name: 'Sandero',
          brand: 'Renault',
          description: 'Carro importado',
          plate: 'xxxx-123',
          isFavorite: 'false',
          year: 2021,
          color: '#6375f8',
          price: '20000.00',
          createdAt:  new Date()
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

      return schema.create('vehicles', data)
    })

    this.delete("/vehicles/:id", (schema, request) => {
      let id = request.params.id;
    
      //return schema.find('vehicles', id)

      return this.schema.all('vehicles')
    })

  }
})
*/

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

