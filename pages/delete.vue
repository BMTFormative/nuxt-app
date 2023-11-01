<!-- src/pages/delete.vue -->
<template>
    <div>
      <!-- ... form for user deletion -->
    </div>
  </template>
  
  <script setup>
  import { useUserStore } from '~/store/userStore';
  
  const userStore = useUserStore();
  
  async function deleteUser(id) {
    // Call the API to delete the user
    await fetch(`http://localhost:8000/api/todos/${id}`, {
      method: 'DELETE',
    });
    userStore.deleteUser(id);
  }
  </script>
  