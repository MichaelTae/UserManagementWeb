import React from 'react';
import { Sector } from 'recharts';

function ColorArr() {
	return [
		'#0088FE',
		'#00C49F',
		'#FFBB28',
		'#FF8042',
		'#5C946E ',
		'#b3e9c7 ',
		'#7d8cc4 ',
		'#4F3824 ',
		'#D1603D ',
		'#A63C06 ',
		'#453643 ',
		'#90a955',
		'#52b69a',
		'#d55d92',
		'#25a244',
		'#f4acb7',
		'#294c60',
		'#f0f3bd',
		'#ef476f'
	];
}

export const COLORS = ColorArr();

const RADIAN = Math.PI / 180;
export const renderActiveShape = (props) => {
	const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const sx = cx + (outerRadius + 10) * cos;
	const sy = cy + (outerRadius + 10) * sin;
	const mx = cx + (outerRadius + 30) * cos;
	const my = cy + (outerRadius + 30) * sin;
	const ex = mx + (cos >= 0 ? 1 : -1) * 22;
	const ey = my;
	const textAnchor = cos >= 0 ? 'start' : 'end';

	return (
		<g>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
				opacity={0.85}
			/>
			<Sector
				cx={cx - 1}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 5}
				outerRadius={outerRadius + 10}
				fill={fill}
			/>

			<text x={cx + 1} y={cy} dy={15} textAnchor="middle" fill="#999">
				{percent > 0 ? `(${(percent * 100).toFixed(2)}%)` : null}
			</text>

			<text x={cx} y={cy} dy={-2} textAnchor="middle" fill={fill} fontSize={22}>
				{payload.quantity}
			</text>
		</g>
	);
};
