<!-- src/pages/edit/_id.vue -->
<template>
    <div>
      <p>edit </p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useUserStore } from '~/store/userStore';
  import { useRoute } from 'vue-router';
  
  const userStore = useUserStore();

  console.log(userStore)
  const route = useRoute();
  console.log(route)
  const userId = parseInt(route.params.id);
  console.log(userId)
  const userToEdit = ref({});
  
  onMounted(async () => {
    // Fetch the user data for editing here
    const response = await fetch(`http://localhost:8000/api/todos/${userId}`);
    console.log(response)
    const data = await response.json();
    userToEdit.value = data;
  });
  
  // Function to update the user
  const updateUser = async (updatedUser) => {
    await fetch(`http://localhost:8000/api/todos/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    });
    userStore.updateUser(userId, updatedUser);
  };
  </script>
  