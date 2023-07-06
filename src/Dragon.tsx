import {FaDragon} from 'react-icons/fa';
import Zoom from './animations/Zoom';

const Dragon = () => {
	return (
		<Zoom time={2}>
			<FaDragon className="text-[20rem] text-green-400" />
		</Zoom>
	);
};

export default Dragon;
