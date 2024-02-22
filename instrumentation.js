// instrumentation.ts or src/instrumentation.ts
import { CONSTANTS } from './utils/highlightConstants'

export async function register() {
	const { registerHighlight } = await import('@highlight-run/next/server')

	registerHighlight({
		projectID: CONSTANTS.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID,
		serviceName: 'my-nextjs-backend',
	})
}
