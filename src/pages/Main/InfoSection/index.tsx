import ForUser from './ForUser';
import MainImage from '../../../assets/images/pics/MainImage.svg';

export default function InfoSection() {
    return(
        <>
            <section className="relative w-full min-h-screen">
                <img 
                    src= {MainImage} alt="메인이미지" 
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute left-[7.5%] bottom-[10%] z-30">
                    <ForUser />
                </div>
            </section>
        </>
    );
};
