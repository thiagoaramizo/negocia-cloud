import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export const HistoryBar = () => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend);
  const options = {
    responsive: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };
  const labels = [
    "Outubro",
    "Novembro",
    "Dezembro",
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Novas cobranças",
        data: labels.map(() => faker.number.int({ min: 5, max: 100 })),
        backgroundColor: "rgba(0, 104, 166, 1)",
      },
      {
        label: "Cobranças quitadas",
        data: labels.map(() => faker.number.int({ min: 50, max: 90 })),
        backgroundColor: "rgba(16, 185, 129, 1)",
      },
    ],
  };

  return (
    <div className="bg-white shadow-md rounded-xl w-full px-6 py-6 flex flex-col">
      <h3 className="font-semibold text-2xl text-emerald-600 pb-6">
        Histórico de cobranças
      </h3>
      <Bar
        options={options}
        data={data}
        width={1600}
        height={300}
        style={{ width: "100%" }}
      />
      <span></span>
    </div>
  );
};
