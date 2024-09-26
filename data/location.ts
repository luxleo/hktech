export type locationInfo = {
    locationName:
        | 'HK이앤씨'
        | 'HK기술';
    streetAddress: string;
    buildingInfo: string;
    pos: {x:string, y:string};
}

export type panToFunction = (x:string, y:string) => void;

export const locationData : locationInfo[] = [
    {
        locationName: 'HK기술',
        streetAddress: '경상남도 김해시 삼문로 9, 4층 405-1호',
        buildingInfo: '(대청동, 트윈스빌딩)',
        pos: {x:'35.1923999',y:'128.8015673'}
    }
]