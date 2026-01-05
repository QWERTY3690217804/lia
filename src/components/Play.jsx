import { useParams, useNavigate} from 'react-router-dom';
import PlayButton from './PlayButton'

function Play() {
    const { gameId} = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h2>Playing: {gameId}</h2>

            <PlayButton onClick={() => navigate('/dashboard')} />
        </div>
    )
}

export default Play;