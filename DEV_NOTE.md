# Dev Note

## Bookmark

- 22-09-2026: https://nextjs.org/learn/dashboard-app/navigating-between-pages#pattern-showing-active-links
- 23-09-2026: https://nextjs.org/learn/dashboard-app/fetching-data#fetching-data-for-latestinvoices

## Topics

- clsx function.

```ts
import clsx from 'clsx';
export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm', // apply in both
        {
          'bg-gray-100 text-gray-500': status === 'pending', // apply only if true
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
    // ...
)}
```

- vercel db error. gonna be use local postgres db. steps are here for latter use. 
  1. Instructions link : https://chatgpt.com/share/6ab3725e-7a8c-83e8-af88-02b4cb2e4ced
  2. Install postgres: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
  3. skip stack builder during installation
  4. create server first
  5. then create db

- need to learn about hook, promise, Suspense.
- Route groups allow you to organize files into logical groups without affecting the URL path structure. When you create a new folder using parentheses (), the name won't be included in the URL path. So /dashboard/(overview)/page.tsx becomes /dashboard.
- Suspense allows you to defer rendering parts of your application until some condition is met (e.g. data is loaded). You can wrap your dynamic components in Suspense. Then, pass it a fallback component to show while the dynamic component loads.

## Commands

### Run command

```bash
pnpm dev
```

## install  command

```bash
pnpm i
```
