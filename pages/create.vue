<!-- src/pages/create.vue -->
<template>
    <div>
      <!-- ... form for user creation -->
    </div>
  </template>
  
  <script setup>
  import { useUserStore } from '~/store/userStore';
  
  const userStore = useUserStore();
  
  async function createUser(user) {
    // Call the API to create the user
    const response = await fetch('http://localhost:8000/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    userStore.addUser(data);
  }
  </script>
  