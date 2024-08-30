import Translate, { translate } from '@docusaurus/Translate';
import { Icon } from '@iconify/react';
import OpenSourceSvg from '@site/static/svg/right.svg';
import SpiderSvg from '@site/static/svg/web_developer.svg';
import WebDeveloperSvg from '@site/static/svg/left.svg';

export type FeatureItem = {
	title: string | React.ReactNode;
	description: string | React.ReactNode;
	header: React.ReactNode;
	icon?: React.ReactNode;
};

const FEATURES: FeatureItem[] = [
	{
		title: translate({
			id: 'homepage.feature.developer',
			message: 'TypeScript Full-stack',
		}),
		description: (
			<Translate>
				As a TypeScript full-stack developer, I adhere to the principle of using
				TS whenever possible instead of JS, ensuring type safety for projects,
				improving code quality, and boosting development efficiency
			</Translate>
		),
		header: (
			<WebDeveloperSvg
				className={'h-auto w-full'}
				height={150}
				role='img'
			/>
		),
		icon: (
			<Icon
				icon='logos:typescript-icon'
				className='h-4 w-4 text-neutral-500'
			/>
		),
	},
	{
		title: translate({
			id: 'homepage.feature.spider',
			message: 'A bit of web scraping.',
		}),
		description: (
			<Translate>
				As a developer who is full of curiosity in new technologies. There is no
				code that I can't understand, only code that I don't want to read
			</Translate>
		),
		header: (
			<SpiderSvg
				className={'h-auto w-full'}
				height={150}
				role='img'
			/>
		),
	},
	{
		title: translate({
			id: 'homepage.feature.enthusiast',
			message: 'Design and Illustrations',
		}),
		description: (
			<Translate>
				With a deep passion for illustration, I immerse myself in the art of
				manga, constantly pushing my creative boundaries. I aspire to create
				some illustrations that resonates with readers worldwide
			</Translate>
		),
		header: (
			<OpenSourceSvg
				className={'h-auto w-full'}
				height={150}
				role='img'
			/>
		),
	},
];

export default FEATURES;
