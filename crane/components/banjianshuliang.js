module.exports = {
  id: 'banlishuliang',
  component: 'div',
  children: [
    {
      component: '@byzanteam/vis-components/digital-roll',
      props: {
        titlePosition: 'left',
        $content: {
          title: '当月办件数量',
          $digital: 1876,
          suffix: '件'
        },
        $digitalStyle: {
          color: '#ffffff',
          fontSize: '26px'
        },
        $titleStyle: {
          color: '#ffffff',
          fontSize: '14px'
        },
        $suffixStyle: {
          color: '#ffffff',
          fontSize: '14px'
        }
      }
    }
  ],
}
