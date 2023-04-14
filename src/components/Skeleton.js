import React from 'react';

function Skeleton({times}) {
	const boxes = Array(times)
		.fill(0)
		.map((number, index) => (
			<div className='skeleton' key={index}>
				<div className='shimmer' />
			</div>
		));

	return boxes;
}

export default Skeleton;
