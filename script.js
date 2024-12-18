const contents = {
    content1: `
        <p>Algum texto</p>
    `,
    content2: `
        <p>Conteúdo da Aba 2: Nulla facilisi. Donec fringilla arcu id urna 
        tincidunt aliquet. Morbi aliquam interdum sapien.</p>
    `,
    content3: `
        <p>Conteúdo da Aba 3: Vestibulum ante ipsum primis in faucibus orci 
        luctus et ultrices posuere cubilia curae.</p>
    `
};

function selectTab(event, contentId) {
    let menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    event.currentTarget.classList.add('active');


    const contentContainer = document.getElementById('content-container');

    // Atualiza o conteúdo no contêiner principal
    contentContainer.innerHTML = contents[contentId];
}
