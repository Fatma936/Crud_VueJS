<template>
  <div class="about">
     <form>
        <div class="form-group">
            <label for="formGroupExampleInput">Your Name</label>
            <input type="text" class="form-control" id="formGroupExampleInput" v-model="Name" placeholder="name">
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2">Your Mail</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" v-model="Email"  placeholder="mail">
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2">Your Mail</label>
            <input type="password" class="form-control" id="formGroupExampleInput2" v-model="Password" placeholder="password">
                   </div>
            <button type="submit" @click="addUser()" class="btn btn-success" id="submit">Add</button>

     </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Adduser",
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
     async getUser(){
        let res= await axios.get( "http://localhost:3001/users" )
        this.users=res.data;
      },

    async addUser() {
      try {
        const res = await axios.post("http://localhost:3001/users", { name: this.Name, email: this.Email  , password: this.Password});

        this.users = [...this.users, res.data];
        window.location.href='/listusr';
        alert("Your account details have been saved.");
        
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>

