module.exports = {
  id: 'department-tab',
  component: '@byzanteam/vis-components/data-loader',
  position: [1632, 147],
  exports: {
    results: 'results',
  },
  props: {
    $style: {
      width: '194px',
      height: '30px',
    },
  },
  children: [
    {
      component: '@byzanteam/vis-components/brick-tabs',
      directive: {
        model: 'craneStates.tabCurrent',
      },
      props: {
        $tabNavs: 'craneStates.tabNavs',
        $activeTab: 'craneStates.tabCurrent'
      }
    }
  ]
}
