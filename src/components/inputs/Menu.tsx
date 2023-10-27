import { useState, useRef } from 'react';
import './Menu.scss';
import useOutsideClick from '@/hooks/useOutsideClick';
import { Available } from '@/interface/interface';

export interface menuProps {
    pWidth: number;
    pHeight: number;
    pOptions: string[];
    pIsFullWidth: boolean;
    pIsReadonly: boolean;
    pSelectedAvailableList: Available[];
    onChange: (aString: string) => void;
}

export const Menu = (props: menuProps) => {
    const { pWidth, pSelectedAvailableList, pHeight, pOptions, pIsFullWidth, onChange } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const optionRef = useRef<HTMLDivElement>(null);

    const handlemenu = (aValue: string) => {
        setIsOpen(false);
        onChange(aValue);
    };

    const handleClick = (aEvent: React.MouseEvent<HTMLDivElement>) => {
        aEvent.stopPropagation();
        setIsOpen(!isOpen);
    };

    useOutsideClick(optionRef, () => setIsOpen(false));

    return (
        <div className="custom-menu-wrapper" style={{ width: pIsFullWidth ? '100%' : pWidth + 'px', height: pHeight + 'px' }}>
            <div className="menu-input" onClick={handleClick}>
                <div className="available-wrap">
                    Available On <div className="games-count">({pSelectedAvailableList.length})</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M10 11.204L5.35925 7.20111C5.04273 6.92809 4.53595 6.93376 4.22733 7.21379C3.91871 7.49381 3.92513 7.94214 4.24166 8.21516L9.4412 12.7H10.5588L15.7583 8.21516C16.0749 7.94214 16.0813 7.49381 15.7727 7.21379C15.4641 6.93376 14.9573 6.92809 14.6407 7.20111L10 11.204Z"
                        fill="black"
                    />
                </svg>
            </div>
            <div
                ref={optionRef}
                className="menu-options"
                style={{ display: isOpen ? 'block' : 'none', maxHeight: pHeight * 5 + 'px' }}
                onClick={(aEvent) => aEvent.stopPropagation()}
            >
                {pOptions.map((aOption: string, aIdx) => (
                    <div key={aOption + aIdx} className="options-item" onClick={() => handlemenu(aOption)}>
                        {aOption}
                    </div>
                ))}
            </div>
        </div>
    );
};

Menu.defaultProps = {
    pWidth: 120,
    pHeight: 40,
    pIsFullWidth: false,
    pIsReadonly: true,
    pInitValue: '',
};
