// Write your code below:
import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css"

const Chart = (props) => {
    let expensesOnlyArray = props.chartExpenses.map((monthExpensesData) => {
        return monthExpensesData.price
    })
    let maxValue = Math.max(...expensesOnlyArray)
    
  const chartData = [
    { expenseMonth: "Jan", expenseValue: 0 },
    { expenseMonth: "Feb", expenseValue: 0 },
    { expenseMonth: "Mar", expenseValue: 0 },
    { expenseMonth: "Apr", expenseValue: 0 },
    { expenseMonth: "May", expenseValue: 0 },
    { expenseMonth: "Jun", expenseValue: 0 },
    { expenseMonth: "Jul", expenseValue: 0 },
    { expenseMonth: "Aug", expenseValue: 0 },
    { expenseMonth: "Sep", expenseValue: 0 },
    { expenseMonth: "Oct", expenseValue: 0 },
    { expenseMonth: "Nov", expenseValue: 0 },
    { expenseMonth: "Dec", expenseValue: 0 },
  ];

  for (let i = 0; i < props.chartExpenses[i].length; i++) {
    chartData[props.chartExpenses[i].data.getMonth()].expenseValue +=
      props.chartExpenses[i].price;
  }
  console.log(chartData);
  return (
    <div className="chart">
      {chartData.map((monthData) => {
        return (
          <ChartBar
            key={monthData.expenseMonth}
            label={monthData.expenseMonth}
            value={monthData.expenseMonth}
            maxValue={maxValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
