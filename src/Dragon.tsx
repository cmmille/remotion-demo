import {FaDragon} from 'react-icons/fa';
import ZoomInFadeOut from './animations/ZoomInFadeOut';

const Dragon = () => {
	return (
		<ZoomInFadeOut duration={4}>
			<FaDragon className="text-[20rem] text-green-400" />
		</ZoomInFadeOut>
	);
};

export default Dragon;
