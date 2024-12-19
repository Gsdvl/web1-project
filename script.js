let model_overview = {
    model_name: 'FlowerClassifierV:3',
    lr: 0.0011772941797971723,
    train_time: "8m32s",
    epochs: 10,
    accuracy: 0.96128
};
const model_usage = {
    max_usage: 746,
    current_usage: 1248,
    limit: 300000

};


let title = `Informações sobre o modelo: ${model_overview.model_name}`
let lr = `Learning Rate: ${model_overview.lr}`
let train_time = `Train_Time: ${model_overview.train_time}`
let epochs = `Epochs: ${model_overview.epochs}`
let accuracy = `Accuracy: ${model_overview.accuracy}`

document.getElementById("lr").innerText = lr;
document.getElementById("titulo").innerText = title;
document.getElementById("train_time").innerText = train_time;
document.getElementById("epochs").innerText = epochs;
document.getElementById("accuracy").innerText = accuracy;

const contents = {
    content1: `
        <h3 class="texto-padrao titulo">${title}</h3>
        <p class="texto-padrao">${lr}</p>
        <p class="texto-padrao">${train_time}</p>
        <p class="texto-padrao">${epochs}</p>
        <p class="texto-padrao">${accuracy}</p>
    `,
    content2: `
        <canvas id="myChart" width="400" height="200"></canvas>
    `,
    content3: `
        <canvas id="myChart" width="400" height="200"></canvas>
        <p class="texto-padrao titulo">Max usage: ${model_usage.max_usage}</p>
        <p class="texto-padrao titulo">Current usage: ${model_usage.current_usage} / ${model_usage.limit}</p>
    `,
    content4: `
        <p>Conteúdo da Aba 3: Vestibulum ante ipsum primis in faucibus orci 
        luctus et ultrices posuere cubilia curae.</p>
    `
};
function createLineChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
            datasets: [{
                label: 'Usos (em tokens)',
                data: [10, 25, 15, 30, 20],
                fill: false,
                borderColor: '#1a1a1a',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}







function selectTab(event, contentId) {
    let menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    event.currentTarget.classList.add('active');


    const contentContainer = document.getElementById('content-container');
    
    // Atualiza o conteúdo no contêiner principal
    contentContainer.innerHTML = contents[contentId];

    if(contentId === 'content3') {
        createLineChart();   
    }
}
