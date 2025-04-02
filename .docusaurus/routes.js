import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/docs-cloudfoundry-concepts',
    component: ComponentCreator('/docs-cloudfoundry-concepts', '34e'),
    routes: [
      {
        path: '/docs-cloudfoundry-concepts',
        component: ComponentCreator('/docs-cloudfoundry-concepts', 'a94'),
        routes: [
          {
            path: '/docs-cloudfoundry-concepts',
            component: ComponentCreator('/docs-cloudfoundry-concepts', '42e'),
            routes: [
              {
                path: '/docs-cloudfoundry-concepts/cloudfoundry-concepts/',
                component: ComponentCreator('/docs-cloudfoundry-concepts/cloudfoundry-concepts/', '816'),
                exact: true,
                sidebar: "cloudfoundryConcepts"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs-dev-guide',
    component: ComponentCreator('/docs-dev-guide', 'c04'),
    routes: [
      {
        path: '/docs-dev-guide',
        component: ComponentCreator('/docs-dev-guide', '4e4'),
        routes: [
          {
            path: '/docs-dev-guide',
            component: ComponentCreator('/docs-dev-guide', '8ce'),
            routes: [
              {
                path: '/docs-dev-guide/',
                component: ComponentCreator('/docs-dev-guide/', '5c9'),
                exact: true,
                sidebar: "devGuideSidebar"
              },
              {
                path: '/docs-dev-guide/',
                component: ComponentCreator('/docs-dev-guide/', '467'),
                exact: true,
                sidebar: "devGuideSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '311'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'dbb'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'fc6'),
            routes: [
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developing-and-managing-apps/',
                component: ComponentCreator('/docs/developing-and-managing-apps/', '2c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developing-and-managing-apps/howt-to-push-with-cli/',
                component: ComponentCreator('/docs/developing-and-managing-apps/howt-to-push-with-cli/', 'f87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developing-and-managing-apps/howt-to-push-with-cli/deploy-app',
                component: ComponentCreator('/docs/developing-and-managing-apps/howt-to-push-with-cli/deploy-app', '240'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '108'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '4f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'f9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
