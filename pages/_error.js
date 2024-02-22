// pages/_error.tsx
import { PageRouterErrorProps, pageRouterCustomErrorHandler } from '@highlight-run/next/ssr'

import { CONSTANTS } from '../utils/highlightConstants'
import NextError from 'next/error'

export default pageRouterCustomErrorHandler(
	{
		projectId: CONSTANTS.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID,
		// ...otherHighlightOptions
	},
	/**
	 *
	 * This second argument is purely optional.
	 * If you don't pass it, we'll use the default Next.js error page.
	 *
	 * Go ahead and pass in your own error page.
	 */
	(props) => <NextError {...props} />,
)
