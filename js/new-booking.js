$('.accordion-item').on('change', '.form-check-input', function(e) {
    const $subtitle = $(e.delegateTarget).find('.accordion-subtitle').empty();
    const $el = $('<p>').text($(e.target).parents('label').text());
    $subtitle.append($el);

    $(e.delegateTarget).next().find('.accordion-button').trigger('click');
});

$('.accordion-item').on('click', 'label.card', function(e) {
    const $subtitle = $(e.delegateTarget).find('.accordion-subtitle').empty();
    const $el = $(e.currentTarget).clone(false);
    $subtitle.append($el);

    $(e.delegateTarget).next().find('.accordion-button').trigger('click');
});

$('.accordion-item').on('click', 'table button', function(e) {
    const $subtitle = $(e.delegateTarget).find('.accordion-subtitle').empty();
    const now = new Date();
    const $el = $('<p>').text(`${now.getFullYear()}年${now.getMonth() + 1}月
    ${now.getDate()}日
    (${['日','月','火','水','木','金','土'][new Date().getDay()]})
     10:00`);
    $subtitle.append($el);

    $(e.delegateTarget).next().find('.accordion-button').trigger('click');
});