export const projects: Project[] = [
	{
		title: 'Jonathan Bloging attempt',
		description:
			'🦖 Creating a Personal Blog Using the Docusaurus Static Site Generator',
		preview: '/docu/img/project/docu.png',
		website: 'https://vnambs.github.io/docu',
		source: 'https://github.com/vnambs/docu',
		tags: ['personal', 'design', 'favorite'],
		type: 'web',
	},
	{
		title: 'SKIILLZ',
		description: 'Build with wordpress and nexjts',
		preview: '/docu/img/project/skiillz.png',
		website: 'https://www.skiillz.com',
		source: 'https://github.com/vnambs',
		tags: ['product', 'large'],
		type: 'web',
	},
	{
		title: 'Strapi Management',
		description: 'Content Management build with strapi and Nextjs',
		preview: '/docu/img/project/strapi.png',
		website: 'https://vnambs.github.io',
		source: 'https://github.com/vnambs',
		tags: ['large', 'product'],
		type: 'web',
	},
	{
		title: 'SDA Websites',
		description:
			" ReactJs and Symfony, backend is not yet on production so some functionalities isn't yet available",
		preview: '/docu/img/project/sda.png',
		website: 'https://sdaproject.vercel.app',
		source: 'https://github.com/vnambs/staticdisantsa',
		tags: ['personal', 'favorite', 'product', 'large', 'design'],
		type: 'web',
	},
	{
		title: 'Bash Script for WP backup',
		description: '🔗 Wordpress to S3 bucket backup',
		preview: '/docu/img/project/wp-restore.png',
		website: 'https://github.com/vnambs/wordpress-backup-and-restore',
		source: 'https://github.com/vnambs/wordpress-backup-and-restore',
		tags: ['opensource', 'favorite', 'product'],
		type: 'app',
	},
];

export type Tag = {
	label: string;
	description: string;
	color: string;
};

export type TagType =
	| 'favorite'
	| 'opensource'
	| 'product'
	| 'design'
	| 'large'
	| 'personal';

export type ProjectType =
	| 'web'
	| 'app'
	| 'commerce'
	| 'personal'
	| 'toy'
	| 'other';

export const projectTypeMap = {
	web: '🖥️ Website',
	app: '💫 Application',
	commerce: 'Business Project',
	personal: '👨‍💻 Personal',
	toy: '🔫 Toy',
	other: '🗃️ Other',
};

export type Project = {
	title: string;
	description: string;
	preview?: string;
	website: string;
	source?: string | null;
	tags: TagType[];
	type: ProjectType;
};
export const Tags: Record<TagType, Tag> = {
	favorite: {
		label: 'Favorite',
		description: 'My favorite websites, must check them out!',
		color: '#e9669e',
	},
	opensource: {
		label: 'Open Source',
		description: 'Open source projects can provide inspiration!',
		color: '#39ca30',
	},
	product: {
		label: 'Product',
		description: 'Projects related to products!',
		color: '#dfd545',
	},
	design: {
		label: 'Design',
		description: 'Beautifully designed websites!',
		color: '#a44fb7',
	},
	large: {
		label: 'Large',
		description: 'Large projects with more pages than average',
		color: '#8c2f00',
	},
	personal: {
		label: 'Personal',
		description: 'Personal projects',
		color: '#12affa',
	},
};

export const TagList = Object.keys(Tags) as TagType[];

export const groupByProjects = projects.reduce((group, project) => {
	const { type } = project;
	group[type] = group[type] ?? [];
	group[type].push(project);
	return group;
}, {} as Record<ProjectType, Project[]>);
