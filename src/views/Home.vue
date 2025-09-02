<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
      >
        <h2>{{ destination.name }}</h2>
        <img
          :src="getImageUrl(destination.image)"
          :alt="destination.name"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  data() {
    return {
      destinations: sourceData.destinations
    }
  },
  methods: {
    getImageUrl(file) {
      return `${import.meta.env.BASE_URL}images/${file}`
    }
  }
}
</script>
