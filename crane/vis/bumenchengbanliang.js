module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [330, 153],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/e9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`",
    method: 'get',
    $style: {
      width: '1300px',
      height: '427px'
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
              fontSize: '14px',
            },
            $formatter: "(param) => { return `${param[0].name}<br />` + param.map((serie) => `${serie.marker}${serie.seriesName}(${serie.seriesName === '平均回复时间' ? '天' : '件'}): ${serie.value}<br />`).join('')}",
          },
          $legend: {
            $data: 'Object.keys(craneStates.chartLegendsMap).map((item) => {return craneStates.chartLegendsMap[item].name})',
            right: '80px',
          },
          $color: "['#15c689','#bb4430', '#ffba08', '#a2aebb', '#1b74ef','#74797f']",
          $xAxis: "[{type: 'category', axisLabel: {rotate: 20, interval: 0, color: '#2e2e2e', fontSize: '14px'}, data: results.map((item) => {return {date: item[0], satisfied: item[1], unsatisfied: item[2], basicly: item[3], unknown: item[4], callbacked: item[5], day: item[6].toFixed(2)} }).map((item) => {return item.date}), axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}]",
          $yAxis: "[{type: 'value', scale: true, name: '件', axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}, {type: 'value', scale: true, name: '天', boundaryGap: [0.2, 0.2], axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}]",
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
