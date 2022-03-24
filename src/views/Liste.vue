<template >
    <div>
            <h1>Tableau loyers {{moisCours }}  {{anneeCours}}</h1>
            <button @click="updMonth">Ajout</button>
       <table>
            <tr>
                <th>N°</th>
                <th>Bloc</th>
                <th>Nom Logement</th>
                <th>Nom du locataire</th>
                <th>Px mensuel du logement-mois à payer</th>
                <th>cumul impayés au mois de novembre 2021</th>
                <th>montant payé</th>
                <th>reste à payé</th>
                <th>Mois</th>
                <th>Solde impayé</th>
            </tr>
              
            <tr >
                <td>Numéro du locataire</td>
                <td><input type="text" v-model="test"  placeholder="Test"></td>
                <td> 
                    <select v-model="bloc" name="cars" id="cars">
                        <option value="">--Choisir le Bloc--</option>
                        <option >Milieu</option>
                        <option >Haut</option>
                        <option >Bas</option>
                        <option >Divers</option>
                        <option>Commerciaux</option>
                    </select>
                </td>
                <td> <input type="text" v-model="nom"  placeholder="Nom locataire"></td>
                <td> <input type="text" v-model="logement"  placeholder="Nom logement"></td>
                <td> <input type="text" v-model="px_mensuel"  placeholder=" Px mensuel du logement-mois à payer"></td>
                <td> <input type="text" v-model="cumul_impaye"  placeholder=" cumul impayés du mois précédent"></td>
                <td> <input type="text" v-model="mt_paye" placeholder=" montant payé	"></td>
                <td> {{reste_payer}}</td>
                <td> <input type="text" v-model="solde_impaye"  placeholder="Solde à payer"></td>
                <td> <input type="text" v-model="paiementDt"  placeholder="Date de paiement"></td>
                <td> {{moisCours}}</td>
                <td> {{anneeCours}}</td>
                <td><button @click="ajout">Ajout Locataire</button></td>
            </tr>
      
            <tr>
            <th>Bloc Haut</th>
            </tr>
            <tr :key="index" v-for="(loc,index) in haut">
                <td> {{loc.id}}</td>
                <td> {{loc.logement}}</td>
                <td> <input type="text"  v-model="loc.nom"  ></td>
                <td> <input type="text"  v-model="loc.px_mensuel"></td>
                <td> <input type="text"  v-model="loc.cumul_impaye"></td>
                <td> <input type="text"  v-model="loc.mt_paye"></td>
                <td> <input type="text"  v-model="loc.paiementDt"></td>
                <td> <input type="text"  v-model="loc.solde_impaye"></td>
                <td><button  @click="update(loc.id)">Modifier</button></td>
                <td><button @click="del(loc.id)">Supprimer</button></td>
            </tr>

            <tr>
            <th>Bloc Bas</th>
            </tr>
            <tr :key="index" v-for="(loc,index) in bas">
                <td> {{loc.id}}</td>
                <td> {{loc.logement}}</td>
                <td> <input type="text"  v-model="loc.nom"></td>
                <td> <input type="text"  v-model="loc.px_mensuel"></td>
                <td> <input type="text"  v-model="loc.cumul_impaye"></td>
                <td> <input type="text"  v-model="loc.mt_paye"></td>
                <td> <input type="text"  v-model="loc.paiementDt"></td>
                <td> <input type="text"  v-model="loc.solde_impaye"></td>
                <td><button  @click="update(loc.id)">Modifier</button></td>
                <td><button @click="del(loc.id)">Supprimer</button></td>
            </tr>
            <tr>
            <th>Bloc Commerciaux</th>
            </tr>
            <tr :key="index" v-for="(loc,index) in com">
                <td> {{loc.id}}</td>
                <td> {{loc.logement}}</td>
                <td> <input type="text"  v-model="loc.nom"></td>
                <td> <input type="text"  v-model="loc.px_mensuel"></td>
                <td> <input type="text"  v-model="loc.cumul_impaye"></td>
                <td> <input type="text"  v-model="loc.mt_paye"></td>
                <td> <input type="text"  v-model="loc.paiementDt"></td>
                <td> <input type="text"  v-model="loc.solde_impaye"></td>
                <td><button  @click="update(loc.id)">Modifier</button></td>
                <td><button @click="del(loc.id)">Supprimer</button></td>
            </tr>
            <tr>
            <th>Bloc du Milieu</th>
            </tr>
            <tr :key="index" v-for="(loc,index) in milieu">
                <td> {{loc.id}}</td>
                <td> {{loc.id_logement}}</td>
                <td> <input type="text"  v-model="loc.nom"></td>
                <td> <input type="text"  v-model="loc.px_mensuel"></td>
                <td> <input type="text"  v-model="loc.cumul_impaye"></td>
                <td> <input type="text"  v-model="loc.mt_paye"></td>
                <td> <input type="text"  v-model="loc.paiementDt"></td>
                <td> <input type="text"  v-model="loc.solde_impaye"></td>
                <td><button  @click="update(loc.id)">Modifier</button></td>
                <td><button @click="del(loc.id)">Supprimer</button></td>
            </tr>
            <tr>
            <th>Bloc Divers</th>
            </tr>
            <tr :key="index" v-for="(loc,index) in divers">
                <td> {{loc.id}}</td>
                <td> {{loc.id_logement}}</td>
                <td> <input type="text"  v-model="loc.nom"></td>
                <td> <input type="text"  v-model="loc.px_mensuel"></td>
                <td> <input type="text"  v-model="loc.cumul_impaye"></td>
                <td> <input type="text"  v-model="loc.mt_paye"></td>
                <td> <input type="text"  v-model="loc.paiementDt"></td>
                <td> <input type="text"  v-model="loc.solde_impaye"></td>
                <td><button  @click="update(loc.id)">Modifier</button></td>
                <td><button @click="del(loc.id)">Supprimer</button></td>
            </tr>



        </table> 
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
            mois:['janvier','février','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','décembre'],
            moisAdd:'',
            paiementDt:'',
            cal:'',
            moisCours:'',
            anneeCours:'',
            bloc:'',
            test:''
        }

    },
    
    mounted(){
        axios
        .get('http://localhost:3000/api/calendrier/')
        .then(response => {this.cal = response.data;
        this.moisCours=this.cal[this.cal.length-1].mois;
        this.anneeCours=this.cal[this.cal.length-1].annee
        });



        axios
        .get('http://localhost:3000/api/locataire/')
        .then(response => {this.loc = response.data;
/*         console.log(this.loc)
 */        });


        axios
        .get('http://localhost:3000/api/locataire/')
        .then(response => {this.log = response.data;
        
        for(let i=0;i<this.log.length; i++){
           
            if(this.log[i].bloc=="haut"){
/*                 console.log(this.log[i])
 */                this.haut.push(this.log[i]);
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
      
       })
 
        
    },
    methods:{
        updMonth(){
            var optionAxios = {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }                
            let upd =""
            console.log(this.anneeCours)
            let upd_all=""
            let moisBd=""
            let anneeBd=this.anneeCours          

            for(let i=0; i<this.mois.length;i++){

                if( this.moisCours=='décembre'){
                    moisBd='janvier'
                    anneeBd=(this.anneeCours+1)
                    console.log(moisBd)

                }     
              else if(this.moisCours==this.mois[i]){
                    
                        moisBd=this.mois[i+1]
                        console.log(moisBd)
                        console.log(anneeBd)
                     }
                }           
            for(let i=0;i<this.loc.length;i++){
                upd=this.loc[i]
                upd_all={
                    logement:upd.logement,
                    bloc:upd.bloc,
                    nom:upd.nom,
                    factureDt:moisBd,
                    annee:anneeBd,                    
                    solde_impaye:Number(upd.solde_impaye),
                    cumul_impaye:Number(upd.cumul_impaye),
                    paiementDt:upd.paiementDt,
                    mt_paye:Number(upd.mt_paye),
                    px_mensuel:Number(upd.px_mensuel),
            }
            axios.post( 
                "http://localhost:3000/api/locataire/post", upd_all,optionAxios)
                .then(response => this.msg = response, console.log(this.msg))
                .catch(function (error) {
                    console.log(error);
                });
           }
            console.log(upd_all)


        

             const ajout_cal={
                annee:anneeBd,
                mois:moisBd
            }
            
            axios.post( 
                "http://localhost:3000/api/calendrier/post", ajout_cal,optionAxios)
                .then(response => this.msg = response, console.log(this.msg))
                .catch(function (error) {
                    console.log(error);
                });
               this.$router.go()
        },

        ajout(){
            let mt=Number(this.mt_paye);
            let cm=Number(this.cumul_impaye)
/*             console.log( Number(this.mt_paye))
 */            this.reste_payer=cm-mt
/*             console.log(cm-mt)
 */            const ajout_loc={
                logement:this.logement,
                bloc:this.bloc,
                nom:this.nom,
                solde_impaye:Number(this.solde_impaye),
                cumul_impaye:Number(this.cumul_impaye),
                factureDt:this.moisCours,
                annee:this.anneeCours,
                paiementDt:this.paiementDt,
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