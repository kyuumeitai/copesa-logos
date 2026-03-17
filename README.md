# @labcon/copesa-logos

Logos de La Tercera y Copesa as React components.

## Install

```bash
npm install @labcon/copesa-logos
```

## Usage

```jsx
import { Interactivo, LaTercera } from '@labcon/copesa-logos'

export function Header() {
  return (
    <header>
      <Interactivo />
      <LaTercera schema="light" />
    </header>
  )
}
```

## Local Development

```bash
npm install
npm run build
```

For iterative work on the library output, run:

```bash
npm run dev
```

To preview components in Storybook:

```bash
npm run storybook
```
