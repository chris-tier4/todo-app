## default detections

```
./src/components/dashboard/client-todo-table.tsx
101:6  Warning: React Hook React.useMemo has a missing dependency: 'columns'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
121:6  Warning: React Hook React.useMemo has missing dependencies: 'hasSearchFilter' and 'statusOptions.length'. Either include them or remove the dependency array.  react-hooks/exhaustive-deps
258:5  Warning: React Hook React.useCallback has a missing dependency: 'updateOptimisticTodos'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
382:6  Warning: React Hook React.useMemo has missing dependencies: 'columns', 'statusOptions', 'updateOptimisticTodos', and 'user'. Either include them or remove the dependency array.  react-hooks/exhaustive-deps

./src/components/landing/particle.tsx
42:6  Warning: React Hook useEffect has missing dependencies: 'animate' and 'initCanvas'. Either include them or remove the dependency array.  react-hooks/exhaustive-deps
46:6  Warning: React Hook useEffect has a missing dependency: 'onMouseMove'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
50:6  Warning: React Hook useEffect has a missing dependency: 'initCanvas'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules
```

## fix all detections

```
 → pnpm lint    --fix

> todo-next-app@1.0.0 lint /Users/uchinishi.koichi/train/todo-app
> next lint "--fix"

=============

WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.

You may find that it works just fine, or you may not.

SUPPORTED TYPESCRIPT VERSIONS: >=4.3.5 <5.4.0

YOUR TYPESCRIPT VERSION: 5.5.4

Please only submit bug reports when using the officially supported version.

=============
✔ No ESLint warnings or errors
```
