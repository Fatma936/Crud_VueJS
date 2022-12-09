<template>
  <div class="about">
       <table class="table table-striped">
           <thead>
             <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
           </tr>
        </thead>
        <tbody>
        <tr v-for="user of users" v-bind:key="user.id">
             <th scope="row">{{ user.id }}</th>
             <td>{{ user.name }}</td>
             <td>{{ user.email }}</td>
             <td>{{ user.password }}</td>
             <td><button type="button" class="btn btn-danger" v-on:click="remUser(user.id)">Delete</button></td>
             <td><button type="button" class="btn btn-success"  @click="goToHome(user.id)">Edit</button></td>
            </tr>
        </tbody>
     </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UsersList",
  data() {
    return {
      users: [{
            "id": "",
            "name": "",
            "email": "",
            "password":"",
            }],

            "id": "",
            "name": "",
            "email": "",
            "password": "",
    };
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:3001/users");

      this.users = res.data;
    } catch (e) {
      console.error(e);
    }
  },
 
  methods: {
    goToHome(id){
      this.$router.push('/update/'+id); 
    },

     async getUser(){
        let res= await axios.get( "http://localhost:3001/users" )
        this.users=res.data;
      },

     async remUser(id) {
            axios.delete('http://localhost:3001/users/' + id);
            alert("Are you sure you want to delete this account?.");

            window.location.href='/listusr';
        }
  }
};
</script>