const banlishuliang = require('./banjianshuliang')
const donut = require('./donut')
const ranking = require('./ranking')
const bumenchengbanliang = require('./bumenchengbanliang')
const jiejianqushi = require('./jiejianqushi')
const suqiuleixing = require('./suqiuleixing')

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
      id: 'filterRange',
      value: ['1991-01-01', '2020-01-07']
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
        {label: '公安分局', aa: 30, bb: 43, cc: 138, dd: 80, ee: 0.34, ff: 1.2},
        {label: '综合行政执法局', aa: 60, bb: 83, cc: 108, dd: 60, ee: 1.34, ff: 2.2},
        {label: '合江亭街道办事处', aa: 70, bb: 83, cc: 108, dd: 60, ee: 8.34, ff: 1.2},
        {label: '成龙路街道办事处', aa: 75, bb: 83, cc: 108, dd: 60, ee: 7.03, ff: 0.2},
        {label: '退役军人事务局', aa: 56, bb: 83, cc: 108, dd: 60, ee: 6.01, ff: 0.2},
        {label: '龙舟路街道办事处', aa: 80, bb: 83, cc: 108, dd: 60, ee: 2.04, ff: 0.2},
        {label: '人社局', aa: 34, bb: 83, cc: 108, dd: 60, ee: 1.34, ff: 0.2},
        {label: '住房建设和交通运输局', aa: 70, bb: 83, cc: 108, dd: 60, ee: 5.34, ff: 6.2},
        {label: '三圣街道办事处', aa: 55, bb: 83, cc: 108, dd: 60, ee: 8.84, ff: 7.4},
        {label: '社会事物科', aa: 70, bb: 83, cc: 108, dd: 60, ee: 1.54, ff: 3.4},
        {label: '公安分局1', aa: 30, bb: 43, cc: 138, dd: 80, ee: 0.34, ff: 1.2},
        {label: '综合行政执法局1', aa: 60, bb: 83, cc: 108, dd: 60, ee: 1.34, ff: 2.2},
        {label: '合江亭街道办事处1', aa: 70, bb: 83, cc: 108, dd: 60, ee: 8.34, ff: 1.2},
        {label: '成龙路街道办事处1', aa: 75, bb: 83, cc: 108, dd: 60, ee: 7.03, ff: 0.2},
        {label: '退役军人事务局1', aa: 56, bb: 83, cc: 108, dd: 60, ee: 6.01, ff: 0.2},
        {label: '龙舟路街道办事处1', aa: 80, bb: 83, cc: 108, dd: 60, ee: 2.04, ff: 0.2},
        {label: '人社局1', aa: 34, bb: 83, cc: 108, dd: 60, ee: 1.34, ff: 0.2},
        {label: '住房建设和交通运输局1', aa: 70, bb: 83, cc: 108, dd: 60, ee: 5.34, ff: 6.2},
        {label: '三圣街道办事处1', aa: 55, bb: 83, cc: 108, dd: 60, ee: 8.84, ff: 7.4},
        {label: '社会事物科1', aa: 70, bb: 83, cc: 108, dd: 60, ee: 1.54, ff: 3.4},
        {label: '公安分局2', aa: 30, bb: 43, cc: 138, dd: 80, ee: 0.34, ff: 1.2},
        {label: '综合行政执法局2', aa: 60, bb: 83, cc: 108, dd: 60, ee: 1.34, ff: 2.2},
        {label: '合江亭街道办事处2', aa: 70, bb: 83, cc: 108, dd: 60, ee: 8.34, ff: 1.2},
        {label: '成龙路街道办事处2', aa: 75, bb: 83, cc: 108, dd: 60, ee: 7.03, ff: 0.2},
        {label: '退役军人事务局2', aa: 56, bb: 83, cc: 108, dd: 60, ee: 6.01, ff: 0.2},
        {label: '龙舟路街道办事处2', aa: 80, bb: 83, cc: 108, dd: 60, ee: 2.04, ff: 0.2},
        {label: '人社局2', aa: 34, bb: 83, cc: 108, dd: 60, ee: 1.34, ff: 0.2},
        {label: '住房建设和交通运输局2', aa: 70, bb: 83, cc: 108, dd: 60, ee: 5.34, ff: 6.2},
        {label: '三圣街道办事处2', aa: 55, bb: 83, cc: 108, dd: 60, ee: 8.84, ff: 7.4},
        {label: '社会事物科2', aa: 70, bb: 83, cc: 108, dd: 60, ee: 1.54, ff: 3.4},
      ]
    },
    {
      id: 'chartLegendsMap',
      value: {
        aa: { name: '满意', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 7.5 },
        bb: { name: '不满意', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 7.5 },
        cc: { name: '无法判断满意状况', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 7.5 },
        dd: { name: '基本满意', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 7.5 },
        ee: { name: '回访情况', type: 'line', yAxisIndex: 1, symbolSize: 8 },
        ff: { name: '平均回复时间', type: 'line', yAxisIndex: 1, symbolSize: 8 }
      }
    },
  ],
  components: [
    {
      id: 'page-title',
      component: 'div',
      content: '锦江区网络理政',
      position: [822, 12],
      props: {
        $style: {
          color: '#2e2e2e',
          fontSize: '34px',
          $fontWeight: 500,
          textAlign: 'center',
          letterSpacing: '1px',
          $lineHeight: 1,
          display: 'inline-block',
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
        $url: '`/v1/components/d9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`',
        method: 'get',
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
            $options: "results.map(result => ({label: result[0], uuid: result[0]}))",
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
            'v-model': 'craneStates.filterRange',
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
    bumenchengbanliang,
    jiejianqushi,
    suqiuleixing
  ]
}
