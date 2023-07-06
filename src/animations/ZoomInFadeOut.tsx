import {Sequence, useVideoConfig} from 'remotion';
import Zoom from './Zoom';
import Fade from './Fade';

interface ZoomInFadeOutProps {
	children: React.ReactNode;
	duration: number;
}

const ZoomInFadeOut = (props: ZoomInFadeOutProps) => {
	const {children, duration} = props;
	const {fps} = useVideoConfig();
	const durationInFrames = duration * fps;

	return (
		<>
			<Sequence durationInFrames={durationInFrames} layout="none">
				<Zoom time={1.5}>{children}</Zoom>
			</Sequence>
			<Sequence from={durationInFrames} layout="none">
				<Fade time={1} direction="out">
					{children}
				</Fade>
			</Sequence>
		</>
	);
};

export default ZoomInFadeOut;
