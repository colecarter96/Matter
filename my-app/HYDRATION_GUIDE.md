# Hydration Error Prevention Guide

## Overview
This guide covers common hydration issues and how to prevent them in your Next.js app with React 19.

## What Causes Hydration Errors?

1. **Server/Client Content Mismatch**: Different content rendered on server vs client
2. **Browser-only APIs**: Using `window`, `document`, `localStorage` etc. during SSR
3. **Invalid HTML nesting**: Block elements inside inline elements
4. **Date/Time differences**: Server and client generating different timestamps
5. **Random values**: Using `Math.random()` or `crypto.randomUUID()` during render
6. **Third-party scripts**: External scripts modifying DOM before hydration

## Prevention Strategies

### 1. Use the ClientOnly Component
For content that should only render on the client:

```tsx
import ClientOnly from './components/ClientOnly'

export default function MyComponent() {
  return (
    <div>
      <ClientOnly fallback={<div>Loading...</div>}>
        <ComponentThatUsesWindowAPI />
      </ClientOnly>
    </div>
  )
}
```

### 2. Check for Window/Document Availability
```tsx
'use client'

export default function MyComponent() {
  const isClient = typeof window !== 'undefined'
  
  if (!isClient) {
    return <div>Loading...</div>
  }
  
  return <div>{window.location.href}</div>
}
```

### 3. Use useEffect for Client-Side Operations
```tsx
'use client'

import { useEffect, useState } from 'react'

export default function MyComponent() {
  const [clientData, setClientData] = useState<string | null>(null)
  
  useEffect(() => {
    setClientData(localStorage.getItem('key'))
  }, [])
  
  return <div>{clientData || 'Loading...'}</div>
}
```

### 4. Suppress Hydration Warnings (Use Sparingly)
Only use when you're certain the mismatch is intentional:

```tsx
<div suppressHydrationWarning>
  {new Date().toLocaleString()}
</div>
```

### 5. Use Dynamic Imports with No SSR
```tsx
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(
  () => import('./ClientOnlyComponent'),
  { ssr: false }
)
```

## Configuration Added

### Next.js Config
- `reactStrictMode: true` - Helps catch issues during development
- `swcMinify: true` - Better minification that preserves hydration
- `experimental.optimizePackageImports` - Optimizes React imports

### Layout Improvements
- Added `suppressHydrationWarning` to html and body tags
- Added `display: 'swap'` to fonts for better loading
- Added proper viewport metadata

### Error Boundary
- Created `app/error.tsx` to catch hydration and other client errors
- Shows error details in development mode

## React 19 Specific Considerations

React 19 introduces stricter hydration checks:
1. More aggressive warnings about mismatches
2. Better error messages for debugging
3. Improved concurrent features that may affect timing

## Debugging Hydration Errors

1. **Check console**: React will show detailed error messages
2. **Use React Developer Tools**: Shows component tree and props
3. **Add logging**: Use `console.log` to compare server/client values
4. **Disable JavaScript**: See what server renders vs client
5. **Use the error boundary**: Check `app/error.tsx` for caught errors

## Best Practices

1. Keep server and client rendering identical
2. Use `useEffect` for browser-only operations
3. Provide loading states for client-only content
4. Test with JavaScript disabled
5. Use TypeScript for better type safety
6. Keep external dependencies minimal
7. Test on different browsers and devices

## Common Patterns to Avoid

```tsx
// ❌ Bad: Different content on server/client
const badComponent = () => (
  <div>{Math.random()}</div>
)

// ✅ Good: Consistent content
const goodComponent = () => {
  const [value, setValue] = useState<number | null>(null)
  
  useEffect(() => {
    setValue(Math.random())
  }, [])
  
  return <div>{value ?? 'Loading...'}</div>
}
```

Remember: When in doubt, use the ClientOnly component or useEffect to defer client-specific rendering! 