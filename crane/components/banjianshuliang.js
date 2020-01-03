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
    },
    {
      component: 'div',
      props: {
        $style: {
          display: 'flex',
        }
      },
      children: [
        {
          component: '@byzanteam/vis-components/digital-roll',
          props: {
            titlePosition: 'bottom',
            $content: {
              title: '满意度',
              $digital: 98.12,
              suffix: '%'
            },
            $digitalStyle: {
              color: '#2e2e2e',
              fontSize: '26px'
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
          props: {
            titlePosition: 'bottom',
            $content: {
              title: '逾期率',
              $digital: 98.12,
              suffix: '%'
            },
            $digitalStyle: {
              color: '#2e2e2e',
              fontSize: '26px'
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
      ]
    }
  ],
}
