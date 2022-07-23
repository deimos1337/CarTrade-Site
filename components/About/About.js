const about = Vue.createApp({});



about.component('about-container', {
    template: `
        <div class="about_container">
            <div class="block_about">
                <p class="map_header">О нас</p>
                <div class="about_text__container">
                    <span class="about_text">
                    Компания CarTrade предлагает квалифицированное сервисное обслуживание во всех структурных подразделениях автомобильного бизнеса России. Выкуп, продажа подержанных автомобилей всех известных марок на выгодных условиях – узнайте, как работает лидер.
                    </span>
                </div>
            </div>
        </div>
    `,
    data() {
      return { 
        modalOpen: false
      }
    }
})

about.mount('#about')

