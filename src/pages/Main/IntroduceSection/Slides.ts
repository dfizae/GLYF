import CoverFlow1 from '../../../assets/images/pics/CoverFlow1.svg'
import CoverFlow2 from '../../../assets/images/pics/CoverFlow2.svg'
import CoverFlow3 from '../../../assets/images/pics/CoverFlow3.svg'

export interface CoverFlowSlides {
    id: number;
    title: string;
    src: string;
    alt: string;
}

export const SLIDES:CoverFlowSlides[] = [ 
    {id: 1, title: 'Slide 1', src: CoverFlow1, alt: '커버플로우 슬라이드 1'},
    {id: 2, title: 'Slide 2', src: CoverFlow2, alt: '커버플로우 슬라이드 2'},
    {id: 3, title: 'Slide 3', src: CoverFlow3, alt: '커버플로우 슬라이드 3'},
];