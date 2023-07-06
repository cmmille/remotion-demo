import {useCurrentFrame} from 'remotion';

interface FadeInProps {
	children: React.ReactNode;
	time: number;
}

const FadeIn = (props: FadeInProps) => {
	const {children, time} = props;
	const frame = useCurrentFrame();
	const opacity = Math.min(1, frame / (time * 30));
	return <div style={{opacity: opacity}}>{children}</div>;
};

export default FadeIn;
