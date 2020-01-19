const {total_count_digital_style} = require('../share');

module.exports = {
  id: 'overdue',
  component: '@byzanteam/vis-components/data-loader',
  position: [230, 169],
  exports: {
    results: 'results',
  },

  props: {
    $url: "`/v1/components/04b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}&department=${craneStates.department}`",
    method: 'get',
    $data: "[[0]]",
    $style: {
      width: '120px',
      height: '58px',
    },
  },
  children: [
    {
      id: 'overdue-content',
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        titlePosition: 'bottom',
        $content: {
          title: '逾期率',
          $digital: 'results[0][0]',
          suffix: '%',
        },
        ...total_count_digital_style,
      }
    }
  ]
}
