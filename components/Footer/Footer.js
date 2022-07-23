const footer = Vue.createApp({});

footer.component('footer-container', {
    template: `
        <footer>
            <div class="footer_block">
                <div class="footer_text__block">
                    <div class="footer_logo">
                        <span>CARTRADE</span>
                    </div>
                    <div class="footer_text">
                        <span>© 2022 Сироткин Алексей, по всем вопросам пишите по адресу sirotkin.234@gmail.com</span>
                    </div>
                </div>
                <div class="footer_link__block">
                    <a class="footer_link" href="index.html">Главная</a>
                    <a class="footer_link" href="catalog.html">Ассортимент</a>
                    <a class="footer_link" href="contacts.html">Наши контакты</a>
                    <a class="footer_link" href="where.html">О нас</a>
                    <a class="footer_link" href="comments.html">Отзывы</a>
                </div>
                
            </div>
        </footer>
    `,
    data() {
      return { 
        modalOpen: false
      }
    }
})

footer.mount('#footer')
