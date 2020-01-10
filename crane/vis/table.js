const { table_header_style } = require('../share');
const { table_content_style } = require('../share')
module.exports = {
  id: 'repeat-complain-table',
  component: '@byzanteam/vis-components/data-loader',
  exports: {
    results: 'results',
  },
  position: [417, 885],
  props: {
    // $url: "`/v1/components/4ea57f76-04f1-44fd-891c-61f3bb696e51/data?name=${craneStates.currentBuilding}`",
    // method: 'get',
    // $data: "{schema: [{}], data:[[]]}",
    $data: "{data: [['长沙市岳麓区，岳北社区B2栋3单元羽婕钢材批发，我们这是居民小区，现在一楼门面管理及差，但是乱象丛生。家中有老年人，由于噪音太大直街导致老人头晕眼花。', '春熙路街道办事处', 22],['长沙市岳麓区，岳北社区B2栋3单元羽婕钢材批发由于噪音太大直街导致老人头晕眼花。', '春熙路街道办事处', 32],['长沙市岳麓区，岳北社区B2栋3单元羽婕钢材批发，我们这是居民小区，现在一楼门面管理及差，但是乱象丛生。家中有老年人，由于噪音太大直街导致老人头晕眼花。', '春熙路街道办事处', 12],['长沙市岳麓区，岳北社区B2栋3单元羽婕钢材批发，由于噪音太大直街导致老人头晕眼花。', '春熙路街道办事处', 12],], schema: [{field: 'summary', type: String},{field: 'departments', type: String},{field: 'total', type: Number}]}",
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
        // 'v-if': 'response',
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
                data: 'results.schema',
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
            data: 'results.data',
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