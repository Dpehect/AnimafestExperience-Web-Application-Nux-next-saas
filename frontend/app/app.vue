<script setup lang="ts">
// Animal Concept State & Animation Logic
</script>

<template>
  <div :class="$style.layout">
    <div :class="$style.jungleGlow"></div>

    <!-- Header / Nav -->
    <header :class="$style.header">
      <div class="l-container" :class="$style.header__inner">
        <div :class="$style.logo">
          <div :class="$style.logo__icon">🦊</div>
          <span :class="$style.logo__text">Anima<span :class="$style.highlight">Fest</span></span>
        </div>
        <nav :class="$style.nav">
          <NuxtLink to="/" :class="$style.nav__link">Home</NuxtLink>
          <NuxtLink to="/search" :class="$style.nav__link">Hunt</NuxtLink>
          <NuxtLink to="/tracker" :class="$style.nav__link">Nest</NuxtLink>
          <NuxtLink to="/analytics" :class="$style.nav__link">Stats</NuxtLink>
        </nav>
        <AtomsAppButton variant="primary">Join Pack</AtomsAppButton>
      </div>
    </header>

    <!-- Hero Section -->
    <section :class="$style.hero">
      <div class="l-container" :class="$style.hero__grid">
        <div :class="$style.hero__content">
          <span :class="$style.hero__badge">Wild Opportunities Await</span>
          <h1 :class="$style.hero__title">
            Find Your <span :class="$style.highlight">Career</span> Habitat
          </h1>
          <p :class="$style.hero__subtitle">
            Explore 2000+ hand-picked internships in a vibrant relational ecosystem. No cages, just growth.
          </p>
          <div :class="$style.hero__actions">
            <AtomsAppButton size="lg">Start Hunting</AtomsAppButton>
            <AtomsAppButton variant="secondary" size="lg">View Ecosystem</AtomsAppButton>
          </div>
        </div>
        
        <div :class="$style.hero__mascot">
          <img src="/mascot.png" alt="AnimaFest Mascot" :class="$style.mascotImg" />
          <div :class="$style.mascotGlow"></div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <main class="l-container" :class="$style.main">
      <NuxtPage />
    </main>

    <footer :class="$style.footer">
      <div class="l-container">
        <p>© 2024 AnimaFest Enterprise. Building Careers in the Wild.</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" module>
.layout {
  min-height: 100vh;
  background-color: var(--color-bg);
  color: var(--color-text);
  overflow-x: hidden;
  position: relative;
}

.jungleGlow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at 80% 20%, rgba(92, 131, 116, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(255, 140, 66, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.header {
  height: 100px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;

  &__icon {
    font-size: 2rem;
    animation: rotate 10s infinite linear;
  }

  &__text {
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: -0.02em;
  }
}

.highlight {
  color: var(--color-primary);
}

.nav {
  display: flex;
  gap: 3rem;

  &__link {
    font-weight: 700;
    color: var(--color-text-muted);
    transition: all 0.3s ease;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;

    &:hover {
      color: var(--color-primary);
      transform: translateY(-2px);
    }
  }
}

.hero {
  padding: 8rem 0;
  position: relative;
  z-index: 1;

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    align-items: center;

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__badge {
    display: inline-block;
    padding: 0.5rem 1.25rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--color-border);
    border-radius: 99px;
    font-size: 0.75rem;
    font-weight: 800;
    color: var(--color-accent);
    margin-bottom: 2rem;
  }

  &__title {
    font-size: 4.5rem;
    font-weight: 950;
    line-height: 1.1;
    letter-spacing: -0.04em;
    margin-bottom: 2rem;
  }

  &__subtitle {
    font-size: 1.25rem;
    color: var(--color-text-muted);
    max-width: 500px;
    line-height: 1.6;
    margin-bottom: 3rem;
  }

  &__actions {
    display: flex;
    gap: 1.5rem;
  }

  &__mascot {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.mascotImg {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 64px;
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.6);
  animation: float 6s infinite ease-in-out;
  position: relative;
  z-index: 2;
}

.mascotGlow {
  position: absolute;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(255, 140, 66, 0.2) 0%, transparent 70%);
  z-index: 1;
  animation: pulseGlow 4s infinite alternate;
}

.main {
  padding-bottom: 8rem;
  position: relative;
  z-index: 1;
}

.footer {
  padding: 4rem 0;
  border-top: 1px solid var(--color-border);
  text-align: center;
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(1deg); }
}

@keyframes pulseGlow {
  from { transform: scale(0.8); opacity: 0.5; }
  to { transform: scale(1.2); opacity: 0.8; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
