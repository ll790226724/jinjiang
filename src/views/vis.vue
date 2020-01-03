<template>
  <div class="vis">
    <div ref="page-title" :style="{color: '#2e2e2e', fontSize: '34px', fontWeight: 500, textAlign: 'center', letterSpacing: '1px'}">
      锦江区网络理政
    </div>
    <label ref="page-tip" :style="{color: '#2e2e2e', fontSize: '14px', fontWeight: 400}">
      * 该数据截至时间 2019年12月31日
    </label>
    <data-loader ref="departments-loader" v-slot="{ results: results }" url="" method="post" :style="{width: '160px', position: 'absolute', top: '15px', left: '1147px'}">
      <vis-select ref="departments-select" v-if="results" :options="[{label: '东光街道办事处', uuid: 1}, {label: '牛市口街道办事处', uuid: 2}]" v-model="craneStates.department" placeholder="所有承办部门" />
    </data-loader>
    <div ref="datetime-picker-wrapper" :style="{position: 'absolute', top: '15px', left: '1327px'}">
      <date-picker ref="datetime-picker" type="daterange" valueFormat="yyyy-MM-dd" format="yyyy-MM-dd" size="small" :unlinkPanels="true" v-model="craneStates.filter_range" start-placeholder="开始日期" end-placeholder="结束日期" range-separator=" " />
    </div>
    <brick-tooltip ref="weather-text" content="窗口办理量下降2%" placement="bottom-right" :style="{width: '59px', height: '23px', backgroundColor: '#205bf6', borderRadius: '4px', color: '#ffffff', fontFamily: 'Oswald-Light', lineHeight: '1', paddingLeft: '6px', dispaly: 'flex', alignItems: 'center', display: 'flex', position: 'absolute', top: '27px', left: '123px'}">
      <span ref="weather-text-value">
        <icon ref="weather-text-icon" name="caret-down" size="16px" color="white" :style="{margin: '0 4px'}" />
      </span>
    </brick-tooltip>
    <div ref="banlishuliang">
      <digital-roll titlePosition="left" :content="{title: '当月办件数量', digital: 1876, suffix: '件'}" :digitalStyle="{color: '#ffffff', fontSize: '26px'}" :titleStyle="{color: '#ffffff', fontSize: '14px'}" :suffixStyle="{color: '#ffffff', fontSize: '14px'}" />
    </div>
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
} from '@byzanteam/vis-components'
import {
  DatePicker,
} from 'element-ui'

export const vis = {
  mixins: [BuiltInMixin],

  components: {
    DataLoader,
    VisSelect,
    BrickTooltip,
    Icon,
    DigitalRoll,
    DatePicker,
  },

  data () {
    return {
      craneStates: {
      },
    }
  },
}
export default vis
</script>