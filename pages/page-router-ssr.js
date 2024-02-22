// pages/page-router-ssr.tsx
import { useRouter } from 'next/router'


export default function SsrPage({ date, random }) {
	const router = useRouter()
	const isError = router.asPath.includes('error')

	if (isError) {
		throw new Error('SSR Error: pages/page-router-ssr.tsx')
	}

	return (
		<div>
			<h1>SSR Lives</h1>
			<p>The random number is {random}</p>
			<p>The date is {date}</p>
		</div>
	)
}

export async function getStaticProps() {
	return {
		props: {
			random: Math.random(),
			date: new Date().toISOString(),
		},
		revalidate: 10, // seconds
	}
}
