# Blogify Copilot Instructions

## Project Overview
Blogify is a Node.js/Express-based blogging API currently in early development. The project uses CommonJS modules and is structured around MVC patterns.

## Architecture & Key Components

### Directory Structure
- **Root (`/`)**: Entry point with main data processing logic
- **`Blogify/blogify-api/src/`**: Primary API source code
  - `controllers/`: Request handlers (currently empty - to be implemented)
  - `routes/`: API endpoint definitions (currently empty - to be implemented)
  - `services/`: Business logic layer (currently empty - to be implemented)
  - `utils/`: Utility functions (currently empty - to be implemented)
- **`controllers/`**: Secondary controller location with same subdirectory structure (for reference/examples)

### Data Flow Pattern
The main entry point ([index.js](index.js)) demonstrates the core pattern for this project:
- Fetch data (e.g., `fetchUser(userId)`)
- Process data (e.g., `processData(userData)`)
- Save results (e.g., `saveReport()`)
- Use Promise chains with `.then()` for async operations
- Centralized error handling in `.catch()` blocks that categorizes errors by source

## Development Conventions

### Module System
- Uses CommonJS (`module.exports` / `require`)
- Set in `package.json`: `"type": "commonjs"`
- DO NOT use ES6 imports

### Dependencies
- **Express 5.x**: Primary web framework for routing and middleware
- No other production dependencies currently

### Error Handling
Follow the pattern in [index.js](index.js):
- Check specific error messages to determine failure point
- Return Promise rejections with descriptive context (e.g., `Error fetching user: ${error}`)
- Structure: fetch errors → processing errors → save errors

## Getting Started

### Setup
```bash
npm install
cd Blogify
npm install
```

### Current State
The project skeleton is in place but implementation is incomplete:
- Routes, controllers, and services are empty directories
- Ready for feature development following the established patterns
- No tests are configured yet

### Next Steps for Contributors
1. Implement services layer with business logic
2. Add controllers that use services
3. Define routes in route files
4. Add error handling following [index.js](index.js) pattern
5. Implement database/persistence layer
6. Add tests

## Important Notes
- The project has both root-level and `Blogify/` subdirectory structures - clarify which is authoritative
- No database integration yet - services will need to define data source
- No authentication/validation middleware implemented
