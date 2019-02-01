import React from 'react';
import {css} from 'emotion';

const styles = css `{
	display: flex;
	background-color: #031625;
	font-family: 'Source Sans Pro',Helvetica Neue,Helvetica,Arial,sans-serif;
	font-size: 16px;
	line-height: 1.75;

	&:hover {
		.tl-item {
			width: 31.3333%;
		}
	}

	.tl-item {
		transform: translate3d(0, 0, 0);
		position: relative;
		width: 33.3333%;
		height: 100vh;
		min-height: 600px;
		color: #fff;
		overflow: hidden;
		transition: width 0.5s ease;

		&:before, &:after {
			transform: translate3d(0, 0, 0);
			content: '';
			position: absolute;
			left: 0; top: 0;
			width: 100%; height: 100%;
		}

		&:after {
			background: transparentize(#031625, 0.15);
			opacity: 1;
			transition: opacity 0.5s ease;
		}

		&:before {
			background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 75%);
			z-index: 1;
			opacity: 0;
			transform: translate3d(0, 0, 0) translateY(50%);
			transition: opacity 0.5s ease, transform 0.5s ease;
		}

		&:hover {
			width: 40% !important;

			&:after {
			opacity: 0;
			}

			&:before {
			opacity: 1;
			transform: translate3d(0, 0, 0) translateY(0);
			transition: opacity 1s ease, transform 1s ease 0.25s;
			}

			.tl-content {
			opacity: 1;
			transform: translateY(0);
			transition: all 0.75s ease 0.5s;
			}

			.tl-bg {
			filter: grayscale(0);
			}
		}
	}

	.tl-content {
		transform: translate3d(0, 0, 0) translateY(25px);
		position: relative;
		z-index: 1;
		text-align: center;
		margin: 0 1.618em;
		top: 55%;
		opacity: 0;

		h1 {
			font-family: 'Pathway Gothic One',Helvetica Neue,Helvetica,Arial,sans-serif;
			text-transform: uppercase;
			color: #1779cf;
			font-size: 1.44rem;
			font-weight: normal;
		}
	}

	.tl-year {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		z-index: 1;
		border-bottom: 1px solid #fff;

		p {
			font-family: 'Pathway Gothic One',Helvetica Neue,Helvetica,Arial,sans-serif;
			font-size: 1.728rem;
			line-height: 0;
		}
	}

	.tl-bg {
		transform: translate3d(0, 0, 0);
		position: absolute;
		width: 100%; height: 100%;
		top: 0; left: 0;
		background-size: cover;
		background-position: center center;
		transition: filter 0.5s ease;
		filter: grayscale(100%);
	}
}`;

class Timeline extends React.Component {
	render() {
		return (
			<section id="timeline" className={styles}>
				{
					this.props.data.map((item) => {
						return (
								<div class="tl-item first">
								<div class="tl-bg" style={{ backgroundImage: `url(${item.image})` }}></div>
								<div class="tl-year">
									<p class="f2 heading--sanSerif">{item.year}</p>
								</div>
								<div class="tl-content">
									<h1>{item.title}</h1>
									<p>{item.description}</p>
								</div>
							</div>
						);
					})
				}
			</section>
		);
	}
}

export default Timeline;
