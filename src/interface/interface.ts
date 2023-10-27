export interface Game {
    id: string;
    name: string; // 게임 이름
    releaseTime: number; // 최신 릴리즈 순으로 정렬시 사용
    updateTime: number; // 최신 업데이트 순으로 정렬시 사용
    createTime: number;
    popularity: number; // 인기도 순으로 정렬시 사용
    thumbnailLink: string;
    thumbnailWideLink: string;
    compatibleDevices: string[];
    platformList: string[]; // Avaiblable On 필터로 쓰이는 플랫폼 목록
    isMod: boolean; // 모드 여부 확인
}

export interface Available {
    value: 'steam';
    name: 'Steam VR';
}
