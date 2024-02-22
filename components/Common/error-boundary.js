// components/error-boundary.tsx
'use client'

import { ErrorBoundary as HighlightErrorBoundary } from '@highlight-run/next/client'

export function ErrorBoundary({ children }) {
	return (
		<HighlightErrorBoundary showDialog>
			{children}
		</HighlightErrorBoundary>
	)
}
