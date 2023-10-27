import './TextButton.scss';

export interface TextButtonProps {
    pText: string;
    pHeight: number | string;
    pBackgroundColor: string;
    onClick: React.MouseEventHandler<HTMLDivElement>;
    pIsDisabled: boolean;
    pFontSize: number;
    pFontColor: string;
    pPadding: string;
    pBorderRadius: number;
    pBorder: string;
    pFontWeight: number;
    pUseClose: boolean;
}

export const TextButton = (props: TextButtonProps) => {
    const { onClick, pFontWeight, pFontColor, pPadding, pUseClose, pBorderRadius, pBorder, pFontSize, pHeight, pText, pBackgroundColor, pIsDisabled } = props;

    return (
        <div
            className="text-btn-wrapper"
            style={{
                fontWeight: pFontWeight,
                fontSize: pFontSize + 'px',
                height: typeof pHeight === 'number' ? pHeight + 'px' : 'unset',
                backgroundColor: pBackgroundColor,
                opacity: pIsDisabled ? '0.45' : '1',
                cursor: pIsDisabled ? 'unset' : 'pointer',
                padding: pPadding,
                borderRadius: pBorderRadius + 'px',
                border: pBorder,
            }}
            onClick={!pIsDisabled ? onClick : () => null}
        >
            <div
                style={{
                    color: pFontColor,
                }}
            >
                {pText}
                {pUseClose && (
                    <svg style={{ paddingLeft: '5px' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <rect x="4.69669" y="5.87518" width="1.66667" height="13.3333" transform="rotate(-45 4.69669 5.87518)" fill="#0072E3" />
                        <rect x="14.1248" y="4.69672" width="1.66667" height="13.3333" transform="rotate(45 14.1248 4.69672)" fill="#0072E3" />
                    </svg>
                )}
            </div>
        </div>
    );
};

TextButton.defaultProps = {
    pBorder: 'unset',
    pBorderRadius: 'unset',
    pPadding: '0',
    pFontColor: '#ffffff',
    pHeight: 0,
    pFontWeight: 400,
    pIsDisabled: false,
    pBackgroundColor: 'transparent',
    pUseClose: false,
};
