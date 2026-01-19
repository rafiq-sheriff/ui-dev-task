# UI Dev Task

A modern web application built with **Next.js 15**, **React 18**, **TypeScript 5**, and **Tailwind CSS 3**.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Frontend:** React 18
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3
- **Package Manager:** npm

## 📁 Project Structure

```
ui-dev-task/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles with Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── Button.tsx         # Button component with variants
│   └── Card.tsx           # Card component
├── lib/                   # Utility functions
│   └── utils.ts           # Helper functions (cn for className merging)
├── public/                # Static assets
│   └── favicon.ico
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Git ignore rules
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies and scripts
├── postcss.config.js     # PostCSS configuration for Tailwind
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Component Examples

### Button Component

```tsx
import { Button } from '@/components/Button'

<Button variant="primary" size="md">
  Click Me
</Button>
```

**Variants:** `primary`, `secondary`, `outline`
**Sizes:** `sm`, `md`, `lg`

### Card Component

```tsx
import { Card } from '@/components/Card'

<Card title="Card Title" description="Card description">
  <p>Card content goes here</p>
</Card>
```

## 🔧 Configuration

### Tailwind CSS

Tailwind is configured in `tailwind.config.js`. Custom colors and theme extensions can be added there.

### TypeScript

TypeScript configuration is in `tsconfig.json` with strict mode enabled and path aliases (`@/*`) configured.

### Path Aliases

Use `@/` to import from the root directory:

```tsx
import { Button } from '@/components/Button'
import { cn } from '@/lib/utils'
```

## 📦 Key Dependencies

- **next:** ^15.1.3
- **react:** ^18.3.1
- **typescript:** ^5.7.2
- **tailwindcss:** ^3.4.17
- **clsx & tailwind-merge:** For conditional className handling

## 🎯 Features

✅ Next.js 15 with App Router
✅ TypeScript with strict mode
✅ Tailwind CSS with custom configuration
✅ Reusable component library
✅ ESLint for code quality
✅ Dark mode support
✅ Utility functions for className merging

## 📝 Development Tips

1. **Adding new pages:** Create files in the `app/` directory
2. **Adding components:** Create reusable components in `components/`
3. **Styling:** Use Tailwind utility classes
4. **TypeScript:** All files use `.tsx` or `.ts` extensions
5. **Utilities:** Add helper functions to `lib/`

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
```

Then deploy to [Vercel](https://vercel.com) with one click.

### Other Platforms

Build the project and deploy the `.next` folder with a Node.js server.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

MIT License - feel free to use this project as a template!
