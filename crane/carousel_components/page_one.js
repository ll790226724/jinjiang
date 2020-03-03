const { chartTooltipOptions } = require('../share');

module.exports = {
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
        {
          component: 'div',
          position: [41, 59],
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
          component: 'div',
          position: [69, 50],
          props: {
            $style: {
              color: '#2E2E2E',
              fontSize: '26px',
              fontWeight: '500',
              textAlign: 'left',
              letterSpacing: '0.9',
            },
          },
          content: '诉求性质',
        },
        {
          component: '@byzanteam/vis-components/data-loader',
          position: [101, 91],
          exports: {
            results: 'results',
          },
          props: {
            $url: "`/v1/components/b9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`",
            method: 'get',
            $data: "[{label: '投诉性质', amount: 12}]",
            $style: {
              width: '860px',
              height: '369px',
            }
          },
          children: [
            {
              component: '@byzanteam/graphite/donut',
              props: {
                'v-if': 'results',
                $data: "results.map(item => { return {label: item[1], amount: item[0] } } )",
                labelKey: 'label',
                valueKey: 'amount',
                $innerRadius: '0.53',
                $percentage: 'true',
                $hideLabel: true,
                $theme: {
                  background: 'transparent',
                  $colors: "['#1B74EF', '#15C689', '#FFBA08', '#BB4430', '#A2AEBB', '#7B92B5']",
                  whitespace: 'nowrap'
                },
                $legendOptions: {
                  size: '120px',
                  $align: "['center', 'start']",
                  layout: 'vertical',
                  $label: {
                    fill: '#2E2E2E',
                    $size: 20,
                  },
                  position: 'right',
                  $offset: "[0, 0]",
                },
                ...chartTooltipOptions
              }
            }
          ]
        },
        {
          component: 'div',
          position: [49, 477],
          props: {
            $style: {
              height: '1px',
              width: '1200px',
              borderBottom: '1px solid #2e2e2e',
              opacity: '.1'
            }
          }
        },
        {
          component: 'div',
          position: [42, 537],
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
          component: 'div',
          position: [65, 528],
          props: {
            $style: {
              color: '#2E2E2E',
              fontSize: '26px',
              fontWeight: '500',
              textAlign: 'left',
              letterSpacing: '0.9',
            },
          },
          content: '诉求类型',
        },
        {
          component: '@byzanteam/vis-components/data-loader',
          position: [41, 584],
          exports: {
            results: 'results',
          },
          props: {
            $url:"`/v1/components/f4b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`",
            method: 'get',
            $data: "[{label: '投诉类型', amount: 12}]",
            $style: {
              width: '1200px',
              height: '370px'
            },
          },
          children: [
            {
              component: '@byzanteam/graphite/vertical-bar',
              props: {
                'v-if': 'results',
                $data: "results.map((result) => ({label: result[1], '数量（件）': result[0]}))",
                labelKey: 'label',
                valueKey: '数量（件）',
                $mainAxis: {
                  $labelStyle: {
                    $rotate: -45,
                    $size: 18,
                    fill: '#666666',
                  },
                  $labelLength: 7,
                  $lineStyle: {
                    stroke: 'transparent',
                  },
                },
                $crossAxis: {
                  $range: {
                    $count: 5,
                  },
                  $lineStyle: {
                    stroke: 'transparent',
                  },
                  $labelStyle: {
                    $size: 16,
                    fill: '#666666',
                  },
                  unit: {
                    content: '件',
                    fill: '#666666'
                  },
                },
                $gap: {
                  $outer: 4.7
                },
                $series: "['#1b74ef']",
                $theme: {
                  background: 'transparent',
                },
                ...chartTooltipOptions
              }
            }
          ]
        }
      ]
    }
  ]
}
