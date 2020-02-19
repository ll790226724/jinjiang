module.exports = {
  id: 'department-tab',
  component: '@byzanteam/vis-components/data-loader',
  position: [1391, 651],
  exports: {
    results: 'results',
  },
  props: {
    $style: {
      width: '106px',
      height: '30px',
    },
  },
  children: [
    {
      component: '@byzanteam/vis-components/brick-tabs',
      directive: {
        model: 'craneStates.chartTabCurrent',
      },
      props: {
        $tabNavs: 'craneStates.chartTabNavs',
        $activeTab: 'craneStates.chartTabCurrent'
      }
    }
  ]
}
