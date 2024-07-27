This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites

Node.js version is .node-version's version. 
  - ref
    - brew install n
    - n <NODE_VERSION>

## Getting Started
Run the following commands

```bash
corepack enable
pnpm i
cp -pr .env.example .env
pnpm db:studio 
pnpm dev
open http://localhost:3000
```

## Folders:
- API model: lib > actions 
- API integration: src > app 
- UI: src > app > components


## audit

```
# execute audit check
pnpm audit

# fix as automatically
pnpm audit fix
```

## lint

```
# execute pnpm check
pnpm lint

# fix as automatically
pnpm lint --fix
```