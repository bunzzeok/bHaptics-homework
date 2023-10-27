import './header.scss';
import { TextButton } from '@/components/buttons/TextButton';
import { useNavigate } from 'react-router-dom';
import Banner from '@/assets/images/banner.svg';

const Header = () => {
    const sNavigate = useNavigate();

    return (
        <header className="header">
            <img src={Banner} alt="banner"></img>
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
