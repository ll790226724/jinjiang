module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [330, 104],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/a9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start='${craneStates.filterRange[0]}'&end='${craneStates.filterRange[1]}'`",
    method: 'get',
    $style: {
      width: '1300px',
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
            backgroundColor: '#ffffff',
            $textStyle: {
              color: '#2e2e2e',
              fontSize: '14px',
            }
          },
          $legend: {
            $data: 'Object.keys(craneStates.chartLegendsMap).map((item) => {return craneStates.chartLegendsMap[item].name})',
            right: '80px',
          },
          $color: "['#15c689','#bb4430', '#ffba08', '#a2aebb', '#1b74ef','#74797f']",
          $xAxis: "[{type: 'category', axisLabel: {rotate: 20, interval: 0, color: '#2e2e2e', fontSize: '14px'}, data: craneStates.echartData.map((item) => {return item.label}), axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}]",
          $yAxis: "[{type: 'value', scale: true, name: '件', axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}, {type: 'value', scale: true, name: '天', max: 10, min: 0, boundaryGap: [0.2, 0.2], axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}]",
          $dataZoom: {
            type: 'slider',
            show: true,
            $xAxisIndex: "[0]",
            $bottom: 0,
            $handleStyle: {
              color: '#1b74ef'
            },
            $startValue: 0,
            $endValue: 19,
          },
          $series: "Object.keys(craneStates.chartLegendsMap).map(item => {return {...craneStates.chartLegendsMap[item], data: craneStates.echartData.map(data => data[item])}})"
        }
      }
    }
  ]
}
