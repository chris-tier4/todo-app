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
