import { Available, Game } from '@/interface/interface';
import request from './core';

const ResponsePattern = <Type>(aResult: any): Type => {
    const sData: Type = aResult;

    return sData;
};

export const getAvailableOn = (): Promise<Available[]> => {
    return ResponsePattern(
        request<Available[]>({
            method: 'GET',
            url: '/api/bhaptics-options',
        })
    );
};

export const getGameList = (aOption: string): Promise<Game[]> => {
    return ResponsePattern(
        request({
            method: 'GET',
            url: `/api/bhaptics${aOption ? `?q=` + aOption : ''}`,
        })
    );
};
