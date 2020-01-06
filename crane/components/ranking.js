module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [33, 576],
  children: [
    {
      component: '@byzanteam/vis-components/ranking',
      props: {
        $data: 'craneStates.rankingData',
        $keys: {
          label: 'label',
          value: 'value',
        },
        $labelStyle: {
          color: '#666666',
          fontSize: '16px',
          lineHeight: '24px'
        },
        $valueStyle: {
          color: '#2e2e2e',
          fontSize: '16px',
          lineHeight: '24px'
        },
        $lineStyle: {
          background: 'rgba(46, 46, 46, 0.05)',
          $lineColor: "['rgba(27, 116, 239)', 'rgba(27, 116, 239, .5)']",
        },
      }
    }
  ]
}
