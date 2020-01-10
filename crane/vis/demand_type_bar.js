module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [1530, 576],
  exports: {
    results: 'results',
  },
  props: {
    url: '/v1/components/f4b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=2018-01-01&end=2020-01-01',
    method: 'get',
    $data: "[{label: '投诉类型', amount: 12}]",
    $style: {
      width: '384px',
      height: '290px'
    },
  },
  children: [
    {
      component: '@byzanteam/graphite/vertical-bar',
      props: {
        'v-if': 'results',
        $data: 'results.map((result) => ({label: result[1], count: result[0]}))',
        labelKey: 'label',
        valueKey: 'count',
        $mainAxis: {
          $labelStyle: {
            $rotate: -45,
            $size: 14,
            fill: '#666666',
          },
          $labelLength: 7,
          $lineStyle: {
            stroke: 'transparent',
          },
        },
        $crossAxis: {
          $range: {
            $count: 5,
          },
          $lineStyle: {
            stroke: 'transparent',
          },
          $labelStyle: {
            $size: 16,
            fill: '#666666',
          },
          unit: {
            content: '件',
            fill: '#666666'
          },
        },
        $gap: {
          $outer: 3
        },
        $series: "['#1b74ef']",
        $theme: {
          background: 'transparent',
        },
      }
    }
  ]
}
