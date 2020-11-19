/** @format */

import React from 'react';

function Error404() {
	return (
		<>
			
			<div
				style={{
					backgroundColor: '#eeeeee',
					fontFamily: 'sans-serif',
					padding: 0,
					margin: 0,
					textAlign: 'center',
					fontWeight: 'normal',
					height: '100vh',
				}}
			>
				<div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -70%)"
                }}>
					<svg height="100" width="100">
						<polygon
                            points="50,25 17,80 82,80"
							// stroke-linejoin="round"
							style={{
								fill: 'none',
								stroke: '#ff8a00',
                                strokeWidth: '8',
                                strokeLinejoin: "round"
							}}
						/>
						<text
							x="42"
							y="74"
                            fill="#ff8a00"
                            style={{fontFamily:"sans-serif", fontWeight:"900", fontSize: "42px"}}
							// font-family="sans-serif"
							// font-weight="900"
							// font-size="42px"
						>
							!
						</text>
					</svg>
					<h1
						style={{
							fontSize: '48px',
							fontWeight: '300',
							margin: '0 0 20px 0',
							fontFamily: 'sans-serif',
							padding: 0,
							textAlign: 'center',
						}}
					>
						404 Error: Web Page not found{' '}
					</h1>
					<p
						style={{
							fontSize: '21px',
							fontWeight: '200',
							marginBottom: '20px',
							fontFamily: 'sans-serif',
							margin: 0,
							padding: 0,
							textAlign: 'center',
						}}
					>
						If you think what you're looking for should be here,
						please try contacting
						<br />
						the site owner.
					</p>
				</div>
			</div>
		</>
	);
}

export default Error404;
