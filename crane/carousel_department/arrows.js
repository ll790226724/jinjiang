module.exports = [
  {
    id: 'left-arrow',
    component: 'div',
    position: [50, 505],
    props: {
      $style: {
        width: '74px',
        height: '74px',
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, .13)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      }
    },
    events: {
      'click': {
        actions: ["setState('pageIndex', craneStates.pageIndex - 1)"]
      }
    },
    children: [
      {
        component: '@byzanteam/brick/BrickIcon',
        props: {
          name: 'chevron-light-left',
          size: '24px',
          color: 'white'
        }
      }
    ]
  },
  {
    id: 'right-arrow',
    component: 'div',
    position: [1796, 505],
    props: {
      $style: {
        width: '74px',
        height: '74px',
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, .13)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      }
    },
    events: {
      'click': {
        actions: ["setState('pageIndex', craneStates.pageIndex + 1)"]
      }
    },
    children: [
      {
        component: '@byzanteam/brick/BrickIcon',
        props: {
          name: 'chevron-light-right',
          size: '24px',
          color: 'white'
        }
      }
    ]
  }
]
