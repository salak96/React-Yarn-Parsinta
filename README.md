# INSTALASI REACT JS Yarn

-   Install Vite react yarn

```bash

yarn create vite
```

-   Instal package json

```bash
yarn
```

-   Running React vite

```bash
yarn dev
```

# Install axios

-   Terminal

```bash
yarn add axios
```

# Install Pretiier

-   Install pretiier

```bash
yarn add --dev --exact prettier
```

-   Edit package json

```bash
 "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "format": "prettier --write ." #add this pretiier
  },
```

-   Add pretiier

```bash
touch .prettierrc.json
```

-   Edit .prettierrc.json

```bash
{
    "tabWidth": 4,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "semi": true,
    "printWidth": 150,
    "bracketSpacing": true,
    "braceSameLine": true
}
```

-   run prettier

```bash
yarn format
```

# Install ESLint

```bash
yarn add --dev --exact eslint
```

# Install bootstrap 5

-   bootstrap 5

```bash
yarn add bootstrap@next popper.js
```

-   Popper.js Installation:

```bash
yarn add @popperjs/core
```

-   import bootstrap App.jsx

```bash
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
```

# React router dom

-   Install react router dom

```bash
yarn add react-router-dom
```

# State Managejemen Recoil

-   Install recoil yarn

```bash
yarn add recoil
```
