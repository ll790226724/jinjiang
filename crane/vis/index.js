const dealNumber = require('./deal_number');
const satisfaction = require('./satisfaction');
const overdue = require('./overdue');
const demandTye = require('./demand_type');
const departmentRanking = require('./department_ranking');
const percentage = require('./percentage');
const eventSource = require('./event_source');
const demandTypeBar = require('./demand_type_bar');
const table = require('./table');

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
    }
  ],

  components: [
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
            // $options: "[{label: '东光街道办事处', uuid: 1}, {label: '牛市口街道办事处', uuid: 2}]",
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
      props: {
        $style: {
          zIndex: 2,
        },
      },
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
      id: 'background',
      component: 'img',
      position: [0, 0],
      props: {
        src: '/jinjiang/images/bg.png'
      },
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
    table
  ],
};
