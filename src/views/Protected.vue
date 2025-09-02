<template>
  <div>
    <h1>Greetings, {{ username }}</h1>
    <button @click="logout">Logout</button>
    <h1>Protected Page</h1>
    <router-link :to="{ name: 'invoices' }">
      <button>Invoices</button>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: window.user,
    }
  },
  methods: {
    logout() {
      window.user = null
      this.$router.push({ name: 'Home' })
    },
  },
}
</script>
