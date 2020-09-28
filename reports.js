/*jshint esversion: 6 */
let coffeeSales = [
  { month: "Jan", sales: 45 },
  { month: "Feb", sales: 65 },
  { month: "Mar", sales: 72 },
  { month: "Apr", sales: 80 },
  { month: "May", sales: 60 },
  { month: "Jun", sales: 99 },
  { month: "Jul", sales: 70 },
  { month: "Aug", sales: 109 },
  { month: "Sep", sales: 97 },
  { month: "Oct", sales: 67 },
  { month: "Nov", sales: 109 },
  { month: "Dec", sales: 50 },
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
    createBarChart(context, coffeeSales, 30, 6, canvas.height - 20, 50);
  }
}

function createBarChart(context, data, startX, barWidth, chartHeight) {
  context.lineWidth = "1.2";
  createAxis(context, startX, chartHeight, startX, 30); //vertical
  createAxis(context, startX, chartHeight, 350, chartHeight); //horizontal

  context.lineWidth = "0.0";
  let maxSales = 0;
  for (let i = 0; i < data.length; i++) {
    let itemMonth = data[i].month;
    let itemSales = data[i].sales;
    if (itemSales > maxSales) maxSales = itemSales;

    context.fillStyle = "green";
    createBar(
      context,
      10 + startX + i * barWidth + i + i * 20,
      chartHeight - itemSales,
      barWidth,
      itemSales,
      true
    );

    context.textAlign = "left";
    context.fillStyle = "black";
    context.fillText(
      itemMonth,
      10 + startX + i * barWidth + i + i * 20,
      chartHeight + 15,
      200
    );
  }
}
