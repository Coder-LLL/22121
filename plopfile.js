module.exports = plop => {
  plop.setGenerator('component', {
    description: 'create a custom component',
    // 通过交互式的方式提示用户输入一个名字
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name',
      default: 'MyComponent'
    }],
    // 把基于模板创建的文件放到指定的目录
    actions: [{
        type: 'add',
        path: 'packages/{{name}}/src/{{name}}.vue',
        templateFile: 'plop/component/src/component.vue'
      },
      // {
      //   type: 'add',
      //   path: 'packages/{{name}}/__tests__/{{name}}.test.js',
      //   templateFile: 'plop-template/component/__tests__/component.test.hbs'
      // },
      // {
      //   type: 'add',
      //   path: 'packages/{{name}}/stories/{{name}}.stories.js',
      //   templateFile: 'plop-template/component/stories/component.stories.hbs'
      // },
      {
        type: 'add',
        path: 'packages/{{name}}/src/style/{{name}}.scss',
        templateFile: 'plop/component/src/style/component.scss'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/index.js',
        templateFile: 'plop/component/index.js'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/LICENSE',
        templateFile: 'plop/component/LICENSE'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/package.json',
        templateFile: 'plop/component/package.json'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/README.md',
        templateFile: 'plop/component/README.md'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/example/index.html',
        templateFile: 'plop/component/example/index.html'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/example/fonts/element-icons.ttf',
        templateFile: 'plop/component/example/fonts/element-icons.ttf',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/example/fonts/element-icons.woff',
        templateFile: 'plop/component/example/fonts/element-icons.woff',
      },
    ]
  })
}