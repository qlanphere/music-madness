import { useHistory } from 'react-router-dom';

const BackButton = () => {
    const history = useHistory();

    return <button className="back" id="back-button" onClick={history.goBack}>Back</button>
}

export default BackButton