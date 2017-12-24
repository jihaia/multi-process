<template>
  <div>
  <div style="padding: 20px;">
    <ou-button type='hero' icon='Add'>Submit new job</ou-button>
    <ou-text-field placeholder='Given name' label='Name' />
    <ou-date-picker label='Start date' placeholder='Select a date...' />
    <ou-progress-indicator :percent='0.9' name='Example.jpg' description='Example.jpg' />
  </div>
  </div>
</template>

<script>
  export default {
    name: 'landing-page',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
</style>
