const {normal_digital_style} = require('../share')

module.exports = {
  id: 'deal-number',
  component: '@byzanteam/vis-components/data-loader',
  position: [63, 61],
  exports: {
    results: 'results',
  },

  props: {
    // $url: "`/v1/components/edf35dfd-6576-497f-a240-f507f15802f0/data?name=${craneStates.currentArea}`",
    $url: "`/v1/components/89b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=2018-01-01&end=2020-01-01`",
    method: 'get',
    $data: "[[0]]",
    $style: {
      zIndex: '2',
      width: '194px',
      height: '44px',
    },
  },
  children: [
    {
      id: 'deal-number-total',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        // 'v-if': 'results',
        titlePosition: 'left',
        $content: {
          title: '当月办件数量',
          $digital: 'results[0][0]',
          suffix: '件',
        },
        $options: {
          separator: '',
        },
        ...normal_digital_style,
      }
    },
  ]
}
