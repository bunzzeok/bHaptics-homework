import './header.scss';
import TitleIcon from '@/assets/images/titleIcon.svg';
import { TextButton } from '@/components/buttons/TextButton';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const sNavigate = useNavigate();

    return (
        <header className="header">
            <img src={TitleIcon} alt="icons" />
            <div className="button-list">
                <TextButton pIsDisabled={true} onClick={() => {}} pFontSize={16} pText="TactSuit" pFontColor="#ffffff"></TextButton>
                <TextButton
                    onClick={() => {
                        sNavigate('/Compatibility');
                    }}
                    pFontSize={16}
                    pText="Compatibility"
                    pFontColor="#ffffff"
                ></TextButton>
            </div>
        </header>
    );
};
export default Header;
