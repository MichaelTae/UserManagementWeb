import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';
import { Text, createStyles, keyframes } from '@mantine/core';
import React, { useState } from 'react';
import { renderActiveShape } from './RenderActiveShape';

export const shadowAnimation = keyframes({
	'0%': {
		boxShadow: '2px 1px 6px 2px rgba(0,191,166,.7)',
	},
	'25%':{
		boxShadow: '2px 1px 8px 2px rgba(0,191,166,.8)',
	},
	'50%': {
		boxShadow: '2px 1px 8px 2px rgba(0,191,166,.9)',
	},
	'75%': {
		boxShadow: '2px 1px 6px 2px rgba(0,191,166,.8)',
	},
	'100%': {
		boxShadow: '2px 1px 6px 2px rgba(0,191,166,.7)',
	},

});

const useStyles = createStyles((theme) => ({
	container:{
		
		
background: 'rgba(255, 255, 255, 0.05)',
borderRadius: '16px',

backdropFilter: 'blur(10.9px)',
webkitBackdropFilter: 'blur(10.9px)',
border: '1px solid rgba(0,191,166,0.3)',
	},
	chart: {
		boxShadow: '10px 10px 18px -6px rgba(0,191,166,.7)',
		animation: `${shadowAnimation} 2s infinite`,
		borderRadius: '16px',
	  }
	  
	
}));

const Piechart = ({ data, title, color }) => {
const {classes} = useStyles();
    const chartData = data;
	const [activeIndex, setActiveIndex] = useState(0);
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
	const onPieEnter = (_, index) => {
		setActiveIndex(index);
	};
    return(
        <>
		<Text pos={'absolute'} sx={{zIndex:10}} ml={10} size={20} weight={600}>User Age distribution</Text>
        <ResponsiveContainer width='100%' height='100%' className={classes.container}  >
				<PieChart className={classes.chart}>
					
						<Pie
							data={chartData}
							dataKey={'quantity'}
							nameKey={'ageSpan'}
							cx='50%'
							cy='53%'
							innerRadius={'55%'}
							outerRadius={'75%'}
							blendStroke={true}
							labelLine={false}
							 activeIndex={activeIndex}
							 activeShape={renderActiveShape}
							onMouseEnter={onPieEnter}
							
							
							label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
							minAngle={10}
						>
							{chartData?.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Legend align='left' />
                     </PieChart>
                     </ResponsiveContainer>
					 </>
    )
};



export default Piechart;