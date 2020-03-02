const { chartTooltipOptions } = require('../share');

module.exports = {
  id: 'page_two',
  component: 'div',
  props: {
    class: 'carousel-item',
    $style: {
      $transform: "`translateX(${1920 * (1 - craneStates.pageIndex)}px)`"
    }
  },
  children: [
    {
      component: 'div',
      position: [319, 65],
      props: {
        $style: {
          height: '955px',
          width: '1300px',
          background: "linear-gradient(180deg, #c0d5e8, rgba(27,116,239, 0))"
        }
      },
      children: [
        // 部门承办量
        {
          id: 'page-2-department-circle',
          component: 'div',
          position: [360, 126],
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
          id: 'page-2-department-title',
          component: 'div',
          position: [384, 115],
          props: {
            $style: {
              color: '#2E2E2E',
              fontSize: '26px',
              fontWeight: '500',
              textAlign: 'left',
              letterSpacing: '0.9',
            },
          },
          content: '部门承办量',
        },
        {
          id: 'page-2-department-suffix',
          component: 'div',
          position: [533, 122],
          props: {
            $style: {
              color: '#2E2E2E80',
              fontSize: '18px',
              fontWeight: '400',
              textAlign: 'left',
            },
          },
          content: '/件',
        },
        {
          id: 'ranking_rank',
          component: '@byzanteam/vis-components/data-loader',
          position: [417, 349],
          exports: {
            results: 'results',
          },
          props: {
            $url: "`/v1/components/f5b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`",
            method: 'get',
            $data: "[{label: '承办单位', amount: 12}]",
            $style: {
              width: '436px',
              maxHeight: '186px',
              padding: '8px',
              overflow: 'scroll'
            },
          },
          children: [
            {
              id: 'department-ranking-content',
              component: '@byzanteam/vis-components/ranking',
              props: {
                'v-if': 'craneStates.rank',
                $data: "results.slice(0, 3).map(item => { return {label: item[1], amount: item[0] } } )",
                $keys: {
                  label: 'label',
                  value: 'amount',
                  tooltip: 'name'
                },
                $labelStyle: {
                  color: '#666666',
                  fontSize: '20px',
                  lineHeight: '30px',
                  fontWeight: '400'
                },
                $valueStyle: {
                  color: '#2E2E2E',
                  fontSize: '20px',
                  lineHeight: '30px',
                  fontWeight: 400,
                },
                $lineStyle: {
                  background: 'rgba(46, 46, 46, 0.05)',
                  $lineColor: "['#1B74EF', '#1B74EF80']",
                  height: '4px',
                  borderRadius: '2px'
                },
                ...chartTooltipOptions
              },
            },
          ],
        },
        {
          id: 'ranking_rank_ed',
          component: '@byzanteam/vis-components/data-loader',
          position: [417, 669],
          exports: {
            results: 'results',
          },
          props: {
            $url: "`/v1/components/f5b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`",
            method: 'get',
            $data: "[{label: '承办单位', amount: 12}]",
            $style: {
              width: '436px',
              maxHeight: '186px',
              padding: '8px',
              overflow: 'scroll'
            },
          },
          children: [
            {
              id: 'department-ranking-content',
              component: '@byzanteam/vis-components/ranking',
              props: {
                'v-if': 'craneStates.rank',
                $data: "results.slice(3, 6).map(item => { return {label: item[1], amount: item[0] } } )",
                $keys: {
                  label: 'label',
                  value: 'amount',
                  tooltip: 'name'
                },
                $labelStyle: {
                  color: '#666666',
                  fontSize: '20px',
                  lineHeight: '30px',
                  fontWeight: '400'
                },
                $valueStyle: {
                  color: '#2E2E2E',
                  fontSize: '20px',
                  lineHeight: '30px',
                  fontWeight: 400,
                },
                $lineStyle: {
                  background: 'rgba(46, 46, 46, 0.05)',
                  $lineColor: "['#1B74EF', '#1B74EF80']",
                  height: '4px',
                  borderRadius: '2px'
                },
                ...chartTooltipOptions
              },
            },
          ],
        },
        // 事件来源
        {
          id: 'page-2-event-source-circle',
          component: 'div',
          position: [1010, 126],
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
          id: 'page-2-event-source-title',
          component: 'div',
          position: [1034, 115],
          props: {
            $style: {
              color: '#2E2E2E',
              fontSize: '26px',
              fontWeight: '500',
              textAlign: 'left',
              letterSpacing: '0.9',
            },
          },
          content: '事件来源',
        },
        {
          id: 'page-2-event-source-suffix',
          component: 'div',
          position: [1155, 122],
          props: {
            $style: {
              color: '#2E2E2E80',
              fontSize: '18px',
              fontWeight: '400',
              textAlign: 'left',
            },
          },
          content: '/件',
        },
        {
          id: 'page-2-event-source',
          component: '@byzanteam/vis-components/data-loader',
          position: [1565, 690],
          exports: {
            results: 'results',
          },
          props: {
            $url: "`/v1/components/f3b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`",
            method: 'get',
            $data: "[{label: '事件来源', amount: 12}]",
            $style: {
              width: '649px',
              height: '553px',
            },
          },
          children: [
            {
              id: 'event-ranking-content',
              component: '@byzanteam/graphite/donut',
              props: {
                'v-if': 'results',
                $data: "results.map(item => { return {label: item[1], amount: item[0] } } )",
                labelKey: 'label',
                valueKey: 'amount',
                $percentage: true,
                $hideLabel: true,
                $theme: {
                  background: 'transparent',
                  $colors: "['#1B74EF', '#15C689', '#FFBA08', '#BB4430']",
                  whitespace: 'nowrap'
                },
                $legendOptions: {
                  size: '120px',
                  $align: "['start', 'center']",
                  layout: 'vertical',
                  $label: {
                    fill: '#2E2E2E',
                    $size: 20,
                  },
                  position: 'bottom',
                  $offset: "[0, 78]",
                },
                ...chartTooltipOptions
              },
            },
          ],
        },
        // tab
        {
          id: 'page-2-department-tab',
          component: '@byzanteam/vis-components/data-loader',
          position: [513, 194],
          exports: {
            results: 'results',
          },
          props: {
            $style: {
              width: '245px',
              height: '48px',
            },
          },
          children: [
            {
              component: '@byzanteam/vis-components/brick-tabs',
              directive: {
                model: 'craneStates.tabCurrent',
              },
              props: {
                $tabNavs: 'craneStates.tabNavs',
                $activeTab: 'craneStates.tabCurrent'
              }
            }
          ]
        }
      ]
    }
  ]
}
