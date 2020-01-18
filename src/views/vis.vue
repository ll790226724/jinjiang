<template>
  <div class="vis">
    <img ref="background" src="/jinjiangwllz/images/bg.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <div ref="page-title" :style="{color: '#2e2e2e', fontSize: '34px', fontWeight: 500, textAlign: 'center', letterSpacing: '1px', lineHeight: 1, display: 'inline-block', position: 'absolute', top: '12px', left: '822px'}">
      锦江区网络理政
    </div>
    <data-loader ref="departments-loader" v-slot="{ results: results }" url="/v1/components/d9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=2018-01-01&end=2020-01-01" method="get" :style="{width: '160px', position: 'absolute', top: '12px', left: '1117px'}">
      <vis-select ref="departments-select" v-if="results" :options="results.map( (item, index) => { return {label: item[0], uuid: index } } )" v-model="craneStates.department" valueKey="label"  placeholder="所有承办部门" />
    </data-loader>
    <div ref="datetime-picker-wrapper" :style="{position: 'absolute', top: '12px', left: '1310px'}">
      <date-picker ref="datetime-picker" type="daterange" valueFormat="yyyy-MM-dd" format="yyyy-MM-dd" size="small" :unlinkPanels="true" :pickerOptions="{disabledDate: disableDateFunc}" v-model="craneStates.dateRange" start-placeholder="开始日期" end-placeholder="结束日期" range-separator=" " />
    </div>
    <data-loader ref="date-limit"  @requestDone="()=>[setState('dateRangeLimit', getComponent('date-limit').results[0])]" url="/v1/components/12b74ddd-39de-493f-84ab-9d87fcf23fee/data" method="get" />
    <div ref="digital-background-top" :style="{height: '120px', width: '330px', backgroundColor: '#1B74EF', borderRadius: '4px', position: 'absolute', top: '26px', left: '26px'}" />
    <div ref="digital-background-bottom" :style="{height: '100px', width: '330px', backgroundColor: '#E9F1FC', borderRadius: '4px', position: 'absolute', top: '147px', left: '26px'}" />
    <div ref="demand-type-circle" :style="{height: '6px', width: '6px', borderRadius: '5px', borderWidth: '2px', borderColor: '#2E2E2E', borderStyle: 'solid', position: 'absolute', top: '284px', left: '42px'}" />
    <div ref="demand-type-title" :style="{color: '#2E2E2E', fontSize: '18px', fontWeight: '500', textAlign: 'left', letterSpacing: '0.9', position: 'absolute', top: '277px', left: '58px'}">
      诉求性质
    </div>
    <div ref="department-circle" :style="{boxSizing: 'content-box', height: '6px', width: '6px', borderRadius: '5px', borderWidth: '2px', borderColor: '#2E2E2E', borderStyle: 'solid', position: 'absolute', top: '548px', left: '42px'}" />
    <div ref="repeat-demand-circle" :style="{boxSizing: 'content-box', height: '6px', width: '6px', borderRadius: '5px', borderWidth: '2px', borderColor: '#2E2E2E', borderStyle: 'solid', position: 'absolute', top: '96px', left: '432px'}" />
    <div ref="department-title" :style="{color: '#2E2E2E', fontSize: '18px', fontWeight: '500', textAlign: 'left', letterSpacing: '0.9', position: 'absolute', top: '541px', left: '58px'}">
      部门承办量
    </div>
    <div ref="department-suffix" :style="{color: '#2E2E2E80', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '546px', left: '166px'}">
      /件
    </div>
    <div ref="demand-bar-circle" :style="{boxSizing: 'content-box', height: '6px', width: '6px', borderRadius: '5px', borderWidth: '2px', borderColor: '#2E2E2E', borderStyle: 'solid', position: 'absolute', top: '548px', left: '1580px'}" />
    <div ref="demand-bar-title" :style="{color: '#2E2E2E', fontSize: '18px', fontWeight: '500', textAlign: 'left', letterSpacing: '0.9', position: 'absolute', top: '542px', left: '1596px'}">
      诉求类型
    </div>
    <div ref="repeat-demand-circle" :style="{boxSizing: 'content-box', height: '6px', width: '6px', borderRadius: '5px', borderWidth: '2px', borderColor: '#2E2E2E', borderStyle: 'solid', position: 'absolute', top: '859px', left: '432px'}" />
    <div ref="repeat-demand-title" :style="{color: '#2E2E2E', fontSize: '18px', fontWeight: '500', textAlign: 'left', letterSpacing: '0.9', position: 'absolute', top: '89px', left: '448px'}">
      部门承办量 & 回访情况 & 平均回复时间
    </div>
    <div ref="repeat-demand-circle" :style="{boxSizing: 'content-box', height: '6px', width: '6px', borderRadius: '5px', borderWidth: '2px', borderColor: '#2E2E2E', borderStyle: 'solid', position: 'absolute', top: '547px', left: '432px'}" />
    <div ref="repeat-demand-title" :style="{color: '#2E2E2E', fontSize: '18px', fontWeight: '500', textAlign: 'left', letterSpacing: '0.9', position: 'absolute', top: '541px', left: '448px'}">
      接件趋势
    </div>
    <div ref="repeat-demand-title" :style="{color: '#2E2E2E', fontSize: '18px', fontWeight: '500', textAlign: 'left', letterSpacing: '0.9', position: 'absolute', top: '851px', left: '448px'}">
      重复投诉统计
    </div>
    <div ref="right-background" :style="{width: '330px', height: '841px', backgroundImage: 'linear-gradient(#1B74EF12, #1B74EF00)', borderRadius: '4px', position: 'absolute', top: '26px', left: '1564px'}" />
    <div ref="event-source-circle" :style="{height: '6px', width: '6px', borderRadius: '5px', borderWidth: '2px', borderColor: '#2E2E2E', borderStyle: 'solid', position: 'absolute', top: '50px', left: '1580px'}" />
    <div ref="event-title" :style="{color: '#2E2E2E', fontSize: '18px', fontWeight: '500', textAlign: 'left', letterSpacing: '0.9', position: 'absolute', top: '42px', left: '1596px'}">
      事件来源
    </div>
    <div ref="event-suffix" :style="{color: '#2E2E2E80', fontSize: '14px', fontWeight: '400', textAlign: 'left', position: 'absolute', top: '46px', left: '1681px'}">
      /件
    </div>
    <data-loader ref="deal-number" v-slot="{ results: results }" :url="`/v1/components/89b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`" method="get" :data="[[0]]" :style="{width: '194px', height: '44px', position: 'absolute', top: '61px', left: '63px'}">
      <digital-roll ref="deal-number-total" v-if="results" titlePosition="left" :content="{title: '当月办件数量', digital: results[0][0], suffix: '件'}" :options="{separator: ''}" :titleStyle="{color: 'rgba(255, 255, 255)', fontSize: '14px', fontWeight: '500'}" :suffixStyle="{fontSize: '14px', fontWeight: '400'}" :digitalStyle="{fontSize: '36px', color: '#FFFFFF', fontWeight: '400', fontFamily: 'Oswald'}" />
    </data-loader>
    <data-loader ref="satisfaction" v-slot="{ results: results }" :url="`/v1/components/8ab74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`" method="get" :data="[[0]]" :style="{width: '100px', height: '56px', position: 'absolute', top: '169px', left: '85px'}">
      <digital-roll ref="satisfaction-content" v-if="results" titlePosition="bottom" :content="{title: '满意度', digital: results[0][0], suffix: '%'}" :titleStyle="{color: '#2E2E2E', fontSize: '14px', fontWeight: '400'}" :digitalStyle="{fontSize: '26px', color: '#2E2E2E', fontFamily: 'Oswald', fontWeight: '400', format: '11.11', letterSpacing: '0.6'}" :suffixStyle="{fontSize: '14px', color: '#8F919F', fontWeight: '400'}" :options="{separator: ',', decimalPlaces: '2'}" />
    </data-loader>
    <data-loader ref="overdue" v-slot="{ results: results }" :url="`/v1/components/8bb74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`" method="get" :data="[[0]]" :style="{width: '120px', height: '58px', position: 'absolute', top: '169px', left: '230px'}">
      <digital-roll ref="overdue-content" titlePosition="bottom" :content="{title: '逾期率', digital: results[0][0], suffix: '%'}" :titleStyle="{color: '#2E2E2E', fontSize: '14px', fontWeight: '400'}" :digitalStyle="{fontSize: '26px', color: '#2E2E2E', fontFamily: 'Oswald', fontWeight: '400', format: '11.11', letterSpacing: '0.6'}" :suffixStyle="{fontSize: '14px', color: '#8F919F', fontWeight: '400'}" :options="{separator: ',', decimalPlaces: '2'}" />
    </data-loader>
    <data-loader ref="demand-donut" v-slot="{ results: results }" :url="`/v1/components/b9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`" method="get" :data="[{label: '投诉性质', amount: 12}]" :style="{width: '490px', height: '200px', position: 'absolute', top: '311px', left: '-10px'}">
      <donut ref="demand-donut-content" v-if="results" :data="results.map(item => { return {label: item[1], amount: item[0] } } )" labelKey="label" valueKey="amount" :innerRadius="0.53" :percentage="true" :hideLabel="true" :theme="{background: 'transparent', colors: ['#1B74EF', '#15C689', '#FFBA08', '#BB4430', '#A2AEBB', '#7B92B5'], whitespace: 'nowrap'}" :legendOptions="{size: '100px', align: ['center', 'start'], layout: 'vertical', label: {fill: '#2E2E2E', size: 14}, position: 'right', offset: [-115, 0]}" :tooltip="{text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, notation: {fill: '#007AFE', name: 'circle-small', size: 14}}" :tooltipOptions="{background: 'rgba(60, 71, 89, 0.9)', text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, title: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}}" />
    </data-loader>
    <data-loader ref="department-ranking" v-slot="{ results: results }" :url="`/v1/components/c9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`" method="get" :data="[{label: '承办单位', amount: 12}]" :style="{width: '316px', maxHeight: '470px', padding: '8px', overflow: 'scroll', position: 'absolute', top: '576px', left: '33px'}">
      <ranking ref="department-ranking-content" v-if="results" :data="results.map(item => { return {label: item[1], amount: item[0] } } )" :keys="{label: 'label', value: 'amount', tooltip: 'name'}" :labelStyle="{color: '#666666', fontSize: '16px', lineHeight: '24px', fontWeight: '400'}" :valueStyle="{color: '#2E2E2E', fontSize: '16px', lineHeight: '1.5', fontWeight: '400'}" :lineStyle="{background: 'rgba(46, 46, 46, 0.05)', lineColor: ['#1B74EF', '#1B74EF80'], height: '3px', borderRadius: '3px'}" :tooltip="{text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, notation: {fill: '#007AFE', name: 'circle-small', size: 14}}" :tooltipOptions="{background: 'rgba(60, 71, 89, 0.9)', text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, title: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}}" />
    </data-loader>
    <data-loader ref="percentage-number" v-slot="{ results: results }" :url="`/v1/components/a9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.chainParamsNew}&end=${craneStates.chainParamsOld}`" method="get" :data="[[0]]" :style="{width: '70px', height: '22px', boxSizing: 'border-box', color: '#FFFFFF', fontSize: '16px', paddingLeft: '4px', paddingRight: '6px', backgroundColor: '#155EC2', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '2px', position: 'absolute', top: '80px', left: '259px'}">
      <brick-tooltip v-if="results" :content="(results[0][2] === 0 ? '同比不变':'')+(results[0][2] > 0 ? '同比增长'+results[0][2]+'%':'') + (results[0][2]< 0 ? '同比下降'+results[0][2]+'%' :'')" placement="bottom-end" :style="{borderRadius: '4px', color: '#ffffff', fontFamily: 'Oswald-Light', lineHeight: '1', alignItems: 'center', display: 'flex', flexGrow: '1', justifyContent: 'space-between'}">
        <div :style="{display: 'flex'}">
          <div ref="percentage-number" :style="{fontFamily: 'Oswald-Light', display: 'flex', justifyContent: 'center', flexGrow: '1'}">
            {{results[0][2]}}%
          </div>
          <img ref="up-icon" v-if="results[0][2] > 0" src="/jinjiangwllz/images/icon-up.svg" />
          <img ref="down-icon" v-if="results[0][2] < 0" src="/jinjiangwllz/images/icon-down.svg" />
        </div>
      </brick-tooltip>
    </data-loader>
    <data-loader ref="event-ranking" v-slot="{ results: results }" :url="`/v1/components/f3b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`" method="get" :data="[{label: '事件来源', amount: 12}]" :style="{boxSizing: 'border-box', width: '300px', maxHeight: '433px', padding: '8px', overflow: 'scroll', position: 'absolute', top: '76px', left: '1580px'}">
      <ranking ref="event-ranking-content" v-if="results" :data="results.map(item => { return {label: item[1], amount: item[0] } } )" :keys="{label: 'label', value: 'amount', tooltip: 'name'}" :labelStyle="{color: '#666666', fontSize: '16px', lineHeight: '24px', fontWeight: '400'}" :valueStyle="{color: '#2E2E2E', fontSize: '16px', lineHeight: '1.5', fontWeight: '400'}" :lineStyle="{background: 'rgba(46, 46, 46, 0.05)', lineColor: ['#1B74EF', '#1B74EF80']}" />
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/f4b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`" method="get" :data="[{label: '投诉类型', amount: 12}]" :style="{width: '384px', height: '290px', position: 'absolute', top: '576px', left: '1530px'}">
      <vertical-bar v-if="results" :data="results.map((result) => ({label: result[1], '数量（件）': result[0]}))" labelKey="label" valueKey="数量（件）" :mainAxis="{labelStyle: {rotate: -45, size: 14, fill: '#666666'}, labelLength: 7, lineStyle: {stroke: 'transparent'}}" :crossAxis="{range: {count: 5}, lineStyle: {stroke: 'transparent'}, labelStyle: {size: 16, fill: '#666666'}, unit: {content: '件', fill: '#666666'}}" :gap="{outer: 3}" :series="['#1b74ef']" :theme="{background: 'transparent'}" :tooltip="{text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, notation: {fill: '#007AFE', name: 'circle-small', size: 14}}" :tooltipOptions="{background: 'rgba(60, 71, 89, 0.9)', text: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}, title: {align: 'center', baseline: 'middle', fill: '#FFFFFF', size: 14, weight: 400}}" />
    </data-loader>
    <data-loader ref="repeat-complain-table" v-slot="{ response: response }" :url="`v1/components/f2b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`" method="get" :data="{schema: [{}], data:[[]]}" :style="{width: '1478px', height: '162px', overflow: 'scroll', position: 'absolute', top: '885px', left: '417px'}">
      <table ref="repeat-table" v-if="response" :style="{width: '100%', maxHeight: '162px'}">
        <tr ref="header-tr">
          <th ref="header-th" v-for="(item, key) in response.schema" :key="key" :style="{paddingLeft: '16px', height: '40px', verticalAlign: 'middle', color: '#2e2e2e', fontWeight: 500, textAlign: 'left', fontSize: '14px', backgroundColor: '#EEF6FE'}">
            {{craneStates.tableKeyMap[item.field]}}
          </th>
        </tr>
        <tr ref="content-tr" v-for="(item, key) in response.data" :key="key">
          <td :style="{fontSize: '14px', padding: '7px 16px', color: '#666666', lineHeight: '20px', textAlign: 'left', verticalAlign: 'top', width: '1034.6px'}">
            {{ item[0] }}
          </td>
          <td :style="{fontSize: '14px', padding: '7px 16px', color: '#666666', lineHeight: '20px', textAlign: 'left', verticalAlign: 'top', width: '295.6px'}">
              <span v-html="item[1].replace(craneStates.reg, '<br>')"></span>
          </td>
          <td :style="{fontSize: '14px', padding: '7px 16px', color: '#666666', lineHeight: '20px', textAlign: 'left', verticalAlign: 'top', width: '147.8px'}">
            {{ item[2] }}
          </td>
        </tr>
      </table>
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/e9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`" method="get" :style="{width: '1300px', height: '390px', position: 'absolute', top: '104px', left: '330px'}">
      <v-chart v-if="results" :options="{tooltip: {trigger: 'axis', backgroundColor: '#ffffff', textStyle: {color: '#2e2e2e', fontSize: '14px'}}, legend: {data: Object.keys(craneStates.chartLegendsMap).map((item) => {return craneStates.chartLegendsMap[item].name}), right: '80px'}, color: ['#15c689','#bb4430', '#ffba08', '#a2aebb', '#1b74ef','#74797f'], xAxis: [{type: 'category', axisLabel: {rotate: 20, interval: 0, color: '#2e2e2e', fontSize: '14px'}, data: results.map((item) => {return {date: item[0], satisfied: item[1], unsatisfied: item[2], basicly: item[3], unknown: item[4], callbacked: item[5], day: item[6].toFixed(2)} }).map((item) => {return item.date}), axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}], yAxis: [{type: 'value', scale: true, name: '件', axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}, {type: 'value', scale: true, name: '天', boundaryGap: [0.2, 0.2], axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}], grid: {bottom: 110}, dataZoom: {type: 'slider', show: 'true', xAxisIndex: [0], handleStyle: {color: '#1b74ef'}, startValue: 0, endValue: 19}, series: Object.keys(craneStates.chartLegendsMap).map(item => {return {...craneStates.chartLegendsMap[item], data: results.map((item) => {return {date: item[0], satisfied: item[1], unsatisfied: item[2], basicly: item[3], unknown: item[4], callbacked: item[5], day:  parseFloat(item[6]).toFixed(2) } }).map(data => data[item])}})}" />
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/f1b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`" method="get" :style="{width: '1300px', height: '245px', position: 'absolute', top: '566px', left: '330px'}">
      <v-chart v-if="results" :options="{tooltip: {trigger: 'axis', backgroundColor: '#ffffff', textStyle: {color: '#2e2e2e', fontSize: '14px'}}, color: ['#1b74ef'], xAxis: [{type: 'category', axisLabel: {rotate: 20, interval: 0, color: '#2e2e2e', fontSize: '14px'}, data: results.map(result => (new Date(result[1]).toISOString().slice(0, 10))), axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: true, lineStyle: {color: ['#666666'], type: 'dashed'}}}], yAxis: [{type: 'value', scale: true, name: '件', axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}], grid: {bottom: 80}, dataZoom: {type: 'slider', show: 'true', xAxisIndex: [0], handleStyle: {color: '#1b74ef'}, startValue: 0, endValue: 19}, series: [{type: 'line', symbolSize: 8, lineStyle: {width: 3}, data: results.map(result => (result[0]))}]}" />
    </data-loader>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/map/js/world'

import BuiltInMixin from '../mixins/built_in'
import {
  DataLoader,
  VisSelect,
  DigitalRoll,
  Ranking,
} from '@byzanteam/vis-components'
import {
  DatePicker,
} from 'element-ui'
import {
  Donut,
  VerticalBar,
} from '@byzanteam/graphite'
import {
  BrickTooltip,
} from '@byzanteam/brick'

export const vis = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    VisSelect,
    DigitalRoll,
    Ranking,
    DatePicker,
    Donut,
    VerticalBar,
    BrickTooltip,
    'v-chart': ECharts,
  },

  data () {
    return {
      craneStates: {
        chainArray: [],
        tableKeyMap: {total: '诉求量（件）', summary: '市民诉求内容', departments: '承办部门'},
        reg: /[,，]/g,
        department: '',
        defaultFilterRange: ['2019-11-01', '2019-11-15'],
        chartLegendsMap: {satisfied: {name: '满意', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 7.5}, unsatisfied: {name: '不满意', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 7.5}, unknown: {name: '无法判断满意状况', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 7.5}, basicly: {name: '基本满意', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 7.5}, callbacked: {name: '回访情况', type: 'line', yAxisIndex: 0, symbolSize: 8}, day: {name: '平均回复时间', type: 'line', yAxisIndex: 1, symbolSize: 8}},
      },
    }
  },



  watch: {
    'craneStates.department': {
      handler (value) {
        if (value) {
          this.linkTo(`/department?department=${value}`)
        }
      },
    },
    'craneStates.dateRange': {
      immediate: true,
      handler (value) {
        if (value) {
          this.setState('filterRange', value);
          this.percentageNew(value);
          this.percentageOld(value)
        } else {
          this.setState('filterRange', this.craneStates.defaultFilterRange);
          this.percentageNew(this.craneStates.defaultFilterRange);
          this.percentageOld(this.craneStates.defaultFilterRange);
        }
      },
    },
  },

  methods: {
    disableDateFunc(value) {
      // // 数据源时间范围
      let endDate = new Date(this.craneStates.dateRangeLimit[0]).getTime();
      let startDate = new Date(this.craneStates.dateRangeLimit[1]).getTime();
      const currentTime = value.getTime()
      return !(new Date(this.craneStates.dateRangeLimit[0]).getTime() > value.getTime() && value.getTime() > new Date(this.craneStates.dateRangeLimit[1]).getTime());

    },

    // 日期选择器选择的时间段-new
    percentageNew (value) {
      let re =  (value.map(item => ("'" + item + "'"))).join(",");
      this.setState('chainParamsNew', re);
    },

    // 对应的环比时间段-old
    percentageOld(value) {
      this.craneStates.chainArray = [];
      let startDateTimestamp =new Date(value[0]).getTime();
      let endDateTimestamp = new Date(value[1]).getTime();
      let diffTimestamp = endDateTimestamp - startDateTimestamp;
      value.map(item => {
        let timestamp = new Date(item).getTime() - diffTimestamp;
        let ch = new Date(timestamp);
        let YY = ch.getFullYear() + '-';
        let MM = (ch.getMonth() + 1 < 10 ? '0' + (ch.getMonth() + 1) : ch.getMonth() + 1) + '-';
        let DD = (ch.getDate() < 10 ? '0' + (ch.getDate()) : ch.getDate());
        let CH = "'" + YY + MM + DD + "'";
        this.craneStates.chainArray.push(CH);
      });
      this.setState('chainParamsOld', this.craneStates.chainArray.join(","));
    }
  },

  created () {
    this.percentageNew(this.craneStates.defaultFilterRange);
    this.percentageOld(this.craneStates.defaultFilterRange);
  }};
export default vis
</script>
