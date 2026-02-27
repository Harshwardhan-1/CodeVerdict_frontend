import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";


ChartJS.register(LineElement, LinearScale, CategoryScale, PointElement);

export default function ComplexityGraph({ time }:{time:string}) {
  const n = Array.from({ length: 20 }, (_, i) => i + 1);

  const map = {
    "O(1)": n.map(() => 5),
    "O(log N)": n.map(x => Math.log2(x)),
    "O(N)": n.map(x => x),
    "O(N log N)": n.map(x => x * Math.log2(x)),
    "O(N^2)": n.map(x => x * x),
  };

  return (
    <Line
      data={{
        labels: n,
        datasets: [
          { data: map["O(log N)"], borderColor: "rgba(255,255,255,.2)", pointRadius: 0 },
          { data: map["O(N log N)"], borderColor: "rgba(255,255,255,.2)", pointRadius: 0 },
          { data: map["O(N^2)"], borderColor: "rgba(255,255,255,.2)", pointRadius: 0 },
{ data: map[time as keyof typeof map] || map["O(N)"], borderColor: "#a855f7", borderWidth: 3, pointRadius: 0 }        ],
      }}
      options={{
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: { x: { display: false }, y: { display: false } },
      }}
    />
  );
}