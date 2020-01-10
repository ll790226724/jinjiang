const { chartTooltipOptions } = require('../share')

module.exports = {
  id: 'demand-donut',
  component: '@byzanteam/vis-components/data-loader',
  position: [-10, 311],
  exports: {
    results: 'results',
  },
  props: {
    // url: '/v1/components/119eaf75-a171-4702-ac73-1f330f059ad2/data',
    $url: "`/v1/components/b9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=2018-01-01&end=2020-01-01`",
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
        $tooltip: {
          $text: {
            align: 'center',
            baseline: 'middle',
            fill: '#FFFFFF',
            $size: 14,
            $weight: 400
          },
          $notation: {
            name: 'circle-small',
            $size: 14
          }
        },
      }
    }
  ]
}