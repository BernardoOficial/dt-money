import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Freelance de website',
					type: 'deposit',
					category: 'Trabalho',
					amount: 6000,
					createdAt: new Date('2021-02-12 09:00:00')
				},
				{
					id: 2,
					title: 'Aluguel',
					type: 'withdrawal',
					category: 'Casa',
					amount: 1200,
					createdAt: new Date('2021-02-14 19:00:00')
				}
			]
		})
	},

	routes() {
		this.namespace = 'api';

		this.get('/transactions', () => {
			return this.schema.all('transaction');
		})

		this.post('/transactions', (schema, request) => {
			const newTransaction = JSON.parse(request.requestBody);
			schema.create('transaction', newTransaction);

			return newTransaction;
		})

	}
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);