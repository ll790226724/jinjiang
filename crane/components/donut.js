module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [26, 311],
  props: {
    $style: {
      width: '330px',
      height: '200px',
    }
  },
  children: [
    {
      component: '@byzanteam/graphite/donut',
      props: {
        labelKey: 'label',
        valueKey: 'value',
        $data: 'craneStates.donutData',
        $hideLabel: true,
        $theme: {
          background: 'transparent',
          $colors: "['#1b74ef', '#15c689', '#ffba08', '#bb4430', '#a2aebb', '#7b92b5']",
        },
        $innerRadius: 0.55,
        $legendOptions: {
          $label: {
            fill: '#2e2e2e',
            fontSize: '14px',
          },
          $offset: '[12, 0]',
          position: 'right',
          $align: "['center', 'start']",
          layout: 'vertical',
        },
      }
    }
  ]
}
