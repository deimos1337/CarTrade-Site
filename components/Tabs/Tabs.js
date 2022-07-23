const tabs = Vue.createApp({});

tabs.component('tabs-container', {
    template: `
        <div class="tabs_container">
            <div class="block_tabs">
                <p class="tabs_header">Наши контакты</p>
                <div class="tabs">
                    <input type="radio" name="tab-btn" id="tab-btn-1" value="" checked>
                    <label for="tab-btn-1">Главный офис</label>
                    <input type="radio" name="tab-btn" id="tab-btn-2" value="">
                    <label for="tab-btn-2">Тех. поддержка</label>
                    <div id="content-1">
                        <div class="tab-holder">
                            <div class="tab-container">
                                <div class="tab-container__column_left">
                                    <div class="tab-container__column">
                                        <img class="tab-holder__image" src="images/telephone.png"/>Телефон
                                    </div>
                                    <div class="tab-container__column">
                                        <img class="tab-holder__image" src="images/gmail.png"/>Email
                                    </div>
                                    
                                    <div class="tab-container__column">
                                        <img class="tab-holder__image" src="images/telegram.png"/>Telegram
                                    </div>
                                    <div class="tab-container__column">
                                        <img class="tab-holder__image" src="images/vk.png"/>Вконтакте
                                    </div>
                                </div>
                                
                            </div>
                            <div class="tab-container">
                                <div class="tab-container__column_right">
                                    <div class="tab-container__column">
                                        +7 (915) 891-90-19
                                    </div>
                                    <div class="tab-container__column">
                                        sirotkin.234@gmail.com
                                    </div>
                                    
                                    <div class="tab-container__column">
                                        @CarTrade
                                    </div>
                                    <div class="tab-container__column">
                                        vk.vom/carTrade
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="content-2">
                        <div class="tab-holder">
                            <div class="tab-container">
                                <div class="tab-container__column_left">
                                    <div class="tab-container__column">
                                        <img class="tab-holder__image" src="images/telephone.png"/>Телефон
                                    </div>
                                    <div class="tab-container__column">
                                        <img class="tab-holder__image" src="images/gmail.png"/>Email
                                    </div>
                                    
                                    <div class="tab-container__column">
                                        <img class="tab-holder__image" src="images/telegram.png"/>Telegram
                                    </div>
                                    <div class="tab-container__column">
                                        <img class="tab-holder__image" src="images/vk.png"/>Вконтакте
                                    </div>
                                </div>
                                
                            </div>
                            <div class="tab-container">
                                <div class="tab-container__column_right">
                                    <div class="tab-container__column">
                                        +7 (919) 851-90-19
                                    </div>
                                    <div class="tab-container__column">
                                        tech.help1901@gmail.com
                                    </div>
                                    <div class="tab-container__column">
                                        @CarTradeTechHelp
                                    </div>
                                    <div class="tab-container__column">
                                        vk.vom/techHelp
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

tabs.mount('#tabs')
