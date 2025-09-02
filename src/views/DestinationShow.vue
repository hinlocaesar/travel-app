<template>
  <div>
    <section v-if="destination" class="destination">
      <h1>{{ destination.name }}</h1>
      <GoBack />
      <div class="destination-details">
        <img :src="getImageUrl(destination.image)" :alt="destination.name" />
        <p>{{ destination.description }}</p>
      </div>
    </section>

    <section class="experiences" v-if="destination">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{ name: 'experience.show', params: { experienceSlug: experience.slug } }"
        >
          <ExperienceCard :experience="experience" />
        </router-link>
      </div>
      <router-view />
    </section>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'
import GoBack from '@/components/Goback.vue'

export default {
  components: { ExperienceCard, GoBack },
  props: {
    id: { type: Number, required: true },
  },
  computed: {
    destination() {
      return sourceData.destinations.find((destination) => destination.id === this.id)
    },
  },
  methods: {
    getImageUrl(file) {
      return `${import.meta.env.BASE_URL}images/${file}`
    },
  },
}
</script>
