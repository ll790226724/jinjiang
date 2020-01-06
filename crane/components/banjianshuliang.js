module.exports = {
  id: 'banlishuliang',
  component: 'div',
  children: [
    {
      component: 'div',
      position: [26, 26],
      props: {
        $style: {
          width: '330px',
          height: '120px',
          backgroundColor: '#1b74ef',
          borderRadius: '4px',
        }
      },
    },
    {
      component: '@byzanteam/vis-components/digital-roll',
      position: [63, 61],
      props: {
        titlePosition: 'left',
        $style: {
          width: '194px',
          height: '44px'
        },
        $content: {
          title: '当月办件数量',
          $digital: 1876,
          suffix: '件'
        },
        $digitalStyle: {
          color: '#ffffff',
          fontSize: '26px',
          fontFamily: 'Oswald-Regular'
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
    },
    {
      component: 'div',
      position: [26, 147],
      props: {
        $style: {
          display: 'flex',
          width: '330px',
          height: '100px',
          backgroundColor: '#e9f1fc',
          borderRadius: '4px',
        }
      },
    },
    {
      component: '@byzanteam/vis-components/digital-roll',
      position: [85, 169],
      props: {
        titlePosition: 'bottom',
        $style: {
          width: '100px',
          height: '56px',
        },
        $content: {
          title: '满意度',
          $digital: 98.12,
          suffix: '%'
        },
        $digitalStyle: {
          color: '#2e2e2e',
          fontSize: '26px',
          fontFamily: 'Oswald-Regular'
        },
        $titleStyle: {
          color: '#2e2e2e',
          fontSize: '14px'
        },
        $suffixStyle: {
          color: '#8f919f',
          fontSize: '14px'
        },
        $options: {
          decimalPlaces: 2,
        }
      }
    },
    {
      component: '@byzanteam/vis-components/digital-roll',
      position: [230, 169],
      props: {
        titlePosition: 'bottom',
        $style: {
          width: '100px',
          height: '56px',
        },
        $content: {
          title: '逾期率',
          $digital: 98.12,
          suffix: '%'
        },
        $digitalStyle: {
          color: '#2e2e2e',
          fontSize: '26px',
          fontFamily: 'Oswald-Regular'
        },
        $titleStyle: {
          color: '#2e2e2e',
          fontSize: '14px'
        },
        $suffixStyle: {
          color: '#8f919f',
          fontSize: '14px'
        },
        $options: {
          decimalPlaces: 2,
        }
      }
    },
  ],
}
