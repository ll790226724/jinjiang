module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [330, 705],
  exports: {
    results: 'results',
  },
  props: {
    $url: '`/v1/components/07b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}&department=${craneStates.department}&format=${craneStates.chartFormat}`',
    method: 'get',
    $style: {
      width: '1300px',
      height: '282px'
    },
  },
  children: [
    {
      component: 'vue-echarts/v-chart',
      props: {
        'v-if': 'craneStates.showDayChart',
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
          $xAxis: "[{type: 'category', axisLabel: {rotate: 20, interval: 0, color: '#2e2e2e', fontSize: '14px'}, data: results.map(result => (new Date(result[1]).toISOString().slice(0, 10))), axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: true, lineStyle: {color: ['#666666'], type: 'dashed'}}}]",
          $yAxis: "[{type: 'value', scale: true, name: '件', axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}]",
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
          $series: "[{type: 'line', name: '接件（件）', symbolSize: 8, lineStyle: {width: 3}, data: results.map(result => (result[0]))}, {type: 'line', name: '同昨日下降', symbolSize: 8, lineStyle: {width: 3}, data: results.map(result => (result[0]))}]"
        },
      }
    }
  ]
}
