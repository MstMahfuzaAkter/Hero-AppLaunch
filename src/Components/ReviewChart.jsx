import React from 'react';

// src/components/ReviewChart.jsx
import React from 'react';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from 'recharts';

const ReviewChart = ({ ratings }) => {
    // ratings: array like [{ name: "1 star", count: 200 }, ...]
    // Convert to data suitable for recharts with star number label
    const data = ratings.map(r => {
        const stars = r.name.match(/\d+/) ? Number(r.name.match(/\d+/)[0]) : r.name;
        return {
            star: `${stars}★`,
            count: r.count,
        };
    }).sort((a, b) => b.star.localeCompare(a.star)); // optional ordering

    return (
        <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="star" />
                    <YAxis />
                    <Tooltip formatter={(value) => [value, 'Reviews']} />
                    <Bar dataKey="count" name="Review Count" barSize={24} fill="#7C3AED" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ReviewChart;
