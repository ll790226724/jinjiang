<template>
  <div class="vis">
    <div ref="page-title" :style="{color: '#2e2e2e', fontSize: '34px', fontWeight: 500, textAlign: 'center', letterSpacing: '1px'}">
      锦江区网络理政
    </div>
    <label ref="page-tip" :style="{color: '#2e2e2e', fontSize: '14px', fontWeight: 400, position: 'absolute', top: '30px', left: '429px'}">
      * 该数据截至时间 2019年12月31日
    </label>
    <data-loader ref="departments-loader" v-slot="{ results: results }" url="" method="post" :style="{width: '160px', position: 'absolute', top: '12px', left: '1117px'}">
      <vis-select ref="departments-select" :options="[{label: '东光街道办事处', uuid: 1}, {label: '牛市口街道办事处', uuid: 2}]" v-model="craneStates.department" placeholder="所有承办部门" />
    </data-loader>
    <div ref="datetime-picker-wrapper" :style="{position: 'absolute', top: '12px', left: '1310px'}">
      <date-picker ref="datetime-picker" type="daterange" valueFormat="yyyy-MM-dd" format="yyyy-MM-dd" size="small" :unlinkPanels="true" v-model="craneStates.filter_range" start-placeholder="开始日期" end-placeholder="结束日期" range-separator=" " />
    </div>
    <brick-tooltip ref="weather-text" content="窗口办理量下降2%" placement="bottom-right" :style="{width: '59px', height: '23px', backgroundColor: '#205bf6', borderRadius: '4px', color: '#ffffff', fontFamily: 'Oswald-Light', lineHeight: '1', paddingLeft: '6px', dispaly: 'flex', alignItems: 'center', display: 'flex', position: 'absolute', top: '27px', left: '123px'}">
      <span ref="weather-text-value">
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
      <digital-roll titlePosition="left" :content="{title: '当月办件数量', digital: 1876, suffix: '件'}" :digitalStyle="{color: '#ffffff', fontSize: '26px'}" :titleStyle="{color: '#ffffff', fontSize: '14px'}" :suffixStyle="{color: '#ffffff', fontSize: '14px'}" />
      <div :style="{display: 'flex'}">
        <digital-roll titlePosition="bottom" :content="{title: '满意度', digital: 98.12, suffix: '%'}" :digitalStyle="{color: '#2e2e2e', fontSize: '26px'}" :titleStyle="{color: '#2e2e2e', fontSize: '14px'}" :suffixStyle="{color: '#8f919f', fontSize: '14px'}" :options="{decimalPlaces: '2'}" />
        <digital-roll titlePosition="bottom" :content="{title: '逾期率', digital: 98.12, suffix: '%'}" :digitalStyle="{color: '#2e2e2e', fontSize: '26px'}" :titleStyle="{color: '#2e2e2e', fontSize: '14px'}" :suffixStyle="{color: '#8f919f', fontSize: '14px'}" :options="{decimalPlaces: '2'}" />
      </div>
    </div>
    <data-loader :style="{width: '330px', height: '200px', position: 'absolute', top: '311px', left: '26px'}">
      <donut labelKey="label" valueKey="value" :data="craneStates.donutData" :hideLabel="true" :theme="{background: 'transparent', colors: ['#1b74ef', '#15c689', '#ffba08', '#bb4430', '#a2aebb', '#7b92b5']}" :innerRadius="0.55" :legendOptions="{label: {fill: '#2e2e2e', fontSize: '14px'}, offset: [12, 0], position: 'right', align: ['center', 'start'], layout: 'vertical'}" />
    </data-loader>
    <data-loader :style="{position: 'absolute', top: '576px', left: '33px'}">
      <ranking :data="craneStates.rankingData" :keys="{label: 'label', value: 'value'}" :labelStyle="{color: '#666666', fontSize: '16px', lineHeight: '24px'}" :valueStyle="{color: '#2e2e2e', fontSize: '16px', lineHeight: '24px'}" :lineStyle="{background: 'rgba(46, 46, 46, 0.05)', lineColor: ['rgba(27, 116, 239)', 'rgba(27, 116, 239, .5)']}" />
    </data-loader>
  </div>
</template>

<script>
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
  },

  data () {
    return {
      craneStates: {
        department: '',
        donutData: [{label: '表扬', value: 10}, {label: '求助', value: 10}, {label: '咨询', value: 30}, {label: '投诉举报', value: 20}],
        rankingData: [{label: '东光街道办事处', value: 10}, {label: '牛市口街道办事处', value: 10}, {label: '双桂路街道办事处', value: 30}, {label: '督院街街道办事处', value: 20}],
      },
    }
  },
}
export default vis
</script>