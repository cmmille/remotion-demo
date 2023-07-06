import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

interface FadeInProps {
	children: React.ReactNode;
	time: number;
}

const FadeIn = (props: FadeInProps) => {
	const {children, time} = props;
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const opacity = interpolate(frame, [0, time * fps], [0, 1], {
		// clamp the value at the right end
		// so it doesn't get bigger than 1
		extrapolateRight: 'clamp',
	});

	return <div style={{opacity: opacity}}>{children}</div>;
};

export default FadeIn;
