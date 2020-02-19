const { chartTooltipOptions } = require('../share');

module.exports = {
  id: 'department-ranking',
  component: '@byzanteam/vis-components/data-loader',
  position: [1580, 135],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/11b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}&department=${craneStates.department}`",
    method: 'get',
    $data: "[{label: '承办单位', amount: 12}]",
    $style: {
      width: '298px',
      maxHeight: '413px',
      padding: '8px',
      overflow: 'scroll'
    },
  },
  children: [
    {
      id: 'department-ranking-content',
      component: '@byzanteam/vis-components/ranking',
      props: {
        'v-if': 'craneStates.rank',
        $data: "results.map(item => { return {label: item[1].slice(0, 10), amount: item[0] } } )",
        $keys: {
          label: 'label',
          value: 'amount',
          tooltip: 'name'
        },
        $labelStyle: {
          color: '#666666',
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: '400'
        },
        $valueStyle: {
          color: '#2E2E2E',
          fontSize: '16px',
          lineHeight: '1.5',
          fontWeight: 400,
        },
        $lineStyle: {
          background: 'rgba(46, 46, 46, 0.05)',
          $lineColor: "['#1B74EF', '#1B74EF80']",
          height: '3px',
          borderRadius: '3px'
        },
        ...chartTooltipOptions
      },
    },
  ],
}
