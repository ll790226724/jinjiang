const dealNumber = require('./deal_number');
const satisfaction = require('./satisfaction');
const overdue = require('./overdue');
const demandTye = require('./demand_type');
const departmentRanking = require('./department_ranking');
const percentage = require('./percentage');
const eventSource = require('./event_source');
const demandTypeBar = require('./demand_type_bar');
const table = require('./table');
const bumenchengbanliang = require('./bumenchengbanliang')
const jiejianqushi = require('./jiejianqushi')

module.exports = {
  route: {
    name: 'vis',
    path: 'vis',
  },

  title: '锦江区网络理政',

  states: [
    {
      id: 'tableKeyMap',
      value: {
        total: '诉求量（件）',
        summary: '市民诉求内容',
        departments: '承办部门',
      },
    },
    {
      id: 'mockMap',
      value: {
        data:
          [
          ['长沙市岳麓区，岳北社区B2栋3单元羽婕钢材批发，我们这是居民小区，现在一楼门面管理及差，但是乱象丛生。家中有老年人，由于噪音太大直街导致老人头晕眼花。', '春熙路街道办事处', 12],
          ['长沙市岳麓区，岳北社区B2栋3单元羽婕钢材批发，我们这是居民小区，现在一楼门面管理及差，但是乱象丛生。家中有老年人，由于噪音太大直街导致老人头晕眼花。', '春熙路街道办事处', 12],
          ['长沙市岳麓区，岳北社区B2栋3单元羽婕钢材批发，我们这是居民小区，现在一楼门面管理及差，但是乱象丛生。家中有老年人，由于噪音太大直街导致老人头晕眼花。', '春熙路街道办事处', 12],
          ['长沙市岳麓区，岳北社区B2栋3单元羽婕钢材批发，我们这是居民小区，现在一楼门面管理及差，但是乱象丛生。家中有老年人，由于噪音太大直街导致老人头晕眼花。', '春熙路街道办事处', 12],
        ],
        schema:
          [
            {field: 'summary', type: 'String'},
            {field: 'departments', type: 'String'},
            {field: 'total', type: 'Number'}
            ]
      },
    },
    {
      id: 'reg',
      value: /[,，]/g,
    },
    {
      id: 'department',
      value: ''
    },
    {
      id: 'filterRange',
      value: ['1991-01-01', new Date().toISOString().slice(0, 10)]
    },
    {
      id: 'defaultFilterRange',
      value:  ['1991-01-01', new Date().toISOString().slice(0, 10)],
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
      id: 'background',
      component: 'img',
      position: [0, 0],
      props: {
        src: '/jinjiang/images/bg.png'
      },
    },
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
      id: 'departments-loader',
      component: '@byzanteam/vis-components/data-loader',
      position: [1117, 12],
      exports: {
        results: 'results',
      },
      props: {
        url: '/v1/components/d9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=2018-01-01&end=2020-01-01',
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
            $options: 'results.map( (item, index) => { return {label: item[0], uuid: index } } )',
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
      id: 'digital-background-top',
      component: 'div',
      position: [26, 26],
      props: {
        $style: {
          height:'120px',
          width: '330px',
          backgroundColor: '#1B74EF',
          borderRadius: '4px',
        }
      },
    },

    {
      id: 'digital-background-bottom',
      component: 'div',
      position: [26, 147],
      props: {
        $style: {
          height:'100px',
          width: '330px',
          backgroundColor: '#E9F1FC',
          borderRadius: '4px',
        }
      },
    },

    {
      id: 'demand-type-circle',
      component: 'div',
      position: [42, 284],
      props: {
        $style: {
          height:'6px',
          width: '6px',
          borderRadius: '5px',
          borderWidth: '2px',
          borderColor: '#2E2E2E',
          borderStyle: 'solid',
        }
      },

    },

    {
      id: 'demand-type-title',
      component: 'div',
      position: [58, 277],
      props: {
        $style: {
          color: '#2E2E2E',
          fontSize: '18px',
          fontWeight: '500',
          textAlign: 'left',
          letterSpacing: '0.9',
        },
      },
      content: '诉求性质',
    },

    {
      id: 'department-circle',
      component: 'div',
      position: [42, 548],
      props: {
        $style: {
          boxSizing: 'content-box',
          height:'6px',
          width: '6px',
          borderRadius: '5px',
          borderWidth: '2px',
          borderColor: '#2E2E2E',
          borderStyle: 'solid',
        }
      },
    },
    {
      id: 'repeat-demand-circle',
      component: 'div',
      position: [432, 89],
      props: {
        $style: {
          boxSizing: 'content-box',
          height:'6px',
          width: '6px',
          borderRadius: '5px',
          borderWidth: '2px',
          borderColor: '#2E2E2E',
          borderStyle: 'solid',
        }
      },
    },
    {
      id: 'department-title',
      component: 'div',
      position: [58, 541],
      props: {
        $style: {
          color: '#2E2E2E',
          fontSize: '18px',
          fontWeight: '500',
          textAlign: 'left',
          letterSpacing: '0.9',
        },
      },
      content: '部门承办量',
    },

    {
      id: 'department-suffix',
      component: 'div',
      position: [166, 546],
      props: {
        $style: {
          color: '#2E2E2E80',
          fontSize: '14px',
          fontWeight: '400',
          textAlign: 'left',
        },
      },
      content: '/件',
    },

    {
      id: 'demand-bar-circle',
      component: 'div',
      position: [1580, 548],
      props: {
        $style: {
          boxSizing: 'content-box',
          height:'6px',
          width: '6px',
          borderRadius: '5px',
          borderWidth: '2px',
          borderColor: '#2E2E2E',
          borderStyle: 'solid',
        }
      },
    },

    {
      id: 'demand-bar-title',
      component: 'div',
      position: [1596, 542],
      props: {
        $style: {
          color: '#2E2E2E',
          fontSize: '18px',
          fontWeight: '500',
          textAlign: 'left',
          letterSpacing: '0.9',
        },
      },
      content: '诉求类型',
    },

    {
      id: 'repeat-demand-circle',
      component: 'div',
      position: [432, 859],
      props: {
        $style: {
          boxSizing: 'content-box',
          height:'6px',
          width: '6px',
          borderRadius: '5px',
          borderWidth: '2px',
          borderColor: '#2E2E2E',
          borderStyle: 'solid',
        }
      },
    },
    {
      id: 'repeat-demand-title',
      component: 'div',
      position: [448, 89],
      props: {
        $style: {
          color: '#2E2E2E',
          fontSize: '18px',
          fontWeight: '500',
          textAlign: 'left',
          letterSpacing: '0.9',
        },
      },
      content: '部门承办量 & 回访情况 & 平均回复时间',
    },
    {
      id: 'repeat-demand-circle',
      component: 'div',
      position: [432, 547],
      props: {
        $style: {
          boxSizing: 'content-box',
          height:'6px',
          width: '6px',
          borderRadius: '5px',
          borderWidth: '2px',
          borderColor: '#2E2E2E',
          borderStyle: 'solid',
        }
      },
    },
    {
      id: 'repeat-demand-title',
      component: 'div',
      position: [448, 541],
      props: {
        $style: {
          color: '#2E2E2E',
          fontSize: '18px',
          fontWeight: '500',
          textAlign: 'left',
          letterSpacing: '0.9',
        },
      },
      content: '接件趋势',
    },
    {
      id: 'repeat-demand-title',
      component: 'div',
      position: [448, 851],
      props: {
        $style: {
          color: '#2E2E2E',
          fontSize: '18px',
          fontWeight: '500',
          textAlign: 'left',
          letterSpacing: '0.9',
        },
      },
      content: '重复投诉统计',
    },
    {
      id: 'right-background',
      component: 'div',
      position: [1564, 26],
      props: {
        $style: {
          width: '330px',
          height: '841px',
          backgroundImage: 'linear-gradient(#1B74EF12, #1B74EF00)',
          borderRadius: '4px'
        },
      }
    },

    {
      id: 'event-source-circle',
      component: 'div',
      position: [1580, 50],
      props: {
        $style: {
          height:'6px',
          width: '6px',
          borderRadius: '5px',
          borderWidth: '2px',
          borderColor: '#2E2E2E',
          borderStyle: 'solid',
        }
      },

    },

    {
      id: 'event-title',
      component: 'div',
      position: [1596, 42],
      props: {
        $style: {
          color: '#2E2E2E',
          fontSize: '18px',
          fontWeight: '500',
          textAlign: 'left',
          letterSpacing: '0.9',
        },
      },
      content: '事件来源',
    },

    {
      id: 'event-suffix',
      component: 'div',
      position: [1681, 46],
      props: {
        $style: {
          color: '#2E2E2E80',
          fontSize: '14px',
          fontWeight: '400',
          textAlign: 'left',
        },
      },
      content: '/件',
    },

    dealNumber,
    satisfaction,
    overdue,
    demandTye,
    departmentRanking,
    percentage,
    eventSource,
    demandTypeBar,
    table,
    bumenchengbanliang,
    jiejianqushi
  ],
};
