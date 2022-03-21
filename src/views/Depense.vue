<template>
    <div>
        <table>
            <tr>
                <th>N°</th>
                <th>Montant</th>
                <th>Date</th>
                <th>Désignation</th>
            </tr>
            <tr>
                <td>Numéro</td>
                <td><input type="text" v-model="montant" placeholder="Veuillez mettre le montant"></td>
                <td><input type="text" v-model="date" placeholder="Veuillez mettre la date"></td>
                <td><input type="text" v-model="designation" placeholder="Veuillez mettre la désignation"></td>
                <td><button @click="ajout">Ajout Dépense</button></td>
            </tr>
            <tr :key="index" v-for="(dep,index) in dep">
                <td>{{dep.id}} </td>
                <td>{{dep.montant}} </td>
                <td>{{dep.date}} </td>
                <td>{{dep.designation}} </td>
            </tr>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"Depense",
    data(){
        return{
            dep:'',
            date:'',
            designation:'',
            montant:'',
            msg:''
        }
    },
    mounted(){
        axios
        .get('http://localhost:3000/api/depense/')
        .then(response => {this.dep = response.data;
        console.log(this.dep)
        });
    },
    methods: {

        ajout(){
        
        let ajout_dep={
            date:this.date,
            designation:this.designation,
            montant:this.montant
        }

        let optionAxios = {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }

            axios.post( 
                "http://localhost:3000/api/depense/post", ajout_dep,optionAxios)
                .then(response => this.msg = response, console.log(this.msg))
                .catch(function (error) {
                    console.log(error);
                });
            this.$router.go()    
        }
        
    },
}
</script>