module.exports = {
  id: 'department-ranking',
  component: '@byzanteam/vis-components/data-loader',
  position: [33, 576],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/c9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`",
    method: 'get',
    $data: "[{label: '承办单位', amount: 12}]",
    $style: {
      width: '316px',
      maxHeight: '470px',
      padding: '8px',
      overflow: 'scroll'
    },
  },
  children: [
    {
      id: 'department-ranking-content',
      component: '@byzanteam/vis-components/ranking',
      props: {
        'v-if': 'results',
        $data: "results.map(item => { return {label: item[1], amount: item[0] } } )",
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

      },
    },
  ],
}
