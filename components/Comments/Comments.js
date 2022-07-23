class Comments {

    render() {
        let htmlComments = '';
        
        COMMENTS.forEach(({name, text}) => {
        htmlComments += `
            
                <div class="comments-container__block">
                    <div class="comments-container__block_name">${name}</div>
                    <div class="comments-container__block_text">${text}</div>
                </div>
            
        `;

        const html = `
        <div class="comments-container">
            <div class="comments-container__title">Отзывы</div>
            <div class="comments-holder">
                ${htmlComments}
            </div>
        </div>
        `;

        ROOT_COMMENTS.innerHTML = html;
    })
}
};

const commentsPage = new Comments();
commentsPage.render();