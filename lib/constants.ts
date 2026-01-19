/**
 * Application-wide constants
 */

export const APP_NAME = 'UI Dev Task'
export const APP_DESCRIPTION = 'A modern web application built with Next.js, React, TypeScript, and Tailwind CSS'

export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
] as const

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  twitter: 'https://twitter.com',
  linkedin: 'https://linkedin.com',
} as const
