# Dev Note

## Bookmark

- 22-09-2026: https://nextjs.org/learn/dashboard-app/navigating-between-pages#pattern-showing-active-links

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
  2. Install pgadmin https://www.postgresql.org/ftp/pgadmin/pgadmin4/v9.18/windows/
  3. 

## Commands

### Run command

```bash
pnpm dev
```

## install  command

```bash
pnpm i
```
