import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  title?: string
  description?: string
}

export function Card({ children, className, title, description }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700',
        className
      )}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}
