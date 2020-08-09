export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2ff5c317794bd80166ab56',
                  title: 'Sanity Studio',
                  name: 'devmetal-sanity-nextjs-studio',
                  apiId: '8d1b0258-cad3-4954-b7a5-50bebdd83224'
                },
                {
                  buildHookId: '5f2ff5c3bf54e9daf37197dc',
                  title: 'Landing pages Website',
                  name: 'devmetal-sanity-nextjs',
                  apiId: 'f99073c1-fc04-479e-a29d-134878d10c0e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/devmetalbr/devmetal-sanity-nextjs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://devmetal-sanity-nextjs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
