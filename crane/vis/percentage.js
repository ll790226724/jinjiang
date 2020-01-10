const {percentage_number_style }= require('../share');

module.exports = {
  id: 'percentage-number',
  component: '@byzanteam/vis-components/data-loader',
  position: [259, 80],
  exports: {
    results: 'results',
  },
  props: {
    $url: "`/v1/components/a9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start='2019-11-01','2019-11-15'&end='2019-11-01','2019-11-05'`",
    method: 'get',
    $data: "[[0]]",
    $style: {
      ...percentage_number_style
    },
  },
  children: [
    {
      component: '@byzanteam/vis-components/brick-tooltip',
      props: {
        content: "窗口办理量下降2%",
        placement: "bottom-right",
        $style: {
          borderRadius: '4px',
          color: '#ffffff',
          fontFamily: 'Oswald-Light',
          lineHeight: 1,
          paddingLeft: '6px',
          dispaly: 'flex',
          alignItems: 'center',
          display: 'flex',
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
                },
              },
              content: '{{results[0][2]}}%'
            },
            {
              id: 'up-icon',
              component: 'img',
              props: {
                'v-if': 'results[0][2] > 0',
                src: '/jinjiang/images/icon-up.svg',
              },
            },
            {
              id: 'down-icon',
              component: 'img',
              props: {
                'v-if': 'results[0][2] < 0',
                src: '/jinjiang/images/icon-down.svg',
              },
            },
          ],
        },
      ]
    },
  ]
}
