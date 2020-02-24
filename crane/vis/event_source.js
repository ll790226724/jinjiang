const { chartTooltipOptions } = require('../share');

module.exports = {
  id: 'event-source',
  component: '@byzanteam/vis-components/data-loader',
  position: [1565, 690],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/f3b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`",
    method: 'get',
    $data: "[{label: '事件来源', amount: 12}]",
    $style: {
      width: '330px',
      height: '310px',
    },
  },
  children: [
    {
      id: 'event-ranking-content',
      component: '@byzanteam/graphite/donut',
      props: {
        'v-if': 'results',
        $data: "results.map(item => { return {label: item[1], amount: item[0] } } )",
        labelKey: 'label',
        valueKey: 'amount',
        $percentage: true,
        $hideLabel: true,
        $theme: {
          background: 'transparent',
          $colors: "['#1B74EF', '#15C689', '#FFBA08', '#BB4430']",
          whitespace: 'nowrap'
        },
        $legendOptions: {
          size: '106px',
          $align: "['start', 'center']",
          layout: 'vertical',
          $label: {
            fill: '#2E2E2E',
            $size: 14,
          },
          position: 'bottom',
          // $offset: "[-115, 0]",
        },
        ...chartTooltipOptions
      },
    },
  ],
}
