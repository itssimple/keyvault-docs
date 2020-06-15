/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const users = [
  /*  {
      caption: 'User1',
      image: '/img/undraw_open_source.svg',
      infoLink: 'https://www.facebook.com',
      pinned: true,
    },*/
];

const siteConfig = {
  title: 'KeyVault', // Title for your website.
  tagline: 'Keeping your secrets safe',
  url: 'https://keyvault.dev', // Your website URL
  baseUrl: '/', // Base URL for your project */

  projectName: 'keyvault-docs',
  organizationName: 'itssimple',

  headerLinks: [
    /*{ doc: 'doc1', label: 'Docs' },
    { doc: 'api', label: 'API' },*/
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  /*headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',*/

  /* Colors for website */
  colors: {
    primaryColor: '#253a70',
    secondaryColor: '#19284e',
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} It's Simple Studios`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/itssimple/keyvault',
};

module.exports = siteConfig;