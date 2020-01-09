module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [330, 566],
  exports: {
    results: 'results',
  },
  props: {
    $url: '`/v1/components/f1b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`',
    method: 'get',
    $style: {
      width: '1300px',
      height: '245px'
    },
  },
  children: [
    {
      component: 'vue-echarts/v-chart',
      props: {
        $options: {
          tooltip: {
            trigger: 'axis',
          },
          $color: "['#1b74ef']",
          $xAxis: "[{type: 'category', axisLabel: {rotate: 45, interval: 0, color: '#2e2e2e', fontSize: '14px'}, data: results.map(result => (new Date(result[0]).toISOString().slice(0, 10))), axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: true, lineStyle: {color: ['#2e2e2e'], type: 'dashed'}}}]",
          $yAxis: "[{type: 'value', scale: true, name: '件', axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}]",
          $dataZoom: {
            type: 'slider',
            show: true,
            $xAxisIndex: "[0]",
            $bottom: 0,
            $handleStyle: {
              color: '#1b74ef'
            },
          },
          $series: "[{type: 'line', symbolSize: 8, lineStyle: {width: 3}, data: results.map(result => (result[0]))}]"
        }
      }
    }
  ]
}
