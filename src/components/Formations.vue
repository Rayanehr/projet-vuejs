<template>


    <body> 
        
        <ul>
            <div class="row">

    <div class="col-md-4" v-for="formation in formations">
                <div class="articles-container">
                    <div class="article">
                        <img :src="`../../public/image/formation.jpg`">
                         <h2>{{ formation.nom }}</h2>
                        <p>{{ formation.description }}</p>
                        <p>{{ new Date(formation.annee).toLocaleDateString() }}</p>
                    </div>
                </div>
            </div>

</div>
</ul>
    </body>
   
</template>
<script >
import { onMounted, reactive } from 'vue';
import axios from 'axios';
import Base from './Base.vue' 
import { date } from 'vue-date-fns';

export default {
data() {
return {
    formations: [],
  erreur: null
};
},
mounted() {
const url = 'http://127.0.0.1:8000/api/formations';


axios.get(url)
  .then(response => {
    const membres = response.data['hydra:member'];
    this.formations = membres;
    
    
  })
  .catch(error => {
    this.erreur = error;
  });
}, 
};

</script>

<style>
</style>