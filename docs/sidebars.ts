import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [
  //   {
  //     type: 'autogenerated', 
  //     dirName: '.'
  //   }
  // ],
  mainSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        'getting-started/installation',
        'getting-started/quickstart',
        'getting-started/usage'
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'doc',
          label: 'Combining Sections',
          id: 'guides/combine-sections'
        },
        {
          type: 'doc',
          label: 'Connecting Task Flows',
          id: 'guides/connect-task-flows-together'
        },
        {
          type: 'category',
          label: 'Full Tutorials',
          items: [
            {
              type: 'category',
              label: 'Building with STRUDEL',
              items: [
                'guides/tutorials/basic-app-with-strudel/introduction',
                'guides/tutorials/basic-app-with-strudel/setup'
              ]
            }
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Task Flows',
      items: [
        'task-flows/overview',
        'task-flows/compare-data',
        'task-flows/contribute-data',
        'task-flows/explore-data',
        'task-flows/monitor-activities',
        'task-flows/run-computation',
        'task-flows/search-data-repositories',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        'components/overview',
        'components/LabelValueTable',
        'components/LinearMeter',
      ],
    },
    {
      type: 'doc',
      label: 'CLI Reference',
      id: 'cli/reference'
    },
  ],
};

export default sidebars;
