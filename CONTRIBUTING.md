# Contribution Standards

## Coding Standards
All contributors are expected to follow these strict quality guidelines:

### 1. Naming Conventions
- **Files**: PascalCase for components, kebab-case for assets and utilities.
- **CSS**: BEM methodology (e.g., `.card__header--active`).

### 2. State Management
- Use Pinia for global application state.
- Keep component-local state within the `<script setup>` block using `ref` or `reactive`.

### 3. API Communication
- All API calls must be abstracted into the `useApi` composable or specialized services.
- Direct `fetch` calls within components are discouraged.

### 4. Git Workflow
- Descriptive commit messages (e.g., `feat: implement server-side pagination for internships`).
- Branch naming: `feature/` or `fix/` prefixes.

## Pull Request Process
1. Ensure TypeScript compilation passes without errors.
2. Verify that the SCSS Modules follow the design tokens.
3. Update relevant documentation if logic changes.
