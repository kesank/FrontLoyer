<template >
    <div>
            <h1>Tableau loyers</h1>
            <button>Changement Mois</button>
            <span></span>
<!--         <table>
            <tr>
                <th>N°</th>
                <th>Type du local</th>
                <th>Nom du locataire</th>
                <th>Px mensuel du logement-mois à payer</th>
                <th>cumul impayés au mois de novembre 2021</th>
                <th>montant payé</th>
                <th>reste à payé</th>
                <th>Solde impayé</th>
            </tr>
            <tr >
                <td>Numéro du locataire</td>
                <td> 
                    <select v-model="logement" name="cars" id="cars">
                    <optgroup  label="Milieu">
                        <option :key="index" v-for="(milieu, index) in milieu"  :value="milieu.id">{{milieu.nom}}</option>
                    </optgroup>
                    <optgroup label="Haut" >
                        <option :key="index" v-for="(haut, index) in haut" :value="haut.id">{{haut.nom}}</option>
                    </optgroup>
                    <optgroup label="Bas" >
                        <option :key="index" v-for="(bas, index) in bas" :value="bas.id">{{bas.nom}}</option>
                    </optgroup>
                    <optgroup label="Divers" >
                        <option :key="index" v-for="(divers, index) in divers" :value="divers.id">{{divers.nom}}</option>
                    </optgroup>
                    <optgroup label="Commerciaux" >
                        <option :key="index" v-for="(commerciaux, index) in com" :value="commerciaux.id">{{commerciaux.nom}}</option>
                    </optgroup>
                    </select>
                </td>
                <td> <input type="text" v-model="nom"  placeholder="Nom locataire"></td>
                <td> <input type="text" v-model="px_mensuel"  placeholder=" Px mensuel du logement-mois à payer"></td>
                <td> <input type="text" v-model="cumul_impaye"  placeholder=" cumul impayés du mois précédent"></td>
                <td> <input type="text" v-model="mt_paye" placeholder=" montant payé	"></td>
                <td> {{reste_payer}}</td>
                <td> <input type="text" v-model="solde_impaye"  placeholder="Solde à payer"></td>
                <td><button @click="ajout">Ajout Locataire</button></td>
            </tr>
            <tr>
            <th>Bloc Haut</th>
            </tr>
            <tr :key="index" v-for="(loc,index) in haut_loc">
                <td> {{loc.id}}</td>
                <td> {{loc.id_logement}}</td>
                <td> <input type="text"  v-model="loc.nom"></td>
                <td> <input type="text"  v-model="loc.px_mensuel"></td>
                <td> <input type="text"  v-model="loc.cumul_impaye"></td>
                <td> <input type="text"  v-model="loc.mt_paye"></td>
                <td> <input type="text"  v-model="loc.reste_payer"></td>
                <td> <input type="text"  v-model="loc.solde_impaye"></td>
                <td><button  @click="update(loc.id)">Modifier</button></td>
                <td><button @click="del(loc.id)">Supprimer</button></td>
            </tr>

            <tr>
            <th>Bloc Bas</th>
            </tr>
            <tr :key="index" v-for="(loc,index) in bas_loc">
                <td> {{loc.id}}</td>
                <td> {{loc.id_logement}}</td>
                <td> <input type="text"  v-model="loc.nom"></td>
                <td> <input type="text"  v-model="loc.px_mensuel"></td>
                <td> <input type="text"  v-model="loc.cumul_impaye"></td>
                <td> <input type="text"  v-model="loc.mt_paye"></td>
                <td> <input type="text"  v-model="loc.reste_payer"></td>
                <td> <input type="text"  v-model="loc.solde_impaye"></td>
                <td><button  @click="update(loc.id)">Modifier</button></td>
                <td><button @click="del(loc.id)">Supprimer</button></td>
            </tr>
            <tr>
            <th>Bloc Commerciaux</th>
            </tr>
            <tr :key="index" v-for="(loc,index) in com_loc">
                <td> {{loc.id}}</td>
                <td> {{loc.id_logement}}</td>
                <td> <input type="text"  v-model="loc.nom"></td>
                <td> <input type="text"  v-model="loc.px_mensuel"></td>
                <td> <input type="text"  v-model="loc.cumul_impaye"></td>
                <td> <input type="text"  v-model="loc.mt_paye"></td>
                <td> <input type="text"  v-model="loc.reste_payer"></td>
                <td> <input type="text"  v-model="loc.solde_impaye"></td>
                <td><button  @click="update(loc.id)">Modifier</button></td>
                <td><button @click="del(loc.id)">Supprimer</button></td>
            </tr>
            <tr>
            <th>Bloc du Milieu</th>
            </tr>
            <tr :key="index" v-for="(loc,index) in milieu_loc">
                <td> {{loc.id}}</td>
                <td> {{loc.id_logement}}</td>
                <td> <input type="text"  v-model="loc.nom"></td>
                <td> <input type="text"  v-model="loc.px_mensuel"></td>
                <td> <input type="text"  v-model="loc.cumul_impaye"></td>
                <td> <input type="text"  v-model="loc.mt_paye"></td>
                <td> <input type="text"  v-model="loc.reste_payer"></td>
                <td> <input type="text"  v-model="loc.solde_impaye"></td>
                <td><button  @click="update(loc.id)">Modifier</button></td>
                <td><button @click="del(loc.id)">Supprimer</button></td>
            </tr>
            <tr>
            <th>Bloc Divers</th>
            </tr>
            <tr :key="index" v-for="(loc,index) in divers_loc">
                <td> {{loc.id}}</td>
                <td> {{loc.id_logement}}</td>
                <td> <input type="text"  v-model="loc.nom"></td>
                <td> <input type="text"  v-model="loc.px_mensuel"></td>
                <td> <input type="text"  v-model="loc.cumul_impaye"></td>
                <td> <input type="text"  v-model="loc.mt_paye"></td>
                <td> <input type="text"  v-model="loc.reste_payer"></td>
                <td> <input type="text"  v-model="loc.solde_impaye"></td>
                <td><button  @click="update(loc.id)">Modifier</button></td>
                <td><button @click="del(loc.id)">Supprimer</button></td>
            </tr>



        </table> -->
    </div>

</template>
<script>
import axios from 'axios'
export default {
    name:"Liste",
    data(){
        return{
            msg:"",
            loc:"",
            log:"",
            logement:"",
            solde_impaye:"",
            reste_payer:0,
            mt_paye:"",
            cumul_impaye:"",
            px_mensuel:"",
            nom:"",
            haut:[],
            bas:[],
            com:[],
            divers:[],
            milieu:[],
            haut_loc:[],
            bas_loc:[],
            com_loc:[],
            divers_loc:[],
            milieu_loc:[],
            mois:['janvier','février','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','décembre'],
            moisCours:''
        }

    },
    
    mounted(){
        axios
        .get('http://localhost:3000/api/calendrier/')
        .then(response => {this.moisCours = response.data;
        console.log(this.moisCours)
        });



        axios
        .get('http://localhost:3000/api/locataire/')
        .then(response => {this.loc = response.data;
/*         console.log(this.loc)
 */        });


        axios
        .get('http://localhost:3000/api/logement/')
        .then(response => {this.log = response.data;
        
        for(let i=0;i<this.log.length; i++){
/*            console.log(this.log[i])
 */            if(this.log[i].bloc=="haut"){
                this.haut.push(this.log[i]);
/*                 console.log("haut ::" + this.haut)
 */            }
            else if(this.log[i].bloc=="bas"){
                this.bas.push(this.log[i]);
/*                 console.log("bas ::" + this.bas)
 */            }
            else if(this.log[i].bloc=="commerciaux"){
                this.com.push(this.log[i]);
/*                 console.log("commerciaux ::" + this.commerciaux)
 */            }
            else if(this.log[i].bloc=="divers"){
                this.divers.push(this.log[i]);
/*                 console.log("divers ::" + this.divers)
 */            }
            else {
                this.milieu.push(this.log[i]);
/*                 console.log("milieu ::" + this.milieu)
 */            }
        }

    for(let i=0; i< this.divers.length;i++){

            for(let g=0; g<this.loc.length; g++){
                if(this.divers[i].id == this.loc[g].id_logement ){
/*                     console.log(this.divers[i].nom +' les noms '+ this.loc[g].nom)
 */                    const locataire = {
                        ...this.loc[g]
                    }
                    this.divers_loc.push(locataire)
/*                     this.divers_loc.push(this.loc[g])
 */                }
            }
        }
/*         console.log(this.divers_loc[0][0].nom)
 */        for(let i=0; i< this.haut.length;i++){

            for(let g=0; g<this.loc.length; g++){
                if(this.haut[i].id == this.loc[g].id_logement ){
                   const locataire = {
                        ...this.loc[g]
                    }
                    this.haut_loc.push(locataire)                  
/*                     this.haut_loc.push(this.loc[g])
 */                }
            }
        }
        console.log(this.haut_loc)
        for(let i=0; i< this.com.length;i++){

            for(let g=0; g<this.loc.length; g++){
                if(this.com[i].id == this.loc[g].id_logement ){
                   const locataire = {
                        ...this.loc[g]
                    }
                    this.com_loc.push(locataire)                   
                    /* this.com_loc.push(this.loc[g]) */
                }
            }
        }
/*         console.log(this.com_loc)
 */        for(let i=0; i< this.bas.length;i++){

            for(let g=0; g<this.loc.length; g++){
                if(this.bas[i].id == this.loc[g].id_logement ){
                   const locataire = {
                        ...this.loc[g]
                    }
                    this.bas_loc.push(locataire)
/*                     this.bas_loc.push(this.loc[g])
 */                }
            }
        }
/*         console.log(this.bas_loc)
 */        for(let i=0; i< this.milieu.length;i++){

            for(let g=0; g<this.loc.length; g++){
                if(this.milieu[i].id == this.loc[g].id_logement ){
                   const locataire = {
                        ...this.loc[g]
                    }
                    this.milieu_loc.push(locataire)
/*                     this.milieu_loc.push(this.loc[g])
 */                }
            }
        }
/*         console.log(this.milieu_loc)
 */        })
 
        
    },
    methods:{
        updMonth(){
            for(let i=0; i<this.mois.length;i++){
                if(this.mois[i]==this.moisCours){
                    this.mois[i+1]
                }
            }
        },

        ajout(){
            let mt=Number(this.mt_paye);
            let cm=Number(this.cumul_impaye)
/*             console.log( Number(this.mt_paye))
 */            this.reste_payer=cm-mt
/*             console.log(cm-mt)
 */            const ajout_loc={
                id_logement:this.logement,
                nom:this.nom,
                solde_impaye:Number(this.solde_impaye),
                cumul_impaye:Number(this.cumul_impaye),
                reste_payer:this.reste_payer,
                mt_paye:Number(this.mt_paye),
                px_mensuel:Number(this.px_mensuel),

            }
            console.log(ajout_loc)
                var optionAxios = {
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    }
                }
            axios.post( 
                "http://localhost:3000/api/locataire/post", ajout_loc,optionAxios)
                .then(response => this.msg = response, console.log(this.msg))
                .catch(function (error) {
                    console.log(error);
                });
                this.$router.go()
        },
        del(x){
            console.log(x)
            var optionAxios = {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
            axios.delete( 
                "http://localhost:3000/api/locataire/destroy/"+x,optionAxios)
                .then(response => this.msg = response, console.log(this.msg))
                .catch(function (error) {
                    console.log(error);
            });    
            this.$router.go()        
        },
        update(x){
            let loc_upd="";
            for(let i=0;i<this.loc.length;i++){
                if(this.loc[i].id==x){
                     loc_upd=this.loc[i];
/*                     console.log(this.loc[i])
 */                }
            }


            const upd_loc={
                nom:loc_upd.nom,
                solde_impaye:loc_upd.solde_impaye,
                cumul_impaye:loc_upd.cumul_impaye,
                reste_payer:Number(loc_upd.cumul_impaye-loc_upd.mt_paye),
                mt_paye:Number(loc_upd.mt_paye),
                px_mensuel:Number(loc_upd.px_mensuel),
            }
            var optionAxios = {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
            axios.put( 
                "http://localhost:3000/api/locataire/update/"+x, upd_loc,optionAxios)
                .then(response => this.msg = response, console.log(this.msg))
                .catch(function (error) {
                    console.log(error);
            });
            console.log(this.loc)
            console.log(upd_loc)
        }
 

    }
}
</script>
<style >

</style>