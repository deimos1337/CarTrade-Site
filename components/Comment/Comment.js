const comment = Vue.createApp({});

comment.component('modal-button', {
  template: `
    <button class="comment-element__btn_first" @click="modalOpen = true">Наша почта</button>

    <teleport to="body">
      <div v-if="modalOpen" class="modal">
        <div class="comment-holder">
            <div class="comment-container">
                <div class="comment-element">
                    <span class="comment-element-title">В течение нескольких дней отзыв будет размещён!<span/>
                </div>
                <div class="comment-element">
                    <span class="comment-element-text">Email: sirotkin.234@gmail.com<span/>
                </div>
            </div>
            <button class="comment-element__btn_new"@click="modalOpen = false">
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

comment.mount('#comment')