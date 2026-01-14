import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ReferenceLine,
    ReferenceArea,
} from "recharts";

export default function BMIChart({ data }: { data: any }) {
    return (
        <ResponsiveContainer style={{ background: "white" }} width="100%" height={300}>
            <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                    dataKey="date"
                    tick={{ fontSize: 12 }}
                />

                <YAxis
                    domain={[15, 35]}
                    tick={{ fontSize: 12 }}
                />

                <Tooltip
                    contentStyle={{
                        backgroundColor: "var(--primary)",
                        border: "none",
                        borderRadius: "8px",
                    }}
                    itemStyle={{ color: "white", fontWeight: "bold" }}
                    labelStyle={{ color: "white" }}
                />

                <ReferenceLine
                    y={25}
                    label="NORMA"
                    stroke="green"
                    strokeDasharray="3 3"
                />

                <ReferenceLine
                    y={18.5}
                    label="NORMA"
                    stroke="green"
                    strokeDasharray="3 3"
                />

                <ReferenceArea
                    y1={18.5}
                    y2={24.9}
                    fill="green"
                    fillOpacity={0.1}
                />

                <Legend />

                <Line
                    type="monotone"
                    dataKey="bmi"
                    name="BMI"
                    stroke="var(--primary)"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                    activeDot={{ r: 5 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}