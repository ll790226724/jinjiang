<template>
  <div class="vis">
    <div ref="page-title" :style="{color: '#2e2e2e', fontSize: '34px', fontWeight: 500, textAlign: 'center', letterSpacing: '1px'}">
      锦江区网络理政
    </div>
    <label ref="page-tip" :style="{color: '#2e2e2e', fontSize: '14px', fontWeight: 400, position: 'absolute', top: '30px', left: '429px'}">
      * 该数据截至时间 2019年12月31日
    </label>
    <data-loader ref="departments-loader" v-slot="{ results: results }" :url="`/v1/components/d9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`" method="get" :style="{width: '160px', position: 'absolute', top: '12px', left: '1117px'}">
      <vis-select ref="departments-select" v-if="results" :options="results.map(result => ({label: result[0], uuid: result[0]}))" v-model="craneStates.department" placeholder="所有承办部门" />
    </data-loader>
    <div ref="datetime-picker-wrapper" :style="{position: 'absolute', top: '12px', left: '1310px'}">
      <date-picker ref="datetime-picker" type="daterange" valueFormat="yyyy-MM-dd" format="yyyy-MM-dd" size="small" :unlinkPanels="true" v-model="craneStates.filterRange" start-placeholder="开始日期" end-placeholder="结束日期" range-separator=" " />
    </div>
    <brick-tooltip ref="weather-text" content="窗口办理量下降2%" placement="bottom-right" :style="{width: '59px', height: '23px', backgroundColor: '#205bf6', borderRadius: '4px', color: '#ffffff', fontFamily: 'Oswald-Light', lineHeight: '1', paddingLeft: '6px', dispaly: 'flex', alignItems: 'center', display: 'flex', zIndex: 4, position: 'absolute', top: '80px', left: '259px'}">
      <span ref="weather-text-value">
        <span>
          2%
        </span>
        <icon ref="weather-text-icon" name="caret-down" size="16px" color="white" :style="{margin: '0 4px'}" />
      </span>
    </brick-tooltip>
    <label :style="{dispaly: 'flex', alignItems: 'center', color: '#2e2e2e', fontSize: '18px', fontWeight: 500, letterSpacing: '0.9px', position: 'absolute', top: '277px', left: '38px'}">
      <span />
      <span>
        诉求性质
      </span>
    </label>
    <div ref="banlishuliang">
      <div :style="{width: '330px', height: '120px', backgroundColor: '#1b74ef', borderRadius: '4px', position: 'absolute', top: '26px', left: '26px'}" />
      <digital-roll titlePosition="left" :style="{width: '194px', height: '44px', position: 'absolute', top: '61px', left: '63px'}" :content="{title: '当月办件数量', digital: 1876, suffix: '件'}" :digitalStyle="{color: '#ffffff', fontSize: '26px', fontFamily: 'Oswald-Regular'}" :titleStyle="{color: '#ffffff', fontSize: '14px'}" :suffixStyle="{color: '#ffffff', fontSize: '14px'}" />
      <div :style="{display: 'flex', width: '330px', height: '100px', backgroundColor: '#e9f1fc', borderRadius: '4px', position: 'absolute', top: '147px', left: '26px'}" />
      <digital-roll titlePosition="bottom" :style="{width: '100px', height: '56px', position: 'absolute', top: '169px', left: '85px'}" :content="{title: '满意度', digital: 98.12, suffix: '%'}" :digitalStyle="{color: '#2e2e2e', fontSize: '26px', fontFamily: 'Oswald-Regular'}" :titleStyle="{color: '#2e2e2e', fontSize: '14px'}" :suffixStyle="{color: '#8f919f', fontSize: '14px'}" :options="{decimalPlaces: '2'}" />
      <digital-roll titlePosition="bottom" :style="{width: '100px', height: '56px', position: 'absolute', top: '169px', left: '230px'}" :content="{title: '逾期率', digital: 98.12, suffix: '%'}" :digitalStyle="{color: '#2e2e2e', fontSize: '26px', fontFamily: 'Oswald-Regular'}" :titleStyle="{color: '#2e2e2e', fontSize: '14px'}" :suffixStyle="{color: '#8f919f', fontSize: '14px'}" :options="{decimalPlaces: '2'}" />
    </div>
    <data-loader :style="{width: '330px', height: '200px', position: 'absolute', top: '311px', left: '26px'}">
      <donut labelKey="label" valueKey="value" :data="craneStates.donutData" :hideLabel="true" :theme="{background: 'transparent', colors: ['#1b74ef', '#15c689', '#ffba08', '#bb4430', '#a2aebb', '#7b92b5']}" :innerRadius="0.55" :legendOptions="{label: {fill: '#2e2e2e', fontSize: '14px'}, offset: [12, 0], position: 'right', align: ['center', 'start'], layout: 'vertical'}" />
    </data-loader>
    <data-loader :style="{position: 'absolute', top: '576px', left: '33px'}">
      <ranking :data="craneStates.rankingData" :keys="{label: 'label', value: 'value'}" :labelStyle="{color: '#666666', fontSize: '16px', lineHeight: '24px'}" :valueStyle="{color: '#2e2e2e', fontSize: '16px', lineHeight: '24px'}" :lineStyle="{background: 'rgba(46, 46, 46, 0.05)', lineColor: ['rgba(27, 116, 239)', 'rgba(27, 116, 239, .5)']}" />
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/a9b74ddd-39de-493f-84ab-9d87fcf23fee/data?start='${craneStates.filterRange[0]}'&end='${craneStates.filterRange[1]}'`" method="get" :style="{width: '1089px', height: '417px', position: 'absolute', top: '104px', left: '417px'}">
      <v-chart :options="{tooltip: {trigger: 'axis'}, legend: {data: Object.keys(craneStates.chartLegendsMap).map((item) => {return craneStates.chartLegendsMap[item].name}), right: '80px'}, color: ['#15c689','#bb4430', '#ffba08', '#a2aebb', '#1b74ef','#74797f'], xAxis: [{type: 'category', axisLabel: {rotate: 45, interval: 0, color: '#2e2e2e', fontSize: '14px'}, data: craneStates.echartData.map((item) => {return item.label}), axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}], yAxis: [{type: 'value', scale: true, name: '件', axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}, {type: 'value', scale: true, name: '天', max: 10, min: 0, boundaryGap: [0.2, 0.2], axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}], dataZoom: {type: 'slider', show: 'true', xAxisIndex: [0], bottom: 0, handleStyle: {color: '#1b74ef'}}, series: Object.keys(craneStates.chartLegendsMap).map(item => {return {...craneStates.chartLegendsMap[item], data: craneStates.echartData.map(data => data[item])}})}" />
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/f1b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`" method="get" :style="{width: '1089px', height: '245px', position: 'absolute', top: '566px', left: '417px'}">
      <v-chart :options="{tooltip: {trigger: 'axis'}, color: ['#1b74ef'], xAxis: [{type: 'category', axisLabel: {rotate: 45, interval: 0, color: '#2e2e2e', fontSize: '14px'}, data: results.map(result => (new Date(result[0]).toISOString().slice(0, 10))), axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: true, lineStyle: {color: ['#2e2e2e'], type: 'dashed'}}}], yAxis: [{type: 'value', scale: true, name: '件', axisLine: {show: false}, axisTick: {show: false}, splitLine: {show: false}}], dataZoom: {type: 'slider', show: 'true', xAxisIndex: [0], bottom: 0, handleStyle: {color: '#1b74ef'}}, series: [{type: 'line', symbolSize: 8, lineStyle: {width: 3}, data: results.map(result => (result[0]))}]}" />
    </data-loader>
    <data-loader v-slot="{ results: results }" :url="`/v1/components/f4b74ddd-39de-493f-84ab-9d87fcf23fee/data?start=${craneStates.filterRange[0]}&end=${craneStates.filterRange[1]}`" method="get" :style="{width: '330px', height: '290px', position: 'absolute', top: '576px', left: '1570px'}">
      <vertical-bar v-if="results" :data="results.map((result) => ({label: result[1], count: result[0]}))" labelKey="label" valueKey="count" :mainAxis="{labelStyle: {rotate: -45, size: 14, fill: '#666666'}, labelLength: 7, lineStyle: {stroke: 'transparent'}}" :crossAxis="{range: {count: 5}, lineStyle: {stroke: 'transparent'}, labelStyle: {size: 16, fill: '#666666'}, unit: {content: '件', fill: '#666666'}}" :gap="{outer: 3.3}" :series="['#1b74ef']" :theme="{background: 'transparent'}" />
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
  BrickTooltip,
  Icon,
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

export const vis = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    VisSelect,
    BrickTooltip,
    Icon,
    DigitalRoll,
    Ranking,
    DatePicker,
    Donut,
    VerticalBar,
    'v-chart': ECharts,
  },

  data () {
    return {
      craneStates: {
        department: '',
        filterRange: ['1991-01-01', '2020-01-07'],
        donutData: [{label: '表扬', value: 10}, {label: '求助', value: 10}, {label: '咨询', value: 30}, {label: '投诉举报', value: 20}],
        rankingData: [{label: '东光街道办事处', value: 10}, {label: '牛市口街道办事处', value: 10}, {label: '双桂路街道办事处', value: 30}, {label: '督院街街道办事处', value: 20}],
        echartData: [{label: '公安分局', aa: 30, bb: 43, cc: 138, dd: 80, ee: 0.34, ff: 1.2}, {label: '综合行政执法局', aa: 60, bb: 83, cc: 108, dd: 60, ee: 1.34, ff: 2.2}, {label: '合江亭街道办事处', aa: 70, bb: 83, cc: 108, dd: 60, ee: 8.34, ff: 1.2}, {label: '成龙路街道办事处', aa: 75, bb: 83, cc: 108, dd: 60, ee: 7.03, ff: 0.2}, {label: '退役军人事务局', aa: 56, bb: 83, cc: 108, dd: 60, ee: 6.01, ff: 0.2}, {label: '龙舟路街道办事处', aa: 80, bb: 83, cc: 108, dd: 60, ee: 2.04, ff: 0.2}, {label: '人社局', aa: 34, bb: 83, cc: 108, dd: 60, ee: 1.34, ff: 0.2}, {label: '住房建设和交通运输局', aa: 70, bb: 83, cc: 108, dd: 60, ee: 5.34, ff: 6.2}, {label: '三圣街道办事处', aa: 55, bb: 83, cc: 108, dd: 60, ee: 8.84, ff: 7.4}, {label: '社会事物科', aa: 70, bb: 83, cc: 108, dd: 60, ee: 1.54, ff: 3.4}],
        chartLegendsMap: {aa: {name: '满意', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 12}, bb: {name: '不满意', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 12}, cc: {name: '无法判断满意状况', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 12}, dd: {name: '基本满意', type: 'bar', yAxisIndex: 0, stack: true, barWidth: 12}, ee: {name: '回访情况', type: 'line', yAxisIndex: 1, symbolSize: 8}, ff: {name: '平均回复时间', type: 'line', yAxisIndex: 1, symbolSize: 8}},
      },
    }
  },
}
export default vis
</script>
