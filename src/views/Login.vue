<template>
    <div>
        
            <label for="email">Email</label>
            <input type="text" v-model="email" id="email" placeholder="Veuillez entrer email">
            <br>
            <label for="password">Mot de passe</label>
            <input type="password" v-model="password" id="password" placeholder="Veuillez entrer mot de passe">
            <br>
            <button    @click="signin" >Valider</button>
        
    </div>
</template>
<script>
import axios from "axios";
export default {
    name:"Login",
    data(){
        return{
            
            email:"",
            password:"",
            reg: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
            reg_all:/[a-zA-Z_0-9]/,
            tok:""
        }
    }, 
    methods: {
        signin(){
          const log = { email: this.email, password:this.password };
          
          var optionAxios = {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }
/*         console.log(this.email)
 */     if(this.email==null || this.password==null){
            console.log("erreur")
        }
        else{
                
                axios.post( 
                "http://localhost:3000/api/user/login", log,optionAxios)
                .then(response =>this.tok = response.data,
                localStorage.clear(),
                localStorage.setItem("token",JSON.stringify(this.tok)),
                console.log(log)
                )
                .catch(function (error) {
                    console.log(error);
                });
                 if(this.tok !=null && this.tok!=""){
                     
                
                    this.$router.push('tableau_loyer')
                }

        }


        }
    },

}
</script>