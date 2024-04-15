import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Grafico() {
    const data = {
        labels: ['Programação', 'Fluxograma', 'Mapeamento', 'Reunião'],
        datasets: [{
            data: [3, 6, 9,2],
            backgroundColor: ['#9E2896', '#1C8580', '#017CC0', '#03894C']
        }]
    };

    const options = {
        // Add any desired options here
    };

    return (
        <div className="w-[35em] h-[35em]">
            <Pie
                data={data}
                options={options}
            />
        </div>
    );
}
