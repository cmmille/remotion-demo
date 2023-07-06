import {useCurrentFrame} from 'remotion';

const FrameCounter = () => {
	const frame = useCurrentFrame();
	return (
		<h1 className="text-blue-500 absolute top-2 right-2 text-4xl">{frame}</h1>
	);
};

export default FrameCounter;
