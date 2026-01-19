/**
 * Global TypeScript type definitions
 */

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface NavigationLink {
  href: string
  label: string
  icon?: React.ReactNode
}

export type Theme = 'light' | 'dark' | 'system'

export type ButtonVariant = 'primary' | 'secondary' | 'outline'
export type ButtonSize = 'sm' | 'md' | 'lg'
