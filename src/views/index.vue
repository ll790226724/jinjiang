<template>
  <div class="index">
    <div ref="banlishuliang" />
  </div>
</template>

<script>
import BuiltInMixin from '../mixins/built_in'

export const index = {
  mixins: [BuiltInMixin],

  components: {
  },

  data () {
    return {
      craneStates: {
      },
    }
  },
}
export default index
</script>