const teleport = Vue.createApp({});

teleport.component('modal-button', {
  template: `
    <button class="favorite-element__btn_first" @click="modalOpen = true">
        Наши контакты!
    </button>

    <teleport to="body">
      <div v-if="modalOpen" class="modal">
        <div class="teleport-holder">
            <div class="teleport-container">
                <div class="teleport-element">
                    <span class="teleport-element-text">Телефон: 8(918) 456-12-32<span/>
                </div>
                <div class="teleport-element">
                    <span class="teleport-element-text">Email: sirotkin.234@gmail.com<span/>
                </div>
                <div class="teleport-element">
                    <span class="teleport-element-text">Telegram: @cartrade<span/>
                </div>
                <div class="teleport-element">
                    <span class="teleport-element-text">Вконтакте: vk.vom/carTrade<span/>
                </div>
            </div>
            <button class="favorite-element__btn_new"@click="modalOpen = false">
            Закрыть
            </button>
        </div>
        </div>
      </div>
    </teleport>
  `,
  data() {
    return { 
      modalOpen: false
    }
  }
})

teleport.mount('#teleport')