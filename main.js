$ (()=>{
    console.log("on page load");

    //nav bar 
    fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbar-placeholder').innerHTML = data;
            });

    // display menu
    renderFeaturedMenu(featureMenu);

    // view image menu 
    $("#viewMenuBtn").click (()=>{
        menuImg = "./images/menu.webp";
        window.open(menuImg, '_blank');
    });

    // view image menu 
    $("#viewFallMenuBtn").click (()=>{
        window.open('./images/fallMenu.webp', '_blank');
    });
});

function renderList(selector, items) {
    const $list = $(selector).empty();

    items.forEach(item => {
        const name = typeof item === 'string'? item: item.name;

        $('<li>').text(name).appendTo($list);
    });
}


function renderFeaturedMenu(items) {
    const $container = $('#featured-list').empty();

    items.forEach(item => {
        const $card = $('<article>').addClass('featured-card');

         if (item.image) {
            $('<img>')
                .attr('src', item.image)
                .attr('alt', item.name)
                .addClass('featured-image')
                .appendTo($card);
        }

        $('<h3>')
            .text(item.name)
            .appendTo($card);

        $('<p>')
            .text(item.desc || 'A seasonal favourite from Grateful Grounds Cafe.')
            .appendTo($card);

        $container.append($card);
    });
}


function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
