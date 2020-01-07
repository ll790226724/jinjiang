module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [417, 566],
  props: {
    $style: {
      width: '1089px',
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
          $legend: {
            $data: 'Object.keys(craneStates.chartLegendsMap).map((item) => {return craneStates.chartLegendsMap[item].name})',
            right: '80px',
          },
          $color: "['#1b74ef']",
          $xAxis: "[{type: 'category', axisLabel: {rotate: 45, interval: 0, color: '#2e2e2e', fontSize: '14px'}, data: craneStates.echartData.map((item) => {return item.label}), axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: true, lineStyle: {color: ['#2e2e2e'], type: 'dashed'}}}]",
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
          $series: "[{type: 'line', symbolSize: 8, lineStyle: {width: 3}, data: craneStates.echartData.map((item) => {return item.aa})}]"
        }
      }
    }
  ]
}
