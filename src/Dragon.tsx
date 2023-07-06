import {FaDragon} from 'react-icons/fa';
import FadeIn from './animations/FadeIn';

const Dragon = () => {
	return (
		<FadeIn time={2}>
			<FaDragon className="text-[20rem] text-green-400" />
		</FadeIn>
	);
};

export default Dragon;
