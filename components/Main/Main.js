const app = Vue.createApp({
    data() {
      return {
        currentTab: 'Posts',
        tabs: ['Posts']
      }
    },
    computed: {
      currentTabComponent() {
        return 'tab-' + this.currentTab.toLowerCase()
      }
    }
  })
  
 
  app.component('tab-posts', {
    template: `<div class="dynamic-component-demo-posts-tab">
      <ul class="dynamic-component-demo-posts-sidebar">
        <li
          v-for="post in posts"
          :key="post.id"
          :class="{
            'dynamic-component-demo-active': post === selectedPost
          }"
          @click="selectedPost = post"
        >
          {{ post.title }}
        </li>
      </ul>
      <div class="dynamic-component-demo-post-container">
        <div v-if="selectedPost" class="dynamic-component-demo-post">
          <h3>{{ selectedPost.title }}</h3>
          <div v-html="selectedPost.content"></div>
        </div>
        <strong v-else>
        </strong>
      </div>
    </div>`,
      data() {
      return {
        posts: [
          {
            id: 1,
            title: 'Наше отношение',
            content:
              '<p>Мы считаем, что удобством интерфейса или количеством предложений уже никого не удивишь. Это как кондиционер или электрические стеклоподъемники — должно быть в базовой комплектации. Поэтому мы заботимся о душевном спокойствии пользователей и работает для того, чтобы сделка была в радость.</p>'
          },
          {
            id: 2,
            title: 'Услуги по перевозке',
            content:
              '<p>Мы рады предложить Вам услуги по перевозке автомобиль автовозами по России. В большинстве случаев мы сможем оказать услуги по перевозке автомобиль, независимо от местонахождения автомобиль и города доставки. Мы доставим Ваш автомобиль быстро, качественно и в полной сохранности.</p>'
          },
          {
            id: 3,
            title: 'Обеспечение удобного инструмента',
            content:
              '<p>Основная задача компании - обеспечить простой и удобный инструмент для реализации и приобретения подержанного автотранспорта.Нашим клиентам мы предоставляем полностью готовое решение для реализации, покупки, осмотра и логистики автомобилей.</p>'
          }
        ],
        selectedPost: null
      }
    }
  })

  
  app.mount('#mane')