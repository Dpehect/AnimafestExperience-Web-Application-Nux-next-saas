<script setup lang="ts">
const { internships } = useApi();
const { currentPage, offset, totalPages, nextPage, prevPage } = usePagination(2200, 12);

const filters = reactive({
  category: '',
  countryId: '',
  isPaid: null,
  minSalary: 0
});

const { data: response, pending } = await useAsyncData(
  'search-internships',
  () => internships.getAll({ 
    limit: 12, 
    offset: offset.value,
    ...filters
  }),
  { watch: [offset, filters] }
);

const results = computed(() => response.value?.data || []);
</script>

<template>
  <div class="container search-page">
    <div class="layout-flex">
      <!-- Sidebar Filters -->
      <aside class="sidebar">
        <div class="glass filter-box">
          <h3 class="filter-title">Filters</h3>
          
          <div class="filter-group">
            <label>Sector</label>
            <select v-model="filters.category" class="custom-select">
              <option value="">All Sectors</option>
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
            </select>
          </div>

          <div class="filter-group">
            <label>Min Salary (€)</label>
            <input type="range" v-model="filters.minSalary" min="0" max="5000" step="100" class="custom-range" />
            <div class="salary-label">€{{ filters.minSalary }}</div>
          </div>
        </div>
      </aside>

      <!-- Results Area -->
      <main class="results-main">
        <div class="results-header">
          <h1 class="main-title">2200+ Opportunities</h1>
          <div class="pagination-controls">
            <button @click="prevPage" :disabled="currentPage === 1" class="glass page-btn">Prev</button>
            <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="glass page-btn">Next</button>
          </div>
        </div>

        <div v-if="pending" class="grid-layout">
          <div v-for="i in 6" :key="i" class="glass skeleton"></div>
        </div>

        <div v-else class="grid-layout">
          <MoleculesInternshipCard 
            v-for="item in results" 
            :key="item.id" 
            :internship="item" 
          />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.search-page {
  padding: 4rem 0;
}

.layout-flex {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .layout-flex {
    flex-direction: row;
  }
}

.sidebar {
  width: 100%;
}

@media (min-width: 1024px) {
  .sidebar {
    width: 280px;
  }
}

.filter-box {
  padding: 1.5rem;
}

.filter-title {
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
}

.filter-group {
  margin-bottom: 1.5rem;
}

.filter-group label {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--text-muted);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.custom-select {
  width: 100%;
  background: #18181b;
  border: 1px solid var(--glass-border);
  color: white;
  padding: 0.75rem;
  border-radius: 12px;
}

.custom-range {
  width: 100%;
}

.salary-label {
  margin-top: 0.5rem;
  color: var(--primary);
  font-weight: 600;
}

.results-main {
  flex: 1;
}

.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.main-title {
  font-size: 2rem;
}

.pagination-controls {
  display: flex;
  gap: 0.5rem;
}

.page-btn {
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 0.875rem;
}

.page-btn:disabled {
  opacity: 0.3;
}

.page-info {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-family: monospace;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .grid-layout {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1280px) {
  .grid-layout {
    grid-template-columns: repeat(3, 1fr);
  }
}

.skeleton {
  height: 300px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
