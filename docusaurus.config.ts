import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Academy of Robotic Sciences (ARS)',
  tagline: 'Building the Next Generation of Humanoid Robotics',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://academy-of-robotic-sciences.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/landing-page/',

  // GitHub pages deployment config.
  organizationName: 'Academy-of-Robotic-Sciences',
  projectName: 'landing-page',

  onBrokenLinks: 'warn',
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
            'https://github.com/academy-robotic-sciences/academy-robotic-sciences/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/academy-robotic-sciences/academy-robotic-sciences/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ARS',
      logo: {
        alt: 'Academy of Robotic Sciences Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Learn',
        },
        {
          to: '/courses',
          label: 'Courses',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Tracks',
          position: 'left',
          items: [
            {label: 'Robotic Designer', to: '/docs/tracks/design'},
            {label: 'Hardware Engineer', to: '/docs/tracks/hardware'},
            {label: 'Software Engineer', to: '/docs/tracks/software'},
            {label: 'AI Engineer', to: '/docs/tracks/ai'},
            {label: 'Systems Engineer', to: '/docs/tracks/systems'},
          ],
        },
        {
          type: 'dropdown',
          label: 'Projects',
          position: 'left',
          items: [
            {label: 'SO-101 Arm', to: '/docs/projects/so-101-arm'},
            {label: 'LeRobot Training', to: '/docs/projects/lerobot-training'},
            {label: '3D Prototyping', to: '/docs/projects/3d-prototyping'},
          ],
        },
        {to: '/docs/community/showcase', label: 'Community', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/academy-robotic-sciences/academy-robotic-sciences',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/introduction/welcome',
            },
            {
              label: 'Learning Tracks',
              to: '/docs/tracks/overview',
            },
            {
              label: 'Projects',
              to: '/docs/projects/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Showcase',
              to: '/docs/community/showcase',
            },
            {
              label: 'Contributing',
              to: '/docs/community/contributing',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/ars',
            },
            {
              label: 'Forum',
              href: 'https://forum.ars.edu',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/academy-robotic-sciences/academy-robotic-sciences',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/@ARS_Official',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Academy of Robotic Sciences (ARS). Open Source Education Platform for Humanoid Robotics.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
