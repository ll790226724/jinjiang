module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [417, 104],
  props: {
    $style: {
      width: '1089px',
      height: '417px'
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
            $data: 'Object.keys(craneStates.chartLegendsMap).map((item) => {return craneStates.chartLegendsMap[item].name})'
          },
          $color: "['#15c689','#bb4430', '#ffba08', '#a2aebb', '#1b74ef','#74797f']",
          $xAxis: "[{type: 'category', axisLabel: {rotate: 45, interval: 0, color: '#2e2e2e', fontSize: '14px'}, data: craneStates.chartLabels, axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}]",
          $yAxis: "[{type: 'value', scale: true, name: '件', axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}, {type: 'value', scale: true, name: '天', max: 10, min: 0, boundaryGap: [0.2, 0.2], axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}]",
          $dataZoom: {
            type: 'slider',
            show: true,
            $xAxisIndex: "[0]",
            $bottom: 0,
            $handleStyle: {
              color: '#1b74ef'
            },
          },
          $series: "craneStates.chartLegend.map(item => {return {...craneStates.chartLegendsMap[item], data: craneStates.echartData.map(data => data[item])}})"
        }
      }
    }
  ]
}
