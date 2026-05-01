# System Architecture - AnimaFest Enterprise

## Design Patterns & Principles
This platform is engineered using modern software design principles to ensure maintainability, scalability, and high performance.

### 1. Decoupled Architecture (SoC)
The system is divided into two distinct services:
- **Core API (Backend):** Built with NestJS, serving validated JSON data via a RESTful interface.
- **Client Application (Frontend):** Built with Nuxt 4, handling Server-Side Rendering (SSR) for optimal SEO and performance.

### 2. Data Persistence Layer
- **PostgreSQL**: Chosen for its robust relational data handling.
- **Drizzle ORM**: Used for type-safe database interactions and relational mapping, providing a 0-runtime overhead compared to traditional ORMs.

### 3. Styling Methodology (CSS Modules & SCSS)
To achieve a premium, unique visual identity, the project avoids utility-first frameworks. 
- **BEM (Block Element Modifier)**: Used for CSS class naming to prevent global scope leakage.
- **Design Tokens**: Centralized SCSS variables for colors, spacing, and typography.
- **CSS Modules**: Scoped styling for each Single File Component (SFC).

### 4. Component Architecture
Following the **Atomic Design** methodology:
- **Atoms**: Primitive UI elements (Buttons, Inputs).
- **Molecules**: Groups of atoms (Internship Cards, Search Fields).
- **Organisms**: Complex UI sections (Navigation, Bento Grids).

### 5. Security & Validation
- **Zod**: Runtime schema validation for all incoming API requests and frontend data structures.
- **Strict TypeScript**: 100% type coverage across the entire monorepo.
