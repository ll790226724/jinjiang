const {percentage_number_style }= require('../share');

module.exports = {
  id: 'percentage-number',
  component: '@byzanteam/vis-components/data-loader',
  position: [259, 139],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/02b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.chainParamsNew}&end=${craneStates.chainParamsOld}&department=${craneStates.department}`",
    method: 'get',
    $data: "[[0]]",
    $style: {
      ...percentage_number_style
    },
  },
  children: [
    {
      component: '@byzanteam/brick/brick-tooltip',
      props: {
        'v-if': 'results',
        $content: "(results[0][2] === 0 ? '同比不变':'')+(results[0][2] > 0 ? '同比增长'+results[0][2]+'%':'') + (results[0][2]< 0 ? '同比下降'+results[0][2]+'%' :'')",
        placement: "bottom-end",
        $style: {
          borderRadius: '4px',
          color: '#ffffff',
          fontFamily: 'Oswald-Light',
          lineHeight: 1,
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'space-between'
        }
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
                  display: 'flex',
                  justifyContent: 'center',
                  flexGrow: 1,
                },
              },
              content: '{{results[0][2]}}%'
            },
            {
              id: 'up-icon',
              component: 'img',
              props: {
                'v-if': 'results[0][2] > 0',
                $style: {
                  paddingLeft: '6px'
                },
                src: '/jinjiangwllz/images/icon-up.svg',
              },
            },
            {
              id: 'down-icon',
              component: 'img',
              props: {
                'v-if': 'results[0][2] < 0',
                $style: {
                  paddingLeft: '6px'
                },
                src: '/jinjiangwllz/images/icon-down.svg',
              },
            },
          ],
        },
      ]
    },
  ]
}
