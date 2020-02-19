const { chartTooltipOptions } = require('../share');

module.exports = {
  id: 'demand-donut',
  component: '@byzanteam/vis-components/data-loader',
  position: [-10, 378],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/05b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}&department=${craneStates.department}`",
    method: 'get',
    $data: "[{label: '投诉性质', amount: 12}]",
    $style: {
      width: '490px',
      height: '200px',
    }
  },
  children: [
    {
      id: 'demand-donut-content',
      component: '@byzanteam/graphite/donut',
      props: {
        'v-if': 'results',
        $data: "results.map(item => { return {label: item[1], amount: item[0] } } )",
        labelKey: 'label',
        valueKey: 'amount',
        $innerRadius: '0.53',
        $percentage: 'true',
        $hideLabel: true,
        $theme: {
          background: 'transparent',
          $colors: "['#1B74EF', '#15C689', '#FFBA08', '#BB4430', '#A2AEBB', '#7B92B5']",
          whitespace: 'nowrap'
        },
        $legendOptions: {
          size: '100px',
          $align: "['center', 'start']",
          layout: 'vertical',
          $label: {
            fill: '#2E2E2E',
            $size: 14,
          },
          position: 'right',
          $offset: "[-115, 0]",
        },
        ...chartTooltipOptions
      }
    }
  ]
}
