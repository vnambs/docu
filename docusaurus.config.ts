import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
	title: 'Voary Nambinina - Documentation',
	tagline: 'Documentation made with docusaurus',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://vnambs.github.io/',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/docu/',
	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'Voary Nambinina', // Usually your GitHub org/user name.
	projectName: 'Documentation for blogin system', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: false,
				theme: {
					customCss: './src/css/custom.css',
				},
				sitemap: {
					priority: 0.5,
				},
			} satisfies Preset.Options,
		],
	],
	plugins: [
		'docusaurus-plugin-image-zoom',
		'@docusaurus/plugin-ideal-image',
		// ['docusaurus-plugin-baidu-tongji', { token: 'c9a3849aa75f9c4a4e65f846cd1a5155' }],
		[
			'@docusaurus/plugin-pwa',
			{
				debug: process.env.NODE_ENV === 'development',
				offlineModeActivationStrategies: [
					'appInstalled',
					'standalone',
					'queryString',
				],
				pwaHead: [
					{ tagName: 'link', rel: 'icon', href: '/img/logo.png' },
					{ tagName: 'link', rel: 'manifest', href: '/manifest.json' },
					{ tagName: 'meta', name: 'theme-color', content: '#12affa' },
				],
			},
		],
		[
			'vercel-analytics',
			{
				debug: process.env.NODE_ENV === 'development',
				mode: 'auto',
			},
		],
		[
			'./src/plugin/plugin-content-blog',
			{
				path: 'blog',
				editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
					`https://github.com/kuizuo/blog/edit/main/${blogDirPath}/${blogPath}`,
				editLocalizedFiles: false,
				blogDescription:
					'Code Life: Weaving a Journey of Technology and Blogging',
				blogSidebarCount: 10,
				blogSidebarTitle: 'Blogs',
				postsPerPage: 12,
				showReadingTime: true,
				readingTime: ({ content, frontMatter, defaultReadingTime }) =>
					defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
				feedOptions: {
					type: 'all',
					title: '愧怍',
					copyright: `Copyright © ${new Date().getFullYear()} 愧怍 Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">test</a></p>`,
				},
			},
		],
		async function tailwindcssPlugin() {
			return {
				name: 'docusaurus-tailwindcss',
				configurePostCss(postcssOptions) {
					// Appends TailwindCSS and AutoPrefixer.
					postcssOptions.plugins.push(require('tailwindcss'));
					postcssOptions.plugins.push(require('autoprefixer'));
					return postcssOptions;
				},
			};
		},
		async function injectMotto() {
			return {
				name: 'docusaurus-motto',
				injectHtmlTags() {
					return {
						headTags: [
							{
								tagName: 'script',
								innerHTML: `
    (${function () {
			console.log(
				`%c Kz Blog %c https://github.com/kuizuo/blog`,
				'color: #fff; margin: 1em 0; padding: 5px 0; background: #12affa;',
				'margin: 1em 0; padding: 5px 0; background: #efefef;'
			);

			const motto = `
This Webisite Powered By Kz Blog.
Written by Docusaurus, Coding with Love.
--------
Love what you do and do what you love.
`;

			if (document.firstChild?.nodeType !== Node.COMMENT_NODE) {
				document.prepend(document.createComment(motto));
			}
		}.toString()})();`,
							},
						],
					};
				},
			};
		},
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'img/docusaurus-social-card.jpg',
		navbar: {
			title: 'Voary Nambinina',
			logo: {
				alt: 'My Site Logo',
				src: 'img/logo.svg',
			},
			hideOnScroll: true,
			items: [
				{ label: 'Blog', position: 'right', to: 'blog' },
				{ label: 'Projects', position: 'right', to: 'project' },
				{ label: 'Friends Links', position: 'right', to: 'friends' },
				{ label: 'About', position: 'right', to: 'about' },
				{
					label: 'More',
					position: 'right',
					items: [
						{ label: 'Archive', to: 'blog/archive' },
						{ label: 'Notes', to: 'docs/skill' },
						{ label: 'Tool Recommendations', to: 'docs/tools' },
					],
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Tutorial',
							to: '/docs/skill',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Stack Overflow',
							href: 'https://stackoverflow.com/questions/tagged/docusaurus',
						},
						{
							label: 'Discord',
							href: 'https://discordapp.com/invite/docusaurus',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/docusaurus',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'Blog',
							to: '/blog',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/facebook/docusaurus',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Voary Nambinina, Inc. Built with Docusaurus.`,
		},
		algolia: {
			appId: 'P8CX7KSFPX',
			apiKey: '43d6d836bd079df669c03f87b31cdc18',
			indexName: 'vnambs',
		},
		prism: {
			theme: prismThemes.oneLight,
			darkTheme: prismThemes.oneDark,
		},
		giscus: {
			repo: 'vnambs/blog-comment',
			repoId: 'R_kgDOMpjhBQ',
			category: 'General',
			categoryId: 'DIC_kwDOMpjhBc4CiAjj',
			theme: 'light',
			darkTheme: 'dark_dimmed',
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
