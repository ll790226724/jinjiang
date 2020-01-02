const banlishuliang = require('./banjianshuliang')

module.exports = {
  route: {
    name: 'vis',
  },
  title: '锦江区网络理政',
  states: {},
  components: [
    {
      id: 'page-title',
      component: 'div',
      content: '锦江区网络理政'
    },
    {
      id: 'departments-loader',
      component: '@byzanteam/vis-components/data-loader',
      position: [1147, 15],
      exports: {
        results: 'results',
      },
      props: {
        url: '',
        method: 'post',
        $style: {
          width: '160px',
        },
      },
      children: [
        {
          id: 'departments-select',
          component: '@byzanteam/vis-components/vis-select',
          props: {
            'v-if': 'results',
            $options: "[{label: '东光街道办事处', uuid: 1}, {label: '牛市口街道办事处', uuid: 2}]",
            'v-model': 'craneStates.department',
            placeholder: '所有承办部门',
          },
        },
      ],
    },
    {
      id: 'datetime-picker-wrapper',
      component: 'div',
      position: [1327, 15],
      children: [
        {
          id: 'datetime-picker',
          component: 'element-ui/date-picker',
          props: {
            type: 'daterange',
            valueFormat: 'yyyy-MM-dd',
            format: 'yyyy-MM-dd',
            size: 'small',
            $unlinkPanels: 'true',
            'v-model': 'craneStates.filter_range',
            'start-placeholder': '开始日期',
            'end-placeholder': '结束日期',
            'range-separator': ' ',
          },
        },
      ],
    },
    {
      id: 'weather-text',
      component: '@byzanteam/vis-components/brick-tooltip',
      position: [123, 27],
      props: {
        content: "窗口办理量下降2%",
        placement: "bottom-right",
        $style: {
          width: '59px',
          height: '23px',
          backgroundColor: '#205bf6',
          borderRadius: '4px',
          color: '#ffffff',
          fontFamily: 'Oswald-Light',
          lineHeight: 1,
          paddingLeft: '6px',
          dispaly: 'flex',
          alignItems: 'center',
          display: 'flex'
        }
      },
      children: [
        {
          id: 'weather-text-value',
          component: 'span',
          content: '2%',
          children: [
            {
              id: 'weather-text-icon',
              component: '@byzanteam/vis-components/icon',
              props: {
                name: 'caret-down',
                size: '16px',
                color: 'white',
                $style: {
                  margin: '0 4px'
                }
              }
            }
          ]
        },
      ]
    },
    banlishuliang
  ]
}
