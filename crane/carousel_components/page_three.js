module.exports = {
  id: 'page_three',
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
      position: [160, 65],
      props: {
        $style: {
          height: '955px',
          width: '1600px',
          background: "linear-gradient(180deg, #c0d5e8, rgba(27,116,239, 0))",
          borderRadius: '4px'
        }
      },
      children: [
        {
          id: 'page-2-chart-bar-circle',
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
          id: 'page-2-chart-bar-title',
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
          content: '部门承办量 & 回访情况 & 平均回复时间',
        },
        {
          component: '@byzanteam/vis-components/data-loader',
          position: [210, 181],
          exports: {
            results: 'results',
          },
          props: {
            $url: "`/v1/components/e9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`",
            method: 'get',
            $style: {
              width: '1500px',
              height: '730px'
            },
          },
          children: [
            {
              component: 'vue-echarts/v-chart',
              props: {
                'v-if': 'results',
                $options: {
                  tooltip: {
                    trigger: 'axis',
                    backgroundColor: '#ffffff',
                    $textStyle: {
                      color: '#2e2e2e',
                      fontSize: '26px',
                    },
                    $formatter: 'formatterFunc',
                  },
                  $legend: {
                    $data: 'Object.keys(craneStates.chartLegendsMap).map((item) => {return craneStates.chartLegendsMap[item].name})',
                    right: '80px',
                    width: '736px',
                    $textStyle: {
                      fontSize: '18px'
                    }
                  },
                  $color: "['#15c689','#bb4430', '#ffba08', '#a2aebb', '#1b74ef','#74797f']",
                  $xAxis: "[{type: 'category', axisLabel: {rotate: 20, interval: 0, color: '#2e2e2e', fontSize: '18px'}, data: results.map((item) => {return {date: item[0], satisfied: item[1], unsatisfied: item[2], basicly: item[3], unknown: item[4], callbacked: item[5], day: item[6].toFixed(2)} }).map((item) => {return item.date}), axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}]",
                  $yAxis: "[{type: 'value', axisLabel: { color: '#2e2e2e', fontSize: '16px'}, scale: true, name: '件', axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}, {type: 'value', scale: true, name: '天', boundaryGap: [0.2, 0.2], axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}]",
                  $grid: "{bottom: 110}",
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
                  $series: "Object.keys(craneStates.chartLegendsMap).map(item => {return {...craneStates.chartLegendsMap[item], data: results.map((item) => {return {date: item[0], satisfied: item[1], unsatisfied: item[2], basicly: item[3], unknown: item[4], callbacked: item[5], day:  parseFloat(item[6]).toFixed(2) } }).map(data => data[item])}})"
                }
              }
            }
          ]
        }
      ]
    }
  ]
}
