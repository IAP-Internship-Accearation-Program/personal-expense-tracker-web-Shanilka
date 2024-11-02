// PieChartComponent.js
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import axios from 'axios';

// Define colors for each segment
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const PieChartComponent = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend API
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/getCategoryTotals');
                setChartData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex justify-center items-center p-4 bg-white shadow-md rounded-lg w-80 left-2/3 top-2/4 absolute">
            <PieChart width={300} height={300}>
                <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                {/* <Tooltip /> */}
                <Legend />
            </PieChart>
        </div>
    );
};

export default PieChartComponent;
