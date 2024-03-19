import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '321f43ecb4f94460aad9ac3c5b6e65bb',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Stardev blog',
  domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
  author: 'Stardev',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  twitter: 'transitive_bs',
  github: 'transitive-bullshit',
  linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/': '321f43ecb4f94460aad9ac3c5b6e65bb',
    '/resume': 'Resume-2efd21e6988b4ff8aa5ba4318ce66d17',
    '/portfolio' : 'Portfolio-ecc322cd61e840899aef30279e19173b',
    '/m-log': 'M-log-c5dc1513e3b7468eaf2eceeefba7abff'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Home',
      pageId: '321f43ecb4f94460aad9ac3c5b6e65bb'
    },
    {
      title: 'Resume',
      pageId: 'Resume-2efd21e6988b4ff8aa5ba4318ce66d17'
    },
    {
      title: 'Portfolio',
      pageId: 'Portfolio-ecc322cd61e840899aef30279e19173b'
    },
    {
      title: 'Github',
      url: 'https://github.com/AMeaningfulStar'
    },
    {
      title: 'M-Log',
      pageId: 'M-log-c5dc1513e3b7468eaf2eceeefba7abff'
    }
  ]
})
