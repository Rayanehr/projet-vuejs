import { defineStore } from 'pinia'

export const useDefaultStore = defineStore({
  id: 'default',
  state: () => ({
    
  }),
  getters: {
    
  },
  actions: {
    
  }
})
import axios from 'axios';

// Dans une méthode ou une fonction
axios.get('http://127.0.0.1:8000/api')
  .then(response => {
    // Traitement des données récupérées
    const data = response.data;
    // Faites quelque chose avec les données, par exemple :
    console.log(data);
  })
  .catch(error => {
    // Gestion des erreurs
    console.error(error);
  });
