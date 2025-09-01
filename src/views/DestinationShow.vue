<template>
    <h1>{{destination.name}}</h1>
    <Goback/>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{destination.description}}</p>
    </div>
        <section class="experiences">
          <h2>Top experience in {{ destination.name }}</h2>
          <div class="cards">
            <router-link
                  v-for="experience in destination.experiences"
                  :key="experience.slug"
                  :to="{ name: 'experience.show', params: {experienceSlug: experience.slug}}"
            >
                <ExperienceCard
                  :experience="experience"
                  />
              </router-link>
          </div>
          <router-view/>
      </section>
</template>
<script>
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'
import Goback from '@/components/Goback.vue'
export default {
  components: {ExperienceCard, Goback},
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed:{
    destination(){
      return sourceData.destinations.find(destination => destination.id === this.id)
    }
  }
}
</script>
