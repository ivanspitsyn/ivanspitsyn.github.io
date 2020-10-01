const openItem = (item) => {
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__content");
    const textBlock = contentBlock.find(".team__content-block");
    const reqHeight = textBlock.height();

    container.addClass("t_active");
    contentBlock.height(reqHeight);

}

    ;

const closeEveryItem = (container) => {
    const items = container.find(".team__content");
    const itemContainer = container.find(".team__item");

    itemContainer.removeClass("t_active");
    items.height(0);

}

    ;


$(".team__title").click((e) => {
    const $this = $(e.currentTarget);
    const container = $this.closest(".team");
    const elemContainer = $this.closest(".team__item");

    if (elemContainer.hasClass("t_active")) {
        closeEveryItem(container);
    }

    else {
        closeEveryItem(container);
        openItem($this);
    }
}

)