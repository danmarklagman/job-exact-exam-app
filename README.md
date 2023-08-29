# JobExact Exam App

Vue3 (typescript) project source code for JobExact Exam App.

## Architecture

```text
├─ public           // static assets.
├─ service          // commands and webpack configurations.
├─ src
|  ├─ api
│  ├─ assets        // assets such as images or font files.
│  ├─ components    // universal Vue components.
│  ├─ config        // global configuration
│  ├─ helpers       // universal helper services
│  ├─ layouts       // base layouts
│  ├─ middleware    // middleware processors
│  ├─ router        // view's routers config.
│  ├─ store         // Vuex store modules.
│  ├─ typings       // typescript .d.ts files.
│  └─ views         // pages.
```

## Commands

```bash
# Start development server.
yarn dev

# Compile production bundle.
yarn build
```
