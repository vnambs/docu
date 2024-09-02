import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BlogSection from '../components/landing/BlogSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import Hero from '../components/landing/Hero';
import ProjectSection from '../components/landing/ProjectSection';
import Particles from '../components/magicui/particles';

export default function Home(): JSX.Element {
	const {
		siteConfig: { customFields, tagline },
	} = useDocusaurusContext();
	const { description } = customFields as { description: string };
	return (
		<Layout
			title={tagline}
			description={description}>
			<Head>
				{/* Page Title */}
				<title>My Portfolio, Blog & Documentation - Jonathan Voary Nambinina</title>

				{/* Page Description */}
				<meta
					name='description'
					content='Discover my portfolio, web development projects, skills, and professional experience.'
				/>

				{/* Open Graph metadata for social media */}
				<meta
					property='og:title'
					content='My Portfolio, Blog & Documentation - Jonathan Voary Nambinina'
				/>
				<meta
					property='og:description'
					content='Explore my web development projects, skills, and professional journey.'
				/>
				<meta
					property='og:image'
					content='https://vnambs.github.io/docu/img/docusaurus-social-card.jpg'
				/>
				<meta
					property='og:url'
					content='https://vnambs.github.io/docu/img/docusaurus-social-card.jpg'
				/>
				<meta
					property='og:type'
					content='website'
				/>

				{/* Twitter Card metadata */}
				<meta
					name='twitter:card'
					content='summary_large_image'
				/>
				<meta
					name='twitter:title'
					content='My Portfolio - Jonathan Voary Nambinina'
				/>
				<meta
					name='twitter:description'
					content='Discover my projects, skills, and experiences in web development.'
				/>
				<meta
					name='twitter:image'
					content='[URL of the preview image for Twitter]'
				/>

				{/* Additional metadata */}
				<meta
					name='keywords'
					content='portfolio, web developer, projects, skills, Jonathan Voary Nambinina'
				/>
				<link
					rel='canonical'
					href='https://vnambs.github.io'
				/>
			</Head>

			<main>
				<Hero />
				<Particles
					className='absolute inset-0'
					quantity={100}
					ease={80}
					color={'#ffffff'}
					refresh
				/>

				<div className='relative'>
					<div className='mx-auto max-w-7xl bg-background lg:px-8'>
						<BlogSection />
						<ProjectSection />
						<FeaturesSection />
					</div>
					<div
						className='-z-50 absolute inset-0 bg-grid-slate-50 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.3))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]'
						style={{ backgroundPosition: '10px 10px;' }}
					/>
				</div>
			</main>
		</Layout>
	);
}
