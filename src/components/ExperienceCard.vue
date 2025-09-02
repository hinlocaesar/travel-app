<template>
  <div class="card">
    <img :src="getImageUrl(experience.image)" :alt="experience.name" />
    <span class="card__test">
      {{ experience.name }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImageUrl(file) {
      return `${import.meta.env.BASE_URL}images/${file}`
    },
  },
}
</script>
