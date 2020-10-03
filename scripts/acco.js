const openItem = (item) => {
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__content");
    const textBlock = contentBlock.find(".team__content-block");
    const reqHeight = textBlock.height();
    console.log(reqHeight);
    container.addClass("t_active");

    contentBlock.height(reqHeight);
    console.log(reqHeight);


}

    ;

const closeEveryItem = (container) => {
    const items = container.find(".team__content");
    const itemContainer = container.find(".team__item");

    itemContainer.removeClass("t_active");
    items.height(0);

}



// const wrap = document.querySelector('.team__title');


$(".team__title").click((e) => {
    const $this = $(e.currentTarget);
    const container = $this.closest(".team");
    const elemContainer = $this.closest(".team__item");
    // const wrap = document.querySelector('.team__title');


    if (elemContainer.hasClass("t_active")) {
        closeEveryItem(container);
        // $this(wrap).toggleClass('noMagic');
    }

    else {
        closeEveryItem(container);
        openItem($this);

    }
}
)

// $(document).ready(()=> {
        //     $('.team__title').on('click', function (e) {
        //         e.preventDefault();
        //         // $('.team__title').removeClass('noMagic')
        //         if ($('.team__title').hasClass('noMagic')
        //         ) {
        //             $('.team__title').removeClass('noMagic')

        //         }

        //         else ($(this).toggleClass('noMagic')
        //         )        // $(this).addClass('noMagic1')
        //     })
        // }
        // )



// let wrap = document.querySelector('.wrap');

// wrap.onclick = () => wrap.classList.toggle('noMagic');
