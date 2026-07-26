import social1 from '../../../assets/images/pics/social/social1.png';
import social2 from '../../../assets/images/pics/social/social2.png';
import social3 from '../../../assets/images/pics/social/social3.png';
import social4 from '../../../assets/images/pics/social/social4.png';
import social5 from '../../../assets/images/pics/social/social5.png';
import social6 from '../../../assets/images/pics/social/social6.png';
import social7 from '../../../assets/images/pics/social/social7.png';

export interface SocialSlide {
    id: number;
    src: string;
    alt: string;
}

export const SOCIAL_SLIDES: SocialSlide[] = [
    {id: 1, src: social1, alt: '소셜 슬라이드 1'},
    {id: 2, src: social2, alt: '소셜 슬라이드 2'},
    {id: 3, src: social3, alt: '소셜 슬라이드 3'},
    {id: 4, src: social4, alt: '소셜 슬라이드 4'},
    {id: 5, src: social5, alt: '소셜 슬라이드 5'},
    {id: 6, src: social6, alt: '소셜 슬라이드 6'},
    {id: 7, src: social7, alt: '소셜 슬라이드 7'},
];
