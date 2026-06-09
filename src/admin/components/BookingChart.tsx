import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts';
import { monthlyData } from '../data/mockData';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; name: string }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(200, 169, 126, 0.25)',
        borderRadius: 12,
        padding: '12px 16px',
        boxShadow: '0 8px 24px rgba(44,44,44,0.1)',
      }}>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, color: '#8A7A6E', marginBottom: 6, fontWeight: 500 }}>{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: '#2C2C2C', fontWeight: 600 }}>
            {p.name === 'revenue' ? `£${p.value.toLocaleString()}` : `${p.value} bookings`}
          </p>
        ))}
      </div>
    );
  }
  return null;
}

interface BookingChartProps {
  type?: 'area' | 'bar';
  dataKey?: 'bookings' | 'revenue';
}

export function BookingChart({ type = 'area', dataKey = 'bookings' }: BookingChartProps) {
  const goldColor = '#C8A97E';
  const goldLight = '#E8D4B4';

  return (
    <div style={{ width: '100%', height: 220 }}>
      <ResponsiveContainer width="100%" height="100%">
        {type === 'area' ? (
          <AreaChart data={monthlyData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={goldColor} stopOpacity={0.3} />
                <stop offset="95%" stopColor={goldColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(200,169,126,0.12)" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontFamily: "'Jost', sans-serif", fontSize: 11, fill: '#8A7A6E' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontFamily: "'Jost', sans-serif", fontSize: 11, fill: '#8A7A6E' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={goldColor}
              strokeWidth={2.5}
              fill="url(#goldGradient)"
              dot={{ fill: goldColor, strokeWidth: 0, r: 3 }}
              activeDot={{ r: 5, fill: goldColor, strokeWidth: 0 }}
            />
          </AreaChart>
        ) : (
          <BarChart data={monthlyData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(200,169,126,0.12)" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontFamily: "'Jost', sans-serif", fontSize: 11, fill: '#8A7A6E' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontFamily: "'Jost', sans-serif", fontSize: 11, fill: '#8A7A6E' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey={dataKey} fill={goldLight} radius={[6, 6, 0, 0]}>
            </Bar>
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
