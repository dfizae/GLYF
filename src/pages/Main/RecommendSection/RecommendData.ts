interface Recommend {
    src: string;
    alt: string;
    title: string;
    discount: string;
    currentPrice: string;
    realPrice: string;
}


export const recommendData:Recommend[] = [
    {src: '/src/assets/images/pics/pics-recommend1.svg', alt: "소미 허니 & 03 체리 구", title:'[전소미 PICK] 02 소미 허니 & 03 체리 구', discount: "15% off", currentPrice: '27,600원', realPrice: '32,750원' },
    {src: '/src/assets/images/pics/pics-recommend2.svg', alt: "소미 허니 & 01 츄이 버블", title:'[GLYF PICK] 02 소미 허니 & 01 츄이 버블', discount: "15% off", currentPrice: '27,600원', realPrice: '32,750원' },
    {src: '/src/assets/images/pics/pics-recommend3.svg', alt: "피치 우즈 & 05 메이플 글레이즈", title:'[BM PICK] 04 피치 우즈 & 05 메이플 글레이즈', discount: "20% off", currentPrice: '27,600원', realPrice: '32,000원' },
];