export default {
  widgets: [
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
                  buildHookId: '5f8e1589c6e16e00836376a1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-i1jcvqw7',
                  apiId: 'c9bd988c-309b-46f8-b97b-3a7c5df1c141'
                },
                {
                  buildHookId: '5f8e158a9807aa0136cc4910',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mne58j7g',
                  apiId: 'a3b2ea34-39ca-4717-aaf8-87ab9edfb49d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stuartstevenlittle/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mne58j7g.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
