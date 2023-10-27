import { Game } from '@/interface/interface';
import './Card.scss';

const Card = ({ pGame }: { pGame: Game }) => {
    return (
        <div className="card">
            <div className="card-image-wrap">
                <img className="card-image" src={pGame.thumbnailLink}></img>
            </div>
            <div className="card-title">
                {pGame.isMod ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="16" viewBox="0 0 31 16" fill="none">
                        <rect width="31" height="16" rx="3" fill="#0072E3" />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.6771 5.12148L9.03117 7.81537L7.38522 5.12148H6V11.1845H7.38522V7.66009L8.95317 10.2319H9.10917L10.6771 7.66009V11.1845H12.0631V5.12148H10.6771Z"
                            fill="white"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17.7662 8.15322C17.7662 7.07061 16.9869 6.35128 15.9996 6.35128C15.0123 6.35128 14.2316 7.07061 14.2316 8.15322C14.2316 9.23583 15.0123 9.95517 15.9996 9.95517C16.9869 9.95517 17.7662 9.23583 17.7662 8.15322ZM12.8464 8.15322C12.8464 6.36861 14.2583 5 15.9996 5C17.7402 5 19.1521 6.36861 19.1521 8.15322C19.1521 9.93783 17.7402 11.3064 15.9996 11.3064C14.2583 11.3064 12.8464 9.93783 12.8464 8.15322Z"
                            fill="white"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M23.9721 8.15322C23.9721 7.11394 23.3141 6.45528 22.3615 6.45528H21.3215V9.85117H22.3615C23.3141 9.85117 23.9721 9.1925 23.9721 8.15322ZM25.306 8.15322C25.306 9.8685 24.0327 11.1851 22.3615 11.1851H19.9356V5.12133H22.3615C24.0327 5.12133 25.306 6.43794 25.306 8.15322Z"
                            fill="white"
                        />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" viewBox="0 0 40 16" fill="none">
                        <rect opacity="0.8" width="40" height="16" rx="3" fill="#FFD700" />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.37805 5.00024V8.29213L7.0395 5.00024H6.00022V11.0633H7.38544V7.77213L9.72472 11.0633H10.7647V5.00024H9.37805Z"
                            fill="black"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.3483 5.00024L11.287 11.0633H12.8023L13.1056 10.1107H15.3582L15.6608 11.0633H17.1768L15.1148 5.00024H13.3483ZM14.2323 6.5848L14.9429 8.81141H13.5216L14.2323 6.5848Z"
                            fill="black"
                        />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8336 5.00024V6.33419H18.3921V11.0633H19.7781V6.33419H21.3373V5.00024H16.8336Z" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9467 11.0634H23.3333V5.00039H21.9467V11.0634Z" fill="black" />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M28.0539 5.00024L26.7112 9.46141L25.3686 5.00024H23.8527L25.828 11.0633H27.5952L29.5705 5.00024H28.0539Z"
                            fill="black"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M30.0929 5.00024V11.0633H33.9048V9.72936H31.4788V8.65613H33.6441V7.3388H31.4788V6.33419H33.86V5.00024H30.0929Z"
                            fill="black"
                        />
                    </svg>
                )}
                <div>{pGame.name}</div>
            </div>
        </div>
    );
};

export default Card;
