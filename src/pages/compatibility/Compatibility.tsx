import { Select } from '@/components/inputs/Select';
import './Compatibility.scss';
import { Input } from '@/components/inputs/Input';
import { useEffect, useState } from 'react';
import { getAvailableOn, getGameList } from '@/api/apis';
import { Available, Game } from '@/interface/interface';
import Card from '@/components/card/Card';
import { Menu } from '@/components/inputs/Menu';
import { TextButton } from '@/components/buttons/TextButton';

const Compatibility = () => {
    // filter 를 위해 구별
    const [sGames, setGames] = useState<Game[]>([]);
    const [sFilterGames, setFilterGames] = useState<Game[]>([]);

    const [sFilterValue, setFilterValue] = useState<string>('');

    // 선택되어있다면, 재 선택 불가하도록 설정
    const [sAvailableList, setAvailableList] = useState<Available[]>([]);
    const [sSelectedAvailableList, setSelectedAvailableList] = useState<Available[]>([]);

    // sort keys
    const [sSortValue, setSortValue] = useState<'releaseTime' | 'updateTime' | 'popularity'>('releaseTime');
    const sSortList = ['releaseTime', 'updateTime', 'popularity'];

    //loading
    const [sLoading, setLoading] = useState<boolean>(false);

    const getGames = async (aOption: string) => {
        setLoading(true);
        try {
            const sData = await getGameList(aOption);
            setGames(sData);
            setFilterGames(sData.sort((aAfterValue: Game, aBeforeValue: Game) => aAfterValue[sSortValue] - aBeforeValue[sSortValue]));
        } catch {
            alert('Failed to import games.');
        }
        setLoading(false);
    };

    const getAvailables = async () => {
        try {
            const sData = await getAvailableOn();
            setAvailableList(sData);
        } catch {
            alert('Failed to import avilable.');
        }
    };

    const removeAvailable = (aAvailable: Available) => {
        setAvailableList((aPrev) => {
            return [...aPrev, aAvailable];
        });
        setSelectedAvailableList((aPrev) => {
            return aPrev.filter((aItem: Available) => aItem !== aAvailable);
        });
    };

    const addSelectedAvailable = (aName: string) => {
        const sSelectedAvailable = sAvailableList.find((aItem: Available) => aItem.name === aName);
        if (sSelectedAvailable) {
            setSelectedAvailableList((aPrev) => {
                return [...aPrev, sSelectedAvailable];
            });
            setAvailableList((aPrev) => {
                return aPrev.filter((aItem: Available) => aItem.name !== aName);
            });
        }
    };

    const clearFilter = () => {
        getAvailables();
        setSelectedAvailableList([]);
        setFilterValue('');
    };

    const filterGames = (aValue: string) => {
        setFilterGames(sGames.filter((aItem: Game) => aItem.name.includes(aValue)));
    };

    const sortGames = (aSortValue: string) => {
        // 조건문 한 개를 줄이고, 연산자도 매개변수로 받고 싶지만, eval로 위험성 때문에 따로 조건을 주었습니다.
        if (aSortValue === 'releaseTime' || aSortValue === 'updateTime') {
            const sValue: 'releaseTime' | 'updateTime' = aSortValue;
            setFilterGames((aPrev: Game[]) => {
                return aPrev.sort((aAfterValue: Game, aBeforeValue: Game) => aAfterValue[sValue] - aBeforeValue[sValue]);
            });
            setSortValue(aSortValue);
        } else if (aSortValue === 'popularity') {
            const sValue: 'popularity' = aSortValue;
            setFilterGames((aPrev: Game[]) => {
                return aPrev.sort((aAfterValue: Game, aBeforeValue: Game) => aAfterValue[sValue] + aBeforeValue[sValue]);
            });
            setSortValue(aSortValue);
        }
    };

    useEffect(() => {
        getGames(sSelectedAvailableList.map((aItem: Available) => aItem.value).join(','));
    }, [sSelectedAvailableList]);

    useEffect(() => {
        getAvailables();
    }, []);

    return (
        <>
            {sLoading && (
                <>
                    <div className="loading-cover"></div>
                    <div className="loading-text">Loading...</div>
                </>
            )}
            <div className="compat">
                <div className="compat-header">
                    <div className="compat-banner">Explore TactSuit Compatible Games </div>
                    <div className="compat-sub-banner">Experience haptic feedback optimized for each unique in-game event. </div>
                </div>
                <div className="compat-navi">
                    <Menu
                        pSelectedAvailableList={sSelectedAvailableList}
                        pWidth={276}
                        pHeight={60}
                        pOptions={sAvailableList.map((aAvailable) => {
                            return aAvailable.name;
                        })}
                        onChange={(aValue: string) => addSelectedAvailable(aValue)}
                    ></Menu>
                    <Input
                        pType="text"
                        pPlaceholder={'Search'}
                        pValue={sFilterValue}
                        pSetValue={setFilterValue}
                        onChange={(aString: string) => filterGames(aString)}
                        pHeight={60}
                        pWidth={242}
                    ></Input>
                </div>
                <div className="compat-selected-available-list">
                    {sSelectedAvailableList.map((aSelectedAvailable: Available) => {
                        return (
                            <TextButton
                                pFontColor="#0072E3"
                                pText={aSelectedAvailable.name}
                                pFontSize={13}
                                pHeight={'unset'}
                                pBorder={'1px solid #0072E3'}
                                pBorderRadius={100}
                                pPadding={'12px 20px'}
                                pBackgroundColor="#EBF5FF"
                                pUseClose={true}
                                key={aSelectedAvailable.name}
                                onClick={() => removeAvailable(aSelectedAvailable)}
                            ></TextButton>
                        );
                    })}
                </div>
                <div className="compat-info">
                    <div className="compat-items-wrap">
                        <div className="compat-items">{sFilterGames.length} items</div>
                        <TextButton pHeight={'unset'} pText="Clear Filters" pFontWeight={500} pFontColor="#0072E3" pFontSize={13} onClick={() => clearFilter()}></TextButton>
                    </div>
                    <div className="compat-sort-options">
                        <div className="compat-sort"> Sort by : </div>
                        <Select
                            pWidth={100}
                            pHeight={20}
                            pOptions={sSortList}
                            pInitValue={sSortList[0]}
                            onChange={(aString: string) => {
                                sortGames(aString);
                            }}
                        ></Select>
                    </div>
                </div>
                <div className="copat-games">
                    {sFilterGames.length !== 0
                        ? sFilterGames.map((aGame: Game) => {
                              return <Card key={aGame.id} pGame={aGame}></Card>;
                          })
                        : 'Not found'}
                </div>
            </div>
        </>
    );
};
export default Compatibility;
