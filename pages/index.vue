<!-- src/pages/index.vue -->
<template>
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }} - 
          
          <nuxt-link :to="`/edit/${user.id}`"> Edit </nuxt-link>
          <button @click="deleteUser(user.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useUserStore } from '~/store/userStore';
  import { useRouter } from 'vue-router';
  
  const userStore = useUserStore();
  const users = ref([]);
  const router = useRouter();
  
  onMounted(async () => {
    const response = await fetch('http://localhost:3000/supplier');
    console.log(response)
    const data = await response.json();
    console.log(data)
    userStore.setUsers(data);
    users.value = userStore.users;
  });
  
  const editUser = (id) => {
    router.push(`/edit/${id}`);
  };
  
  const deleteUser = async (id) => {
    await fetch(` http://localhost:3000/supplier/${id}`, {
      method: 'DELETE',
    });
    userStore.deleteUser(id);
  };
  </script>
  