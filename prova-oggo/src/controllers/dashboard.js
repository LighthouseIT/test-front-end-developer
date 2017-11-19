// @author: Oggo Petersen
import angular from 'angular';

// Constantes para obtenção dos dados para apresentação no Dashboard.
const ESTIMATED_EXPENSES_DATA_URL = `https://lighthouse-test-front-end.firebaseio.com/estimatedExpenses.json`;
const GRAPHICS_DATA_URL = `https://lighthouse-test-front-end.firebaseio.com/amount.json`;

// Instanciação do controller para a tela.
angular.module(`lighthouseApp`).controller(`DashboardController`, (`$http`, `$q`, `$scope`, ($http, $q, $scope) => {

  // Inicializa dados da tela.
  const startValue = `0.0`.toLocaleString(`pt-BR`);
  $scope.estimatedExpenses = {
    currentDay: startValue,
    currentMonth: startValue,
    lastDay: startValue,
    lastMonth: startValue,
    total: startValue
  };
  $scope.chartData = [];

  // Obtém dados do gráfico e ganhos estimados.
  const graphicDataPromise = $http.get(GRAPHICS_DATA_URL);
  const estimatedExpensesPromise = $http.get(ESTIMATED_EXPENSES_DATA_URL);

  // Junta as duas requisições e obtém seus resultados.
  $q.all([graphicDataPromise, estimatedExpensesPromise]).then((result) => {
    // Posição 0 -> dados do gráfico.
    const graphicsData = result[0].data;
    // Posição 1 -> dados de ganhos estimados.
    const estimatedExpensesData = result[1].data;

    // Atualiza no $scope os valores que devem ser apresentados.
    $scope.estimatedExpenses = {
      currentDay: estimatedExpensesData.currentDay.toLocaleString(`pt-BR`),
      currentMonth: estimatedExpensesData.currentMonth.toLocaleString(`pt-BR`),
      lastDay: estimatedExpensesData.lastDay.toLocaleString(`pt-BR`),
      lastMonth: estimatedExpensesData.lastMonth.toLocaleString(`pt-BR`),
      total: estimatedExpensesData.total.toLocaleString(`pt-BR`),
    };

    // Atualiza dados de gráfico.
    const points = [];
    $scope.tickValues = [];
    for (const [index, value] of graphicsData.days.entries()) {
      points.push({x: index, y: graphicsData.values[index]});
      $scope.tickValues.push(index);
    }
    $scope.graphicsData = graphicsData;
    $scope.chartData = [{
      values: points,
      key: `Valores`,
      color: '#2ca02c'
    }];
    // Dentro de um timeout para liberar o processamento do browser.
    setTimeout(() => {
      $scope.generateChart();
    }, 100);
  });


  // Gera gráfico.
  $scope.generateChart = () => {
    // Criação de um gráfico linha.
    const chart = nv.models.lineChart().margin({left: 100, right: 50, bottom: 100})
      .useInteractiveGuideline(true).showLegend(true).showYAxis(true)
      .showXAxis(true);

    // Configuração dos eixos.
    chart.xAxis.axisLabel('Tempo').tickFormat((d) => $scope.graphicsData.days[d])
      .tickValues($scope.tickValues).rotateLabels(45);
    chart.yAxis.axisLabel('Quantidade');

    // Criação do gráfico.
    d3.select('#chart svg').datum($scope.chartData).call(chart);
    nv.utils.windowResize(chart.update);
  };

  // Controle de apresentação em mobile.
  $scope.toggleLeftMenu = () => {
    $scope.toggleMenu = !$scope.toggleMenu;
  };

}));
