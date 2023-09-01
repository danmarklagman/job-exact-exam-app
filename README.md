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

## .env

```bash
VUE_APP_API_URL='https://api.jobexact.local'
VUE_APP_NAME='JobExact'
VUE_APP_ENV='development'
VUE_APP_DEBUG=true
VUE_APP_HOST='localhost'
VUE_APP_SERVER='http'
VUE_APP_PORT=8080
```