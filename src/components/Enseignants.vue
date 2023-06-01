<template>


          <body> 
     <ul v-for="enseignant in enseignants">
        <section class="teacher-info">
            <img :src="`../../public/image/${enseignant.image}`">
        <h2>Informations de l'enseignant : </h2>
        <dl>
            <dt class="label">Nom :</dt>
            <dd class="value">{{ enseignant.nom }}</dd>

            <dt class="label">Prénom :</dt>
            <dd class="value">{{ enseignant.prenom }}</dd>

            <dt class="label">Cours :</dt>
            <dd class="value">{{ enseignant.cours }}</dd>
        </dl>
    </section>
        </ul>
    
      
          </body>
         
    </template>
    <script >
    import { onMounted, reactive } from 'vue';
    import axios from 'axios';
    import Base from './Base.vue' 
  
  export default {
    data() {
      return {
          enseignants: [],
        erreur: null
      };
    },
    mounted() {
      const url = 'http://127.0.0.1:8000/api/enseignants';
  
      axios.get(url)
        .then(response => {
          const membres = response.data['hydra:member'];
          this.enseignants = membres;
        })
        .catch(error => {
          this.erreur = error;
        });
    }, 
    
  };

  
    </script>
    
    <style>
    </style>