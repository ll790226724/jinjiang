const dealNumber = require('./deal_number');
const satisfaction = require('./satisfaction');
const overdue = require('./overdue');
const demandTye = require('./demand_type');
const departmentRanking = require('./department_ranking');
const percentage = require('./percentage');
const eventSource = require('./event_source');
const demandTypeBar = require('./demand_type_bar');
const table = require('./table');
const bumenchengbanliang = require('./bumenchengbanliang');
const jiejianqushi = require('./jiejianqushi');
const departmentTab = require('./departmentTab');
const chartTab = require('./chart_tab');
const rankingRank = require('./ranking_rank');
const rankingRankEd = require('./ranking_rank_ed');

module.exports = {
  route: {
    name: 'vis',
    path: 'vis',
  },

  title: '锦江区网络理政',

  states: [
    {
      id: 'chainArray',
      value: []
    },
    {
      id: 'tableKeyMap',
      value: {
        total: '诉求量（件）',
        summary: '市民诉求内容',
        departments: '承办部门',
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
      id: 'defaultFilterRange',
      value:  ['', ''],
    },
    {
      id: 'chartLegendsMap',
      value: {
        satisfied: { name: '满意', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 7.5 },
        unsatisfied: { name: '不满意', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 7.5 },
        unknown: { name: '无法判断满意状况', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 7.5 },
        basicly: { name: '基本满意', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 7.5 },
        callbacked: { name: '回访情况', type: 'line', yAxisIndex: 0, symbolSize: 8 },
        day: { name: '平均回复时间', type: 'line', yAxisIndex: 1, symbolSize: 8 }
      }
    },
    {
      id: 'tabNavs',
      value: [
        {
          uuid: 1,
          label: '排名情况'
        },
        {
          uuid: 2,
          label: '全部部门'
        }
      ]
    },
    {
      id: 'tabCurrent',
      value:
        {
          uuid: 1,
          label: '排名情况',
        },
    },
    {
      id: 'hideTable',
      value: false,
    },
    {
      id: 'rank',
      value: true
    },
    {
      id: 'chartTabNavs',
      value: [
        {
          uuid: 1,
          label: '月'
        },
        {
          uuid: 2,
          label: '日'
        },
      ]
    },
    {
      id: 'chartTabCurrent',
      value: {
        uuid: 2,
        label: '日'
      }
    },
    {
      id: 'chartFormat',
      value: 'YYYY-MM-DD'
    }
  ],

  components: [
    {
      id: 'background',
      component: 'img',
      position: [0, 0],
      props: {
        src: '/jinjiangwllz/images/bg.png'
      },
    },
    {
      id: 'page-title',
      component: 'div',
      content: '锦江区网络理政大数据分析',
      position: [745, 13],
      props: {
        $style: {
          width: '430px',
          height: '36px',
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
      id: 'source-end-date-content',
      component: 'div',
      position: [429, 32],
      props: {
        $style: {
          color: '#2E2E2E',
          fontSize: '14px',
          fontWeight: 400,
          textAlign: 'left'
        },
      },
      content: "{{'*该数据截止时间 ' + craneStates.endRange }}"
    },
    {
      id: 'departments-loader',
      component: '@byzanteam/vis-components/data-loader',
      position: [1195, 14],
      exports: {
        results: 'results',
      },
      props: {
        $url: "`/v1/components/d9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`",
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
      position: [1387, 14],
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
            $pickerOptions: {
              $disabledDate: 'disableDateFunc'
            },
            'v-model': 'craneStates.dateRange',
            'start-placeholder': '开始日期',
            'end-placeholder': '结束日期',
            'range-separator': ' ',
          },
        },
      ],
    },
    {
      id: 'date-limit',
      component: '@byzanteam/vis-components/data-loader',
      props: {
        url: '/v1/components/12b74ddd-39de-493f-84ab-9d87fcf23fee/data',
        method: 'get',
      },
      events: {
        'requestDone': {
          actions: ["setState('dateRangeLimit', getComponent('date-limit').results[0])"]
        }
      },
    },
    {
      id: 'digital-background-top',
      component: 'div',
      position: [26, 86],
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
      position: [26, 207],
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
      position: [42, 364],
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
      position: [58, 357],
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
      position: [1580, 109],
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
      position: [432, 107],
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
      position: [1596, 102],
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
      position: [1704, 107],
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
      position: [42, 668],
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
      position: [58, 661],
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
        'v-if': 'craneStates.hideTable',
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
      position: [448, 102],
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
      position: [432, 666],
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
      position: [448, 661],
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
        'v-if': 'craneStates.hideTable',
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
      position: [1564, 85],
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
      position: [1580, 668],
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
      position: [1596, 661],
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
      position: [1681, 663],
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
      id: 'top-img',
      component: 'div',
      position: [1579, 231],
      props:{
        'v-if': 'craneStates.rank',
        $style: {
          height: '20px'
        }
      },
      children: [
        {
          component: 'img',
          props: {
            src: '/jinjiangwllz/images/icon-Trophy1.svg'
          }
        }
      ]
    },

    {
      id: 'top3-text',
      component: 'div',
      position: [1606, 234],
      props: {
        'v-if': 'craneStates.rank',
        $style: {
          color: '#418CFF',
          fontSize: '14px',
          fontWeight: 400,
          textAlign: 'left'
        }
      },
      content: '排名前三'
    },

    {
      id: 'ed-img',
      component: 'div',
      position: [1579, 434],
      props:{
        'v-if': 'craneStates.rank',
        $style: {
          height: '20px'
        }
      },
      children: [
        {
          component: 'img',
          props: {
            src: '/jinjiangwllz/images/icon-Trophy2.svg'
          }
        }
      ]
    },

    {
      id: 'ed3-text',
      component: 'div',
      position: [1606, 437],
      props: {
        'v-if': 'craneStates.rank',
        $style: {
          color: '#418CFF',
          fontSize: '14px',
          fontWeight: 400,
          textAlign: 'left'
        }
      },
      content: '排名后三'
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
    jiejianqushi,
    departmentTab,
    chartTab,
    rankingRank,
    rankingRankEd
  ],
};
