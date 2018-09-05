import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      hello: {
        link: '/component/changelog',
        name: 'Changelog'
      },
      docLinks: [
        {
          link: '/component/changelog',
          name: 'Changelog'
        },
        {
          link: '/component/installation',
          name: 'Installation'
        },
        {
          link: '/component/quick-start',
          name: 'Quick Start'
        },
        {
          link: '/component/button',
          name: 'Button'
        },
        {
          link: '/component/icon-button',
          name: 'Icon Button'
        },
        {
          link: '/component/text-input',
          name: 'Text Input'
        },
        {
          link: '/component/number-input',
          name: 'Number Input'
        },
        {
          link: '/component/textarea',
          name: 'Textarea'
        },
        {
          link: '/component/radio',
          name: 'Radio'
        },
        {
          link: '/component/checkbox',
          name: 'Checkbox'
        },
        {
          link: '/component/switch',
          name: 'Switch'
        },
        {
          link: '/component/select',
          name: 'Select'
        },
        {
          link: '/component/select-button',
          name: 'Select Button'
        },
        {
          link: '/component/search',
          name: 'Search'
        }
      ],
      linkIndexes: {
        changelog: 0,
        installation: 1,
        'quick-start': 2,
        button: 3,
        'icon-button': 4,
        'text-input': 5,
        'number-input': 6,
        textarea: 7,
        radio: 8,
        checkbox: 9,
        switch: 10,
        select: 11,
        'select-button': 12,
        search: 13
      }
    }
  })
}

export default createStore
