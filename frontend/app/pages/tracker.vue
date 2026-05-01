<script setup lang="ts">
const columns = reactive([
  { id: 'applied', title: 'Applied', items: [{ id: 1, title: 'UI Design in Berlin', company: 'TechFlow' }] },
  { id: 'interview', title: 'Interviews', items: [{ id: 2, title: 'Fullstack in Madrid', company: 'Innovate' }] },
  { id: 'accepted', title: 'Accepted', items: [] },
  { id: 'rejected', title: 'Rejected', items: [] }
]);
</script>

<template>
  <div class="container tracker-page">
    <div class="header">
      <div>
        <h1 class="title">Application Tracker</h1>
        <p class="subtitle">Manage your global journey across 20+ partner hubs.</p>
      </div>
    </div>

    <div class="kanban-board">
      <div v-for="column in columns" :key="column.id" class="kanban-column">
        <div class="column-header">
          <h3 class="column-title">{{ column.title }}</h3>
          <span class="column-count">{{ column.items.length }}</span>
        </div>

        <div class="column-body glass">
          <div v-for="item in column.items" :key="item.id" class="glass kanban-card">
            <h4 class="card-title">{{ item.title }}</h4>
            <p class="card-subtitle">{{ item.company }}</p>
            <div class="progress-bar">
              <div class="progress-fill"></div>
            </div>
          </div>
          
          <button class="add-card-btn">
            + Drag & Drop
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tracker-page {
  padding: 4rem 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
}

.subtitle {
  color: var(--text-muted);
  margin-top: 0.5rem;
}

.kanban-board {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .kanban-board {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .kanban-board {
    grid-template-columns: repeat(4, 1fr);
  }
}

.kanban-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.column-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
}

.column-title {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
}

.column-count {
  font-size: 0.65rem;
  background: #18181b;
  padding: 0.2rem 0.6rem;
  border-radius: 99px;
  border: 1px solid var(--glass-border);
}

.column-body {
  min-height: 500px;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.kanban-card {
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.04);
}

.card-title {
  font-size: 0.875rem;
  font-weight: 700;
}

.card-subtitle {
  font-size: 0.75rem;
  color: var(--primary);
  margin-top: 0.25rem;
}

.progress-bar {
  margin-top: 1rem;
  height: 4px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 99px;
  width: 100%;
}

.progress-fill {
  height: 100%;
  width: 40%;
  background: var(--primary);
  border-radius: 99px;
}

.add-card-btn {
  width: 100%;
  padding: 0.75rem;
  border: 1px dashed var(--glass-border);
  border-radius: 1rem;
  font-size: 0.75rem;
  color: var(--text-muted);
  background: transparent;
  transition: color 0.3s ease;
}

.add-card-btn:hover {
  color: white;
  border-color: var(--primary);
}
</style>
