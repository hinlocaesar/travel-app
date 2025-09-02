<template>
  <div id="nav">
    <AppLink id="logo" to="/"> Travel App</AppLink>

    <!-- Hamburger menu button for mobile -->
    <button class="hamburger-menu" @click="toggleMobileMenu" :class="{ active: isMobileMenuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Desktop navigation -->
    <div class="desktop-nav">
      <AppLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
      >
        {{ destination.name }}
      </AppLink>
      <AppLink :to="{ name: 'protected' }">Dashboard</AppLink>
      <AppLink to="https://vueschool.io">Vue School</AppLink>
    </div>

    <!-- Mobile modal navigation -->
    <div v-if="isMobileMenuOpen" class="mobile-nav-modal" @click="closeMobileMenu">
      <div class="mobile-nav-content" @click.stop>
        <button class="close-btn" @click="closeMobileMenu">&times;</button>
        <nav class="mobile-nav-links">
          <AppLink
            v-for="destination in destinations"
            :key="destination.id"
            :to="{
              name: 'destination.show',
              params: { id: destination.id, slug: destination.slug },
            }"
            @click="closeMobileMenu"
          >
            {{ destination.name }}
          </AppLink>
          <AppLink :to="{ name: 'protected' }" @click="closeMobileMenu">Dashboard</AppLink>
          <AppLink to="https://vueschool.io" @click="closeMobileMenu">Vue School</AppLink>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import sourceData from '@/data.json'
export default {
  data() {
    return {
      destinations: sourceData.destinations,
      isMobileMenuOpen: false,
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    },
  },
  mounted() {
    // Close mobile menu when clicking outside or on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobileMenu()
      }
    })
  },
}
</script>
