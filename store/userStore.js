// src/store/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: [],
  }),
  actions: {
    setUsers(users) {
      this.users = users;
    },
    addUser(user) {
      this.users.push(user);
    },
    updateUser(id, updatedUser) {
      this.users = this.users.map(user => (user.id === id ? updatedUser : user));
    },
    deleteUser(id) {
      this.users = this.users.filter(user => user.id !== id);
    },
  },
});
