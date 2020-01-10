const {percentage_number_style }= require('../share');

module.exports = {
  id: 'percentage-number',
  component: '@byzanteam/vis-components/data-loader',
  position: [259, 80],
  exports: {
    results: 'results',
  },
  props: {
    // $url: "`/v1/components/edf35dfd-6576-497f-a240-f507f15802f0/data?name=${craneStates.currentArea}`",
    $url: "`/v1/components/a9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start='2019-11-01','2019-11-15'&end='2019-11-01','2019-11-05'`",
    method: 'get',
    $data: "[[0]]",
    $style: {
      ...percentage_number_style
    },
  },
  children: [
    {
      component: 'div',
      props: {
        $style: {
          display: 'flex',
        },
      },
      children: [
        {
          id: 'percentage-number',
          component: 'div',
          props: {
            $style: {
              fontFamily: 'Oswald-Light',
            },
          },
          content: '{{results[0][2]}}'
        },
        {
          id: 'percentage-after',
          component: 'div',
          content: '%',
        },
      ],
    },
    {
      id: 'up-icon',
      component: 'img',
      props: {
        'v-if': 'results[0][2] > 0',
        src: '/jinjiang/images/icon-up.svg',
        $style:{
        }
      },
    },
    {
      id: 'down-icon',
      component: 'img',
      props: {
        'v-if': 'results[0][2] < 0',
        src: '/jinjiang/images/icon-down.svg',
        $style:{
        }
      },
    },
  ]
}
