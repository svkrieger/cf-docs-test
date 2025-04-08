import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/cf-docs-test/__docusaurus/debug',
    component: ComponentCreator('/cf-docs-test/__docusaurus/debug', '835'),
    exact: true
  },
  {
    path: '/cf-docs-test/__docusaurus/debug/config',
    component: ComponentCreator('/cf-docs-test/__docusaurus/debug/config', '97f'),
    exact: true
  },
  {
    path: '/cf-docs-test/__docusaurus/debug/content',
    component: ComponentCreator('/cf-docs-test/__docusaurus/debug/content', '102'),
    exact: true
  },
  {
    path: '/cf-docs-test/__docusaurus/debug/globalData',
    component: ComponentCreator('/cf-docs-test/__docusaurus/debug/globalData', '6fc'),
    exact: true
  },
  {
    path: '/cf-docs-test/__docusaurus/debug/metadata',
    component: ComponentCreator('/cf-docs-test/__docusaurus/debug/metadata', 'de6'),
    exact: true
  },
  {
    path: '/cf-docs-test/__docusaurus/debug/registry',
    component: ComponentCreator('/cf-docs-test/__docusaurus/debug/registry', '0f6'),
    exact: true
  },
  {
    path: '/cf-docs-test/__docusaurus/debug/routes',
    component: ComponentCreator('/cf-docs-test/__docusaurus/debug/routes', '1ad'),
    exact: true
  },
  {
    path: '/cf-docs-test/blog',
    component: ComponentCreator('/cf-docs-test/blog', 'e87'),
    exact: true
  },
  {
    path: '/cf-docs-test/blog/archive',
    component: ComponentCreator('/cf-docs-test/blog/archive', '022'),
    exact: true
  },
  {
    path: '/cf-docs-test/blog/authors',
    component: ComponentCreator('/cf-docs-test/blog/authors', '61e'),
    exact: true
  },
  {
    path: '/cf-docs-test/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/cf-docs-test/blog/authors/all-sebastien-lorber-articles', 'a06'),
    exact: true
  },
  {
    path: '/cf-docs-test/blog/authors/yangshun',
    component: ComponentCreator('/cf-docs-test/blog/authors/yangshun', '0ec'),
    exact: true
  },
  {
    path: '/cf-docs-test/blog/first-blog-post',
    component: ComponentCreator('/cf-docs-test/blog/first-blog-post', '04d'),
    exact: true
  },
  {
    path: '/cf-docs-test/blog/long-blog-post',
    component: ComponentCreator('/cf-docs-test/blog/long-blog-post', '925'),
    exact: true
  },
  {
    path: '/cf-docs-test/blog/mdx-blog-post',
    component: ComponentCreator('/cf-docs-test/blog/mdx-blog-post', '82a'),
    exact: true
  },
  {
    path: '/cf-docs-test/blog/tags',
    component: ComponentCreator('/cf-docs-test/blog/tags', '4ec'),
    exact: true
  },
  {
    path: '/cf-docs-test/blog/tags/docusaurus',
    component: ComponentCreator('/cf-docs-test/blog/tags/docusaurus', '9a1'),
    exact: true
  },
  {
    path: '/cf-docs-test/blog/tags/facebook',
    component: ComponentCreator('/cf-docs-test/blog/tags/facebook', '444'),
    exact: true
  },
  {
    path: '/cf-docs-test/blog/tags/hello',
    component: ComponentCreator('/cf-docs-test/blog/tags/hello', '72d'),
    exact: true
  },
  {
    path: '/cf-docs-test/blog/tags/hola',
    component: ComponentCreator('/cf-docs-test/blog/tags/hola', '099'),
    exact: true
  },
  {
    path: '/cf-docs-test/blog/welcome',
    component: ComponentCreator('/cf-docs-test/blog/welcome', '00f'),
    exact: true
  },
  {
    path: '/cf-docs-test/docs-cloudfoundry-concepts',
    component: ComponentCreator('/cf-docs-test/docs-cloudfoundry-concepts', 'b9e'),
    routes: [
      {
        path: '/cf-docs-test/docs-cloudfoundry-concepts',
        component: ComponentCreator('/cf-docs-test/docs-cloudfoundry-concepts', '6aa'),
        routes: [
          {
            path: '/cf-docs-test/docs-cloudfoundry-concepts',
            component: ComponentCreator('/cf-docs-test/docs-cloudfoundry-concepts', 'a97'),
            routes: [
              {
                path: '/cf-docs-test/docs-cloudfoundry-concepts/cloudfoundry-concepts',
                component: ComponentCreator('/cf-docs-test/docs-cloudfoundry-concepts/cloudfoundry-concepts', 'b5b'),
                exact: true,
                sidebar: "cloudfoundryConcepts"
              },
              {
                path: '/cf-docs-test/docs-cloudfoundry-concepts/cloudfoundry-concepts/overview',
                component: ComponentCreator('/cf-docs-test/docs-cloudfoundry-concepts/cloudfoundry-concepts/overview', '5f4'),
                exact: true,
                sidebar: "cloudfoundryConcepts"
              },
              {
                path: '/cf-docs-test/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking',
                component: ComponentCreator('/cf-docs-test/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking', '16b'),
                exact: true,
                sidebar: "cloudfoundryConcepts"
              },
              {
                path: '/cf-docs-test/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/asg',
                component: ComponentCreator('/cf-docs-test/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/asg', '89c'),
                exact: true,
                sidebar: "cloudfoundryConcepts"
              },
              {
                path: '/cf-docs-test/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/container-security',
                component: ComponentCreator('/cf-docs-test/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/container-security', '7ba'),
                exact: true,
                sidebar: "cloudfoundryConcepts"
              },
              {
                path: '/cf-docs-test/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/roles',
                component: ComponentCreator('/cf-docs-test/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/roles', '925'),
                exact: true,
                sidebar: "cloudfoundryConcepts"
              },
              {
                path: '/cf-docs-test/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/security',
                component: ComponentCreator('/cf-docs-test/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/security', '18d'),
                exact: true,
                sidebar: "cloudfoundryConcepts"
              },
              {
                path: '/cf-docs-test/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/ssh-conceptual',
                component: ComponentCreator('/cf-docs-test/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/ssh-conceptual', '352'),
                exact: true,
                sidebar: "cloudfoundryConcepts"
              },
              {
                path: '/cf-docs-test/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/understand-cf-networking',
                component: ComponentCreator('/cf-docs-test/docs-cloudfoundry-concepts/cloudfoundry-concepts/security-and-networking/understand-cf-networking', '6c1'),
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
    path: '/cf-docs-test/docs-dev-guide',
    component: ComponentCreator('/cf-docs-test/docs-dev-guide', 'c40'),
    routes: [
      {
        path: '/cf-docs-test/docs-dev-guide',
        component: ComponentCreator('/cf-docs-test/docs-dev-guide', '55d'),
        routes: [
          {
            path: '/cf-docs-test/docs-dev-guide',
            component: ComponentCreator('/cf-docs-test/docs-dev-guide', 'a79'),
            routes: [
              {
                path: '/cf-docs-test/docs-dev-guide',
                component: ComponentCreator('/cf-docs-test/docs-dev-guide', '218'),
                exact: true,
                sidebar: "devGuideSidebar"
              },
              {
                path: '/cf-docs-test/docs-dev-guide/deploy-apps',
                component: ComponentCreator('/cf-docs-test/docs-dev-guide/deploy-apps', '067'),
                exact: true,
                sidebar: "devGuideSidebar"
              },
              {
                path: '/cf-docs-test/docs-dev-guide/deploy-apps/deploy-app',
                component: ComponentCreator('/cf-docs-test/docs-dev-guide/deploy-apps/deploy-app', 'f41'),
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
    path: '/cf-docs-test/',
    component: ComponentCreator('/cf-docs-test/', 'dbe'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
