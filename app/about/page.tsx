import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About This Project</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Modern Stack"
            description="Built with the latest web technologies"
          >
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>✨ Next.js 15 App Router</li>
              <li>⚛️ React 18 with Server Components</li>
              <li>🔷 TypeScript for type safety</li>
              <li>🎨 Tailwind CSS for styling</li>
            </ul>
          </Card>

          <Card
            title="Features"
            description="Everything you need to get started"
          >
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>📱 Fully responsive design</li>
              <li>🌙 Dark mode support</li>
              <li>🎯 Component library included</li>
              <li>🚀 Ready for production</li>
            </ul>
          </Card>

          <Card
            title="Developer Experience"
            description="Optimized for productivity"
          >
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>⚡ Fast Refresh for instant feedback</li>
              <li>🔍 ESLint for code quality</li>
              <li>📝 TypeScript intellisense</li>
              <li>🎨 Tailwind IntelliSense</li>
            </ul>
          </Card>

          <Card
            title="Deployment"
            description="Deploy anywhere with ease"
          >
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>▲ Optimized for Vercel</li>
              <li>🐳 Docker support ready</li>
              <li>☁️ Cloud platform compatible</li>
              <li>📦 Static export option</li>
            </ul>
          </Card>
        </div>

        <div className="mt-8 flex gap-4">
          <Link href="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
          <Link href="/api/hello" target="_blank">
            <Button variant="outline">Test API</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
