import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  BarElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  Legend
);

const Graph = ({ graphData = [] }) => {
  const labels =
    graphData.length > 0
      ? graphData.map((item) => item.clickDate)
      : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const clicks =
    graphData.length > 0
      ? graphData.map((item) => item.count)
      : [0, 0, 0, 0, 0, 0, 0];

  const data = {
    labels,
    datasets: [
      {
        label: "Total Clicks",
        data: clicks,

        backgroundColor: graphData.length
          ? [
              "#2563EB",
              "#3B82F6",
              "#6366F1",
              "#7C3AED",
              "#8B5CF6",
              "#9333EA",
              "#2563EB",
            ]
          : "rgba(148,163,184,0.15)",

        borderRadius: 12,
        borderSkipped: false,
        hoverBackgroundColor: "#7C3AED",
        maxBarThickness: 38,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: true,
        position: "top",

        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          color: "#334155",
          font: {
            size: 14,
            weight: "600",
          },
        },
      },

      tooltip: {
        backgroundColor: "#0F172A",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,
        cornerRadius: 12,
        displayColors: false,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },

        ticks: {
          color: "#64748B",
          font: {
            size: 12,
          },
        },
      },

      y: {
        beginAtZero: true,

        ticks: {
          precision: 0,
          color: "#64748B",
          font: {
            size: 12,
          },
        },

        grid: {
          color: "rgba(148,163,184,0.15)",
          drawBorder: false,
        },

        title: {
          display: true,
          text: "Clicks",
          color: "#0F172A",
          font: {
            size: 15,
            weight: "bold",
          },
        },
      },
    },

    animation: {
      duration: 1200,
      easing: "easeOutQuart",
    },
  };

  return (
    <div className="w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;