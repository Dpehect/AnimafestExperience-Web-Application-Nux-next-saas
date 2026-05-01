<script setup lang="ts">
const { internships } = useApi();
const { data: response, pending } = await useAsyncData('internships', () => internships.getAll());

const internshipList = computed(() => response.value?.data || []);
</script>

<template>
  <div :class="$style.home">
    <div :class="$style.sectionHeader">
      <div :class="$style.titleWrap">
        <span :class="$style.emoji">🌿</span>
        <h2 :class="$style.title">New Territories</h2>
      </div>
      <AtomsAppButton variant="ghost" size="sm">See All Packs</AtomsAppButton>
    </div>

    <div v-if="pending" :class="$style.grid">
      <div v-for="i in 3" :key="i" :class="$style.skeleton"></div>
    </div>
    
    <div v-else :class="$style.grid">
      <MoleculesInternshipCard 
        v-for="internship in internshipList" 
        :key="internship.id" 
        :internship="internship" 
      />
    </div>

    <!-- Extra Animal Interactive Section -->
    <section :class="$style.discovery">
      <div :class="$style.discovery__card">
        <div :class="$style.discovery__content">
          <h3 :class="$style.discovery__title">The Wildest Jobs Are Here.</h3>
          <p :class="$style.discovery__text">Join the 10,000+ explorers already hunting for their dream habitat.</p>
          <AtomsAppButton variant="primary">Claim Your Territory</AtomsAppButton>
        </div>
        <div :class="$style.discovery__graphic">
          <div :class="$style.circle">🦜</div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" module>
.home {
  padding-top: 4rem;
}

.sectionHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.titleWrap {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.emoji {
  font-size: 2rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: -0.03em;
}

.grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.skeleton {
  height: 400px;
  background: var(--color-surface);
  border-radius: 32px;
  animation: pulse 2s infinite;
}

.discovery {
  margin-top: 6rem;
  
  &__card {
    background: linear-gradient(135deg, var(--color-surface) 0%, #040d12 100%);
    border: 2px solid var(--color-border);
    border-radius: 48px;
    padding: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    position: relative;
  }

  &__content {
    max-width: 500px;
    position: relative;
    z-index: 2;
  }

  &__title {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    line-height: 1.1;
  }

  &__text {
    font-size: 1.125rem;
    color: var(--color-text-muted);
    margin-bottom: 2.5rem;
  }

  &__graphic {
    position: relative;
    z-index: 1;
  }
}

.circle {
  width: 200px;
  height: 200px;
  background: var(--color-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  box-shadow: 0 0 50px rgba(76, 201, 240, 0.3);
  animation: float 4s infinite ease-in-out;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(10px, -20px); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.1; }
}
</style>
