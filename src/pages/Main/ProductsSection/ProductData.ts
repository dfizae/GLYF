import picsGlows from '../../../assets/images/pics/pics-glows.svg';
import picsHueStick from '../../../assets/images/pics/pics-hueStick.svg';
import picsHighlighter from '../../../assets/images/pics/pics-highlighter.svg';
import picsPeoplePatch from '../../../assets/images/pics/pics-peoplePatch.svg';

interface Product {
    img: string;
    alt: string;
    productName: string;
    explanation: string;
}

export const productData: Product[] = [
    {img: picsGlows, alt: 'GLYF\'s GLOW', productName: "GLOW", explanation: "전소미가 직접 연구한 HOT한 글로즈"},
    {img: picsHueStick, alt: 'GLYF\'s HUE SPREAD STICK', productName: "HUE SPREAD STICK", explanation: "자연스러운 생기를 더해주는 멀티 컬러 스틱"},
    {img: picsHighlighter, alt: 'GLYF\'s HIGHLIGHTER', productName: "HIGHLIGHTER", explanation: "은은한 광택과 촉촉한 텍스처로 내추럴한 윤광을 표현"},
    {img: picsPeoplePatch, alt: 'GLYF\'s PEOPLE PATCH', productName: "PEOPLE PATCH", explanation: "진정과 보습을 동시에 선사하는 감각적인 디자인의 패치 제품"},
];

