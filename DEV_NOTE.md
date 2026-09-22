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

## Commands

### Run command

```bash
pnpm dev
```

## install  command

```bash
pnpm i
```
