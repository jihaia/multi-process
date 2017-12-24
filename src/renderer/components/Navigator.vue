<template>
  <div style="padding: 15px; display: flex; justify-content: space-between;">
    <div style="display: flex; justify-content: flex-start;">
      <ou-contextual-menu>
        <ou-button type='hero' icon='ChevronDownMed'>Jobs</ou-button>
        <div slot='list'>
          <ou-contextual-menu-item name='Jobs' />
          <ou-contextual-menu-item type='divider' />
          <ou-contextual-menu-item type='header' name='Settings' />
          <ou-contextual-menu-item name='API Credentials' value='new' />
        </div>
      </ou-contextual-menu>
    </div>
    <div style="display: flex; justify-content: flex-end;">
      <ou-button>New Job</ou-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navigator',
    methods: {
    }
  }
</script>
