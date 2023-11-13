import snippets from './snippets';

export default {
  snippets,
  componentName: 'Input.Group',
  title: '输入框组合',
  category: '表单',
  devMode: 'proCode',
  npm: {
    package: 'antdv5-lowcode-materials',
    version: '0.1.0',
    exportName: 'Input',
    main: 'src\\index.tsx',
    destructuring: true,
    subName: 'Group',
  },
  props: [
    {
      name: 'compact',
      title: { label: '紧凑模式', tip: '是否用紧凑模式' },
      propType: 'bool',
      setter: 'BoolSetter'
    },
    {
      name: 'size',
      title: { label: '尺寸', tip: '尺寸大小' },
      propType: { type: 'oneOf', value: ['large', 'default', 'small'] },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '大',
              value: 'large',
            },
            {
              title: '中',
              value: 'middle',
            },
            {
              title: '小',
              value: 'small',
            },
          ],
        },
      },
      defaultValue: 'default',
    },
  ],
  configure: { component: { isContainer: true }, supports: { style: true } },
};
