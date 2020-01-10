const {total_count_digital_style} = require('../share');

module.exports = {
  id: 'satisfaction',
  component: '@byzanteam/vis-components/data-loader',
  position: [85, 169],
  exports: {
    results: 'results',
  },

  props: {
    // $url: "`/v1/components/edf35dfd-6576-497f-a240-f507f15802f0/data?name=${craneStates.currentArea}`",
    $url: "`/v1/components/8ab74ddd-39de-493f-84ab-9d87fcf23fee/data?start=2019-11-01&end=2019-12-06`",
    method: 'get',
    $data: "[[0]]",
    $style: {
      zIndex: '2',
      width: '100px',
      height: '56px',
    },
  },
  children: [
    {
      id: 'satisfaction-content',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        // 'v-if': 'results',
        titlePosition: 'bottom',
        $content: {
          title: '满意度',
          $digital: 'results[0][0]',
          suffix: '%',
        },
        ...total_count_digital_style,
      }
    }
  ]
};
