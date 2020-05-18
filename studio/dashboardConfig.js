export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ec21609496fb5ff541e1cde',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-n8c9z6sr',
                  apiId: 'fc0e04d4-7a5d-44c2-b798-9846ac890fb4'
                },
                {
                  buildHookId: '5ec2160911c8e0a6d726d70d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-tem1pcfc',
                  apiId: '3b66e602-d1f7-4f07-a7bd-1ed56bb15de5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sdfawcett/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-tem1pcfc.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
