const {total_count_digital_style} = require('../share');

module.exports = {
  id: 'satisfaction',
  component: '@byzanteam/vis-components/data-loader',
  position: [85, 229],
  exports: {
    results: 'results',
  },

  props: {
    $url: "`/v1/components/03b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}&department=${craneStates.department}`",
    method: 'get',
    $data: "[[0]]",
    $style: {
      width: '100px',
      height: '56px',
    },
  },
  children: [
    {
      id: 'satisfaction-content',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        'v-if': 'results',
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
