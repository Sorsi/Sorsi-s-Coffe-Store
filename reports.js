/*jshint esversion: 6 */
let coffeeSales = [
  { month: Jan, sales: 170 },
  { month: Feb, sales: 320 },
  { month: Mar, sales: 432 },
  { month: Apr, sales: 548 },
  { month: May, sales: 342 },
  { month: Jun, sales: 689 },
  { month: Jul, sales: 344 },
  { month: Aug, sales: 109 },
  { month: Sep, sales: 655 },
  { month: Oct, sales: 327 },
  { month: Nov, sales: 109 },
  { month: Dec, sales: 235 },
];

function createAxis(context, startX, startY, endX, endY) {
  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(endX, endY);
  context.closePath();
  context.stroke();
}

function createBar(context, x, y, width, height) {
  context.beginPath();
  context.rect(x, y, width, height);
  context.closePath();
  context.stroke();
  context.fill();
}

function drawChart() {
  let canvas = document.getElementById("bar-chart");
  if (canvas && canvas.getContext) {
    let context = canvas.getContext("2d");
    console.log(canvas.height);
    createBarChart(context, coffeeSales, 30, 20, canvas.height - 20, 50);
  }
}

function createBarChart(context, data, startX, barWidth, chartHeight) {
  console.log("hhhhhhhhhhhhhhhhhhhhhh");
  context.lineWidth = "1.2";
  let startY = 780;
  console.log(startY, "startjfjfjfjf");
  createAxis(context, startX, startY, startX, 30); //vertical
  createAxis(context, startX, startY, startY, 650, startY); //horizontal

  context.lineWidth = "0.0";
  let maxSales = 0;
  for (let i = 0; i < data.length; i++) {
    let itemMonth = data[i].month;
    let itemSales = data[i].sales;
    if (itemSales > maxSales) maxSales = itemSales;

    context.fillStyle = "blue";
    createBar(
      context,
      20 + startX + i * barWidth + i + i * 30,
      chartHeight - itemSales
    );

    context.textAlign = "left";
    context.fillStyle = "black";
    context.fillText(
      itemMonth,
      20 + startX + i * barWidth + i + i * 30,
      chartHeight + 15
    );
  }
}
