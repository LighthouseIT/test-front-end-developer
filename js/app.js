// Variavel tipo de gráfico
var tipo = 'bar';

// Carrega gráfico e dados ao abrir janela.

window.onload = function () {
  carregaDados();
  carregaGrafico();
}

// Event listeners 

let lista = document.querySelector('.lista');
lista.addEventListener('click', menu);

let submenu_listaTrabalho = document.querySelector('.listaTrabalho');
submenu_listaTrabalho.addEventListener('click', mostra_listaTrabalho);

let submenu_criar = document.querySelector('.criar');
submenu_criar.addEventListener('click', mostra_criar);

let tipoGrafico = document.querySelector('#troca');
tipoGrafico.addEventListener('click', mudaTipoGrafico);


// Função para mostrar o submenu lista de trabalho

function mostra_listaTrabalho() {
  document.querySelector('.submenu-listaTrabalho').classList.toggle("submenu-listaTrabalho--show");
}

// Função para mostrar o submenu criar

function mostra_criar() {
  document.querySelector('.submenu-criar').classList.toggle("submenu-criar--show");
}

// Função do dropdown

function menu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Função para alternar o tipo de gráfico, infelizmente não consegui resolve o bug quando passa o mouse por cima do gráfico ele retorna para o tipo anterior.

function mudaTipoGrafico() {
  tipo = 'line';
  carregaGrafico();
}

// Chamada AJAX para buscar os dados para o Gráfico no Firebase e também fazer a criação e injeção do gráfico no HTML

function carregaGrafico() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://lighthouse-test-front-end.firebaseio.com/amount.json', true);

  xhr.onload = function () {
    if (this.status == 200) {
      let output;
      data = JSON.parse(this.responseText);
      var ctx = document.getElementById("myChart").getContext('2d');
      // Remove gráfico antigo
      if (myChart) {
        myChart.destroy();
      }
      var myChart = new Chart(ctx, {
        type: tipo,
        data: {
          labels: data.days,
          datasets: [{
            label: '',
            data: data.values,
            backgroundColor: [

              'rgba(54, 162, 235, 0.2)',

            ],
            borderColor: [

              'rgba(54, 162, 235, 1)',

            ],
            borderWidth: 1
          }]
        },
        options: {
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });

    }
  }

  xhr.send();
}



// Chamada assíncrona para carregar os dados para o card superior no Firebase, criar e injetar o mesmo no HTML.


function carregaDados() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://lighthouse-test-front-end.firebaseio.com/estimatedExpenses.json', true);

  xhr.onload = function () {
    if (this.status == 200) {
      let primeiroSlide = '',
        segundoSlide = '',
        terceiroSlide = '';
      data = JSON.parse(this.responseText);
      primeiroSlide += `
            <div class="text-center">
            <h4> Ganhos estimados </h4>
            <p> Para o dia atual </p>
            <h1 class="fonteVerde light">R$ ${data.total} </h1>
            <p> Para o dia atual <p>
            <h1 class="light">R$ ${data.currentDay}<h1>
            </div>
        `;
      segundoSlide += `
            <div class="text-center">
            <p>Durante o dia anterior </p>
            <h1> R$ ${data.lastDay} </h1>
            <p> Para o mês atual </p>
            <h1> R$ ${data.lastDay} </h1>
            </div>
        `;
      terceiroSlide += `
            <div class="text-center">
            <p> Mês passado </p>
            <h1> R$ ${data.lastMonth} </h1>
            </div>
        `;
      document.getElementById('primeiro').innerHTML = primeiroSlide;
      document.getElementById('segundo').innerHTML = segundoSlide;
      document.getElementById('terceiro').innerHTML = terceiroSlide;
    }

  }

  xhr.send();
}

// Carrousel para troca dos divs no card superior versão mobile

var slider1 = new Slider('#demo', '.z-slide-item', {

  // slide inicial
  "current": 0,

  // velocidade da animação
  "duration": 0.8,

  // porcentagem minima de arrasto na tela para trocar o slide
  'minPercentToSlide': null,

  // auto play
  "autoplay": true,

  // direção de troca
  "direction": 'left',

  //intervalo de autplay
  'interval': 2

});