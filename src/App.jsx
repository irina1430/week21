import { Chart } from "react-google-charts";

const data = [
  ["Вид товара", "Проценты"],
  ["Одежда", 35],
  ["Электроника", 25],
  ["Косметика", 15],
  ["Книги", 15],
  ["Игрушки", 10],
];

const options = {
  title: "Популярные товары в интернет-магазине",
};

export default function App() {
  return (
    <div className="pie-chart">
      <h2>Популярные товары в интернет-магазине</h2>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}
