<template>
  <div>
      <form class="d-flex justify-content-center" @submit.prevent="addUser()">
            <div class="col-md-6">
                <div class="mb-3">
                    <label class="form-label">Nombre:</label>
                    <input type="text" class="form-control" v-model="name">
                </div>
                <div class="mb-3">
                    <label class="form-label">Apellido:</label>
                    <input type="text" class="form-control" v-model="lastName">
                </div>
                <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input type="email" class="form-control" v-model="email">
                </div>
                
                <button type="submit" class="btn btn-primary">Añadir usuario</button>
            </div>
        </form>
  </div>
</template>

<script>
import { addDoc } from '@firebase/firestore'
import usersCollection from '../firebase'
export default {
  data() {
    return {
      name: "",
      lastName: "",
      email: "",
    }
  },
  methods: {
    async addUser(){
      await addDoc(usersCollection, this.$data)
      alert('El usuario ha sido agregado')
      this.$router.push("/")
    }
  },
}
</script>