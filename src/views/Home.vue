<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-10">
          <ul class="list-group">
            <li v-for="user in $store.state.usersDB" :key="user.i" class="list-group-item d-flex">
              <div class="col-8">
                <ul class="list-group">
                  <li class="list-group-item">{{ user.name }}</li>
                  <li class="list-group-item">{{ user.lastName }}</li>
                  <li class="list-group-item">{{ user.email }}</li>
                </ul>
              </div>
              <span class="col-4 align-middle">
                <button class="btn btn-danger" @click="deleteUser(user.id)"> Delete </button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import usersCollection from '../firebase'
import {getDocs} from 'firebase/firestore'
import { doc, deleteDoc } from "firebase/firestore";
import {mapMutations} from 'vuex'
export default {
  name: "Home",
  components:{},
  data() {
      return {
          users:[]
      }
  },
  methods: {
    async deleteUser(id){
      let userRef = doc(usersCollection, id);
      await deleteDoc(userRef)
      alert ("El usuario ha sido eleminado")
      this.$router.go()
    },

    ...mapMutations(['ADD_USERS']),
      async fetchUsers(){
        let usersSnapShot = await getDocs(usersCollection)
        let users = []
        usersSnapShot.forEach(user =>{
          let userData = user.data()
          userData.id = user.id
          users.push(userData)
        })
        this.$store.commit('ADD_USERS', users)
      }, 
  },
  created() {
    this.fetchUsers()
  },
}
</script>
