const banlishuliang = require('./banjianshuliang')
const donut = require('./donut')
const ranking = require('./ranking')
const bumenchengbanliang = require('./bumenchengbanliang')

module.exports = {
  route: {
    name: 'vis',
  },
  title: '锦江区网络理政',
  states: [
    {
      id: 'department',
      value: ''
    },
    {
      id: 'donutData',
      value: [
        {label: '表扬', value: 10},
        {label: '求助', value: 10},
        {label: '咨询', value: 30},
        {label: '投诉举报', value: 20}
      ]
    },
    {
      id: 'rankingData',
      value: [
        {label: '东光街道办事处', value: 10},
        {label: '牛市口街道办事处', value: 10},
        {label: '双桂路街道办事处', value: 30},
        {label: '督院街街道办事处', value: 20}
      ]
    },
    {
      id: 'echartData',
      value: [
        {label: '公安分局', aa: 80, bb: 43, cc: 138, dd: 80, ee: 0.34, ff: 1.2},
        {label: '综合行政执法局', aa: 70, bb: 83, cc: 108, dd: 60, ee: 1.34, ff: 2.2},
        {label: '合江亭街道办事处', aa: 70, bb: 83, cc: 108, dd: 60, ee: 8.34, ff: 1.2},
        {label: '成龙路街道办事处', aa: 70, bb: 83, cc: 108, dd: 60, ee: 7.03, ff: 0.2},
        {label: '退役军人事务局', aa: 70, bb: 83, cc: 108, dd: 60, ee: 6.01, ff: 0.2},
        {label: '龙舟路街道办事处', aa: 70, bb: 83, cc: 108, dd: 60, ee: 2.04, ff: 0.2},
        {label: '人社局', aa: 70, bb: 83, cc: 108, dd: 60, ee: 1.34, ff: 0.2},
        {label: '住房建设和交通运输局', aa: 70, bb: 83, cc: 108, dd: 60, ee: 5.34, ff: 6.2},
        {label: '三圣街道办事处', aa: 70, bb: 83, cc: 108, dd: 60, ee: 8.84, ff: 7.4},
        {label: '社会事物科', aa: 70, bb: 83, cc: 108, dd: 60, ee: 1.54, ff: 3.4},
      ]
    },
    {
      id: 'chartLegendsMap',
      value: {
        aa: { name: '满意', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 12 },
        bb: { name: '不满意', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 12 },
        cc: { name: '无法判断满意状况', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 12 },
        dd: { name: '基本满意', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 12 },
        ee: { name: '回访情况', type: 'line', yAxisIndex: 1 },
        ff: { name: '平均回复时间', type: 'line', yAxisIndex: 1 }
      }
    },
    {
      id: 'chartLabels',
      value: ['公安分局', '综合行政执法局', '合江亭街道办事处', '成龙路街道办事处', '退役军人事务局', '龙舟路街道办事处', '人社局', '住房建设和交通运输局', '三圣街道办事处', '社会事物科']
    },
    {
      id: 'chartLegend',
      value: ['aa', 'bb', 'cc', 'dd', 'ee', 'ff']
    }
  ],
  components: [
    {
      id: 'page-title',
      component: 'div',
      content: '锦江区网络理政',
      props: {
        $style: {
          color: '#2e2e2e',
          fontSize: '34px',
          $fontWeight: 500,
          textAlign: 'center',
          letterSpacing: '1px'
        }
      }
    },
    {
      id: 'page-tip',
      component: 'label',
      position: [429, 30],
      content: '* 该数据截至时间 2019年12月31日',
      props: {
        $style: {
          color: '#2e2e2e',
          fontSize: '14px',
          $fontWeight: 400,
        }
      }
    },
    {
      id: 'departments-loader',
      component: '@byzanteam/vis-components/data-loader',
      position: [1117, 12],
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
      position: [1310, 12],
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
      position: [259, 80],
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
          display: 'flex',
          $zIndex: 4
        }
      },
      children: [
        {
          id: 'weather-text-value',
          component: 'span',
          children: [
            {
              component: 'span',
              content: '2%',
            },
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
    {
      component: 'label',
      position: [38, 277],
      props: {
        $style: {
          dispaly: 'flex',
          alignItems: 'center',
          color: '#2e2e2e',
          fontSize: '18px',
          $fontWeight: 500,
          letterSpacing: '0.9px'
        }
      },
      children: [
        {
          component: 'span',
          content: ''
        },
        {
          component: 'span',
          content: '诉求性质'
        }
      ]
    },
    banlishuliang,
    donut,
    ranking,
    bumenchengbanliang
  ]
}
