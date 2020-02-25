const { table_header_style } = require('../share');
const { table_content_style } = require('../share');
module.exports = {
  id: 'repeat-complain-table',
  component: '@byzanteam/vis-components/data-loader',
  exports: {
    response: 'response',
  },
  position: [417, 885],
  props: {
    $url: "`v1/components/08b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}&department=${craneStates.department}`",
    method: 'get',
    $data: "{schema: [{}], data:[[]]}",
    $style: {
      width: '1478px',
      height: '162px',
      overflow: 'scroll'
    }
  },
  children: [
    {
      id: 'repeat-table',
      component: 'table',
      props: {
        'v-if': 'craneStates.hideTable',
        $style: {
          width: '100%',
          maxHeight: '162px',
        }
      },
      children: [
        {
          id: 'header-tr',
          component: 'tr',
          props: {
            // 'v-if': 'craneStates.tableKeyMap[item.field]',
          },
          children: [
            {
              id: 'header-th',
              component: 'th',
              props: {
                $style: {
                  ...table_header_style
                }
              },
              vfor: {
                data: 'response.schema',
                exports: {item: 'item', index: 'key'}
              },
              content: '{{craneStates.tableKeyMap[item.field]}}',
            }
          ]
        },
        {
          id: 'content-tr',
          component: 'tr',
          vfor: {
            data: 'response.data',
            exports: {item: 'item', index: 'key'}
          },
          props: {
            // 'v-if': 'craneStates.tableKeyMap[item.field]',
          },
          children: [
            {
              component: 'td',
              content: '{{ item[0] }}',
              props: {
                $style: {
                  ...table_content_style,
                  width: '1034.6px'
                },
              },
            },
            {
              component: 'td',
              content: "{{ item[1] }}",
              props: {
                $style: {
                  ...table_content_style,
                  width: '295.6px',
                },
              }
            },
            {
              component: 'td',
              content: '{{ item[2] }}',
              props: {
                $style: {
                  ...table_content_style,
                  width: '147.8px',
                },
              },
            }
          ]
        },
      ],
    }
  ]
}
