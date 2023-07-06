import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

interface FadeProps {
	children: React.ReactNode;
	time: number;
	direction?: 'in' | 'out';
}

const Fade = (props: FadeProps) => {
	const {children, time, direction = 'in'} = props;
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const opacity = interpolate(
		frame,
		[0, time * fps],
		direction === 'in' ? [0, 1] : [1, 0],
		{
			// clamp the value at the right end so it
			// doesn't exceed 1 or go below 0
			extrapolateRight: 'clamp',
		}
	);

	return <div style={{opacity}}>{children}</div>;
};

export default Fade;
