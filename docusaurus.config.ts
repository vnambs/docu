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
			'./src/plugin/plugin-content-blog', // 为了实现全局 blog 数据，必须改写 plugin-content-blog 插件
			{
				path: 'blog',
				editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
					`https://github.com/kuizuo/blog/edit/main/${blogDirPath}/${blogPath}`,
				editLocalizedFiles: false,
				blogDescription: '代码人生：编织技术与生活的博客之旅',
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
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'tutorialSidebar',
					position: 'left',
					label: 'Tutorial',
				},
				{
					type: 'docSidebar',
					sidebarId: 'tutorialSidebar',
					position: 'left',
					label: 'Strapi',
				},
				{ to: '/blog', label: 'Blog', position: 'left' },
				{
					href: 'https://github.com/facebook/docusaurus',
					label: 'GitHub',
					position: 'right',
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
							to: '/docs/intro',
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
		prism: {
			theme: prismThemes.oneLight,
			darkTheme: prismThemes.oneDark,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
