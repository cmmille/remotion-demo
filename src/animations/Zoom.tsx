import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

interface ZoomProps {
	children: React.ReactNode;
	time: number;
}

const Zoom = (props: ZoomProps) => {
	const {children, time} = props;

	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const scale = spring({fps, frame, durationInFrames: time * fps});

	return <div style={{transform: `scale(${scale})`}}>{children}</div>;
};

export default Zoom;
