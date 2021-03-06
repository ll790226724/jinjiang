module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [330, 673],
  exports: {
    results: 'results',
  },
  props: {
    'v-if': '!craneStates.showDayChart',
    $url: '`/v1/components/f7b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}&department=${craneStates.department}`',
    method: 'get',
    $style: {
      width: '1300px',
      height: '308px'
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
          $xAxis: "[{type: 'category', axisLabel: {rotate: 20, interval: 0, color: '#2e2e2e', fontSize: '14px'}, data: results.map(result => (new Date(result[0]).toISOString().slice(0, 7))), axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: true, lineStyle: {color: ['#666666'], type: 'dashed'}}}]",
          $yAxis: "[{type: 'value', scale: true, name: '件', axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}, {type: 'value', scale: true, name: '%', axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}]",
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
          $series: "[{type: 'line', name: '接件(件)', symbolSize: 8, lineStyle: {width: 3}, yAxisIndex: 0, data: results.map(result => (result[1]))}, {type: 'line', name: '同上月增长', symbolSize: 8, lineStyle: {width: 3}, yAxisIndex: 1, data: results.map(result => (result[3].toFixed(2)))}]"
        },
      }
    }
  ]
}
