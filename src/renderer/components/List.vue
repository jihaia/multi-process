<template>
  <div>
    <div class="" style="padding: 15px; font-size: 18px; font-weight: 400;">Today</div>

    <div role="list" class="ms-List">
      <div class="ms-List-surface" style="background: #fff">
      <div class="ms-List-page">
        <div class="ms-List-cell">
          <div style="border-bottom: 1px solid #eaeaea; border-top: 1px solid #eaeaea;">
            <div class="ms-ListGhostingExample-itemCell" style="border-left: solid 3px red;">
            <div class="ms-Image ms-ListGhostingExample-itemImage">
              <img class="ms-Image-image ms-Image-image--portrait ms-Image-image--cover is-loaded is-fadeIn css-53" src="//placehold.it/246x246"></div>
              <div class="ms-ListGhostingExample-itemContent">
                <div class="ms-ListGhostingExample-itemName">
                  Apple - US ENT
                </div>
                <div class="ms-ListGhostingExample-itemIndex">
                  Submitted 101,008 rows
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ms-List-cell">
          <div style="border-bottom: 1px solid #eaeaea;">
            <div class="ms-ListGhostingExample-itemCell" style="border-left: solid 3px orange;">
            <div class="ms-Image ms-ListGhostingExample-itemImage">
              <img class="ms-Image-image ms-Image-image--portrait ms-Image-image--cover is-loaded is-fadeIn css-53" src="//placehold.it/246x246"></div>
              <div class="ms-ListGhostingExample-itemContent">
                <div class="ms-ListGhostingExample-itemName">
                  Apple - CAN ETT
                </div>
                <div class="ms-ListGhostingExample-itemIndex">
                  Submitted 29,491 rows
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="" style="padding: 15px; font-size: 18px; font-weight: 400;">Yesterday</div>
    <div role="list" class="ms-List"  style="margin-left: 2px;">
      <div class="ms-List-surface" style="background: #fff">
      <div class="ms-List-page">
        <div class="ms-List-cell">
          <div style="border-bottom: 1px solid #eaeaea; border-top: 1px solid #eaeaea;">
            <div class="ms-ListGhostingExample-itemCell" style="border-left: solid 3px #b4009e;">
            <div class="ms-Image ms-ListGhostingExample-itemImage">
              <img class="ms-Image-image ms-Image-image--portrait ms-Image-image--cover is-loaded is-fadeIn css-53" src="//placehold.it/246x246"></div>
              <div class="ms-ListGhostingExample-itemContent">
                <div class="ms-ListGhostingExample-itemName">
                  Apple - US ENT
                </div>
                <div class="ms-ListGhostingExample-itemIndex">
                  Submitted 101,008 rows
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ms-List-cell">
          <div style="border-bottom: 1px solid #eaeaea;">
            <div class="ms-ListGhostingExample-itemCell" style="border-left: solid 3px #107c10;">
            <div class="ms-Image ms-ListGhostingExample-itemImage">
              <img class="ms-Image-image ms-Image-image--portrait ms-Image-image--cover is-loaded is-fadeIn css-53" src="//placehold.it/246x246"></div>
              <div class="ms-ListGhostingExample-itemContent">
                <div class="ms-ListGhostingExample-itemName">
                  Apple - CAN ETT
                </div>
                <div class="ms-ListGhostingExample-itemIndex">
                  Submitted 29,491 rows
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ms-List-cell">
          <div style="border-bottom: 1px solid #eaeaea;">
            <div class="ms-ListGhostingExample-itemCell" style="border-left: solid 3px #107c10;">
            <div class="ms-Image ms-ListGhostingExample-itemImage">
              <img class="ms-Image-image ms-Image-image--portrait ms-Image-image--cover is-loaded is-fadeIn css-53" src="//placehold.it/246x246"></div>
              <div class="ms-ListGhostingExample-itemContent">
                <div class="ms-ListGhostingExample-itemName">
                  Apple - CAN ETT
                </div>
                <div class="ms-ListGhostingExample-itemIndex">
                  Submitted 29,491 rows
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>

.ms-List {
  margin-left: 3px;
}

.ms-ListGhostingExample-itemCell {
    min-height: 50px;
    padding: 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.ms-ListGhostingExample-itemCell {
    position: relative;
}

.ms-ListGhostingExample-itemCell {
    outline: transparent;
}

.ms-ListGhostingExample-itemImage {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width:44px;
    height:36px
}

.ms-ListGhostingExample-itemImage .ms-Image-image--portrait {
  height: 36px;
  border-radius: 50%
}


.ms-ListGhostingExample-itemContent {
    margin-left: 10px;
}

.ms-ListGhostingExample-itemName {
    font-size: 18px;
    font-weight: 100;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.ms-ListGhostingExample-itemCell:hover {
    background: #eff6fc;
    cursor: pointer;
}
</style>
