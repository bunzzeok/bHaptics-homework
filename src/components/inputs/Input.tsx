import './Input.scss';

export interface InputProps {
    pWidth: number;
    pHeight: number;
    pValue: string;
    pSetValue: React.Dispatch<React.SetStateAction<string>>;
    pType: 'text' | 'number';
    pIsFullWidth: boolean;
    pPlaceholder: string;
    pIsDisabled: boolean;
    onChange: (aString: string) => void;
}

export const Input = (props: InputProps) => {
    const { pWidth, pPlaceholder, pHeight, pIsFullWidth, pValue, pSetValue, pType, pIsDisabled, onChange } = props;

    const handleChange = (aEvent: React.ChangeEvent<HTMLInputElement>) => {
        pSetValue(aEvent.target.value);
        onChange(aEvent.target.value);
    };

    return (
        <div className="custom-input-wrapper" style={{ width: pIsFullWidth ? '100%' : pWidth + 'px', height: pHeight + 'px', opacity: pIsDisabled ? '0.6' : '' }}>
            <input type={pType} value={pValue} onChange={handleChange} disabled={pIsDisabled} placeholder={pPlaceholder} />
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.5 8C10.9101 8 8 10.9101 8 14.5C8 18.0899 10.9101 21 14.5 21C15.6759 21 16.7788 20.6878 17.7305 20.1417L23.6069 26.0182L25.0211 24.6039L19.3001 18.8829C20.356 17.7272 21 16.1888 21 14.5C21 10.9101 18.0899 8 14.5 8ZM10 14.5C10 12.0147 12.0147 10 14.5 10C16.9853 10 19 12.0147 19 14.5C19 16.9853 16.9853 19 14.5 19C12.0147 19 10 16.9853 10 14.5Z"
                    fill="black"
                />
            </svg>
        </div>
    );
};

Input.defaultProps = {
    pWidth: 200,
    pHeight: 40,
    pType: 'text',
    pIsFullWidth: false,
    pIsDisabled: false,
    pPlaceholder: '',
};
