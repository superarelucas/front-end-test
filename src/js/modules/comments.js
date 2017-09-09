const commentModule = (function() {
    'use strict';

    const wrapper = document.querySelector('.comments-wrapper');

    function createMarkup(comment) {
        const commentBody = comment.body,
              author = comment.name;

        const markup = `
            <div class='col-sm-6'>
                <div class="review-comment">
                    <p class="comment">${commentBody}</p>
                    <span class="author">${author}</span>
                </div>
            </div>
        `;

        return markup;
    }

    function render(comments) {
        comments.forEach(comment => {

            const markup = createMarkup(comment);

            wrapper.insertAdjacentHTML('beforeend', markup);
        });
    }

    return {
        render
    }
})();