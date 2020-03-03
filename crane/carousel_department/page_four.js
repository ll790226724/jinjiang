module.exports = {
  id: 'page_four',
  component: 'div',
  props: {
    class: 'carousel-item',
    $style: {
      $transform: "`translateX(${1920 * (4 - craneStates.pageIndex)}px)`"
    }
  },
  children: [
    {
      component: 'div',
      position: [160, 65],
      props: {
        $style: {
          height: '955px',
          width: '1600px',
          background: "linear-gradient(180deg, #c0d5e8, rgba(27,116,239, 0))",
          borderRadius: '4px'
        }
      },
    },
    {
      id: 'page-2-chart-line-circle',
      component: 'div',
      position: [210, 126],
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
      id: 'page-2-chart-line-title',
      component: 'div',
      position: [234, 115],
      props: {
        $style: {
          color: '#2E2E2E',
          fontSize: '26px',
          fontWeight: '500',
          textAlign: 'left',
          letterSpacing: '0.9',
        },
      },
      content: '接件趋势',
    },
    // 接件-月
    {
      id: 'jiejianqushi-month',
      component: '@byzanteam/vis-components/data-loader',
      position: [210, 199],
      exports: {
        results: 'results',
      },
      props: {
        'v-if': '!craneStates.showDayChart',
        $url: '`/v1/components/f7b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}&department=${craneStates.department}`',
        method: 'get',
        $style: {
          width: '1500px',
          height: '708px'
        },
      },
      children: [
        {
          component: 'vue-echarts/v-chart',
          props: {
            $options: {
              tooltip: {
                trigger: 'axis',
                $formatter: 'tooltipFormatterFunc',
                backgroundColor: '#ffffff',
                $textStyle: {
                  color: '#2e2e2e',
                  fontSize: '14px',
                }
              },
              $color: "['#1b74ef', '#74797f']",
              $xAxis: "[{type: 'category', axisLabel: {rotate: 20, interval: 0, color: '#2e2e2e', fontSize: '18px'}, data: results.map(result => (new Date(result[0]).toISOString().slice(0, 7))), axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: true, lineStyle: {color: ['#666666'], type: 'dashed'}}}]",
              $yAxis: "[{type: 'value', axisLabel: {color: '#2e2e2e', fontSize: '16px'}, scale: true, name: '件', axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}, {type: 'value', scale: true, name: '%', axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}]",
              $grid: "{bottom: 80}",
              $dataZoom: {
                type: 'slider',
                show: true,
                $xAxisIndex: "[0]",
                $handleStyle: {
                  color: '#1b74ef'
                },
                $startValue: 0,
                $endValue: 19,
              },
              $series: "[{type: 'line', name: '接件(件)', symbolSize: 5.5, lineStyle: {width: 3}, yAxisIndex: 0, data: results.map(result => (result[1]))}, {type: 'line', name: '同上月增长', symbolSize: 8, lineStyle: {width: 3}, yAxisIndex: 1, data: results.map(result => (result[3].toFixed(2)))}]"
            },
          }
        }
      ]
    },
    // 接件-日
    {
      id: 'jiejianqushi-day',
      component: '@byzanteam/vis-components/data-loader',
      position: [210, 199],
      exports: {
        results: 'results',
      },
      props: {
        'v-if': 'craneStates.showDayChart',
        $url: '`/v1/components/07b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}&format=${craneStates.chartFormat}&department=${craneStates.department}`',
        method: 'get',
        $style: {
          width: '1500px',
          height: '708px'
        },
      },
      children: [
        {
          component: 'vue-echarts/v-chart',
          props: {
            $options: {
              tooltip: {
                trigger: 'axis',
                backgroundColor: '#ffffff',
                $textStyle: {
                  color: '#2e2e2e',
                  fontSize: '14px',
                }
              },
              $color: "['#1b74ef']",
              $xAxis: "[{type: 'category', axisLabel: {rotate: 20, interval: 0, color: '#2e2e2e', fontSize: '18px'}, data: results.map(result => (new Date(result[1]).toISOString().slice(0, 10))), axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: true, lineStyle: {color: ['#666666'], type: 'dashed'}}}]",
              $yAxis: "[{type: 'value', axisLabel: {color: '#2e2e2e', fontSize: '16px'}, scale: true, name: '件', axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}]",
              $grid: "{bottom: 80}",
              $dataZoom: {
                type: 'slider',
                show: true,
                $xAxisIndex: "[0]",
                $handleStyle: {
                  color: '#1b74ef'
                },
                $startValue: 0,
                $endValue: 19,
              },
              $series: "[{type: 'line', name: '接件（件）', symbolSize: 8, lineStyle: {width: 3}, data: results.map(result => (result[0]))}]"
            },
          }
        }
      ]
    },
    // tab
    {
      id: 'page2-chart-tab',
      component: '@byzanteam/vis-components/data-loader',
      position: [1575, 112],
      exports: {
        results: 'results',
      },
      props: {
        $style: {
          width: '126px',
          height: '48px',
        },
      },
      children: [
        {
          component: '@byzanteam/vis-components/brick-tabs',
          directive: {
            model: 'craneStates.chartTabCurrent',
          },
          props: {
            $tabNavs: 'craneStates.chartTabNavs',
            $activeTab: 'craneStates.chartTabCurrent'
          }
        }
      ]
    }
  ]
}
