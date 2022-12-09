<script setup lang="ts">
</script>

<template>
    <!-- Button trigger modal -->


    <!-- AddModal -->
    <section class="container-fluid p-4" v-on:load="getusr()">
        <div class="row dark">
            <div class="col-md-12">
                <div class="container-fluid p-4">
                    <form class="form-floating" method="POST">

                        <div class="modal-body">
                            <label class="p-2">Name</label>
                            <input type="text" class="form-control" name="name" id="nom" placeholder="user" v-model="name">

                            <label class="p-2">Email</label>
                            <input type="text" class="form-control" name="email" id="prenom" placeholder="user@gmail.com" v-model="email" >
                            
                            <label class="p-2">Password</label>
                            <input type="text" class="form-control" name="password" id="prenom" placeholder="*****" v-model="password" >
                            
                            <div class="modal-footer m-2">
                                <button type="button" class="btn btn-danger m-2" ata-bs-dismiss="modal" >cancel</button>
                                <button type="submit" v-on:click="updateUsr(name,email,password)" class="btn btn-success" id="submit">Update </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>


</template>
<script>
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required,  minLength } from "@vuelidate/validators";
console.log();
export default {
    name: 'update',
    data() {
        return {
            user: [{
                "name": "",
                "email": "",
                "password":""
            }
            ], 
            id: this.$route.params.id,
            v$: useValidate(),
            name: "",
            email: "",
            password:""
            
        };
    },
    validattion() {
        return {
            name: { required, minLength: minLength(5) },
            email: { required, minLength: minLength(5) },
            password: { required, minLength: minLength(5) },

        };
    },
    async mounted() {
        let res = await axios.get('http://localhost:3001/users');
        this.users = res.data;
    },
    methods: {
        async updateUsr( name, email, password) {

           
            let rep = await axios.put('http://localhost:3001/users/' + this.id, { name: name, email: email, password:password });
            window.location.href = "/listusr";
            alert("Your account has been updated");
        },
        async getusr() {
            let res = await axios.get('http://localhost:3001/users/' + this.id);
            this.users = res.data;
           
        },


    },
   
};
</script>