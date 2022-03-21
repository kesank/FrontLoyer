<template>
  <nav  v-show="this.show ==1">
    <router-link to="/tableau_loyer" >Tableau Loyer</router-link> |
    <router-link to="/situation">Situation</router-link> |
    <router-link to="/récapitulatif">Récapitulatif</router-link> |
    <router-link to="/depense">Depense</router-link> |<!-- 
    <router-link to="/logement">Logement</router-link> | -->
    <button @click="logout" to="/signin">Déconnexion</button>
  </nav>
  <router-view/>
</template>
<script>
export default {
  name:"App",
  data() {
    return {
      token:"",
      show:""
    }
  },
  created() {
    if(this.token !=null){
      
      this.token =JSON.parse(localStorage.getItem("token"));
      this.show=1
/*       console.log(this.token)
      console.log("Le token:::::"+this.token.token) */
    }
    else{
      this.show=0
      this.$router.push('login')
    }

  },
  methods: {
    logout(){
      this.show=0
      localStorage.clear()
      this.$router.push('login')
    }
  },
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
    td,
    th {
        border: 1px solid rgb(190, 190, 190);
        padding: 10px;
    }
    
    table {
        border-collapse: collapse;
        border: 2px solid rgb(200, 200, 200);
        letter-spacing: 1px;
        font-family: sans-serif;
        font-size: .8rem;
    }
</style>
