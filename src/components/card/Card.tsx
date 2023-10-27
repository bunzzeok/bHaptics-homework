import { Game } from '@/interface/interface';
import mod from '@/assets/images/mod.svg';
import notMod from '@/assets/images/mod.svg';
import './Card.scss';

const Card = ({ pGame }: { pGame: Game }) => {
    return (
        <div className="card">
            <div className="card-image-wrap">
                <img className="card-image" src={pGame.thumbnailLink}></img>
            </div>
            <div className="card-title">
                {pGame.isMod ? <img src={mod} alt="mod" /> : <img src={notMod} alt="notMod"></img>}
                <div>{pGame.name}</div>
            </div>
        </div>
    );
};

export default Card;
