import {FaDragon} from 'react-icons/fa';
import FadeIn from './animations/FadeIn';

const Dragon = () => {
	return (
		<FadeIn time={2}>
			<FaDragon className="text-9xl text-green-400" />
		</FadeIn>
	);
};

export default Dragon;
