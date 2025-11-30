import Line from '../../../assets/images/pics/Line.svg'
import iconCircledRightWhite from '../../../assets/images/icons/iconCircledRightWhite.svg'
import iconCircledRightblack from '../../../assets/images/icons/iconCircledRightBlack.svg'

export default function IntroduceText() {
    
    return(
        <div className="flex flex-col">
            <h1 className="text-6xl font-bold mb-3">Who We Are</h1>
            <img src = {Line} alt="선" className="mb-4"/>
            <p className="text-2xl font-medium whitespace-pre-line leading-10">
                {`Like ancient glyphs, each with its unique shape and story,
                GLYF is a bold and whimsical beauty brand.
                We are here to empower self-expression and
                to encourage you to express your beauty through your own 'glyphs'.`}
            </p>
            <p className="text-2xl font-medium whitespace-pre-line mt-5 leading-10">
                {`각기 다른 모양과 의미를 간직한 고대의 상형자처럼,
                각자가 가진 아름다움과 개성을 자유롭게 표현하는
                대담하고 유쾌한 캔버스 같은 뷰티 브랜드입니다.`}
            </p>
            <div className='mt-11'>
                <button className='group relative flex items-center gap-2 px-6 py-3 rounded-full 
                                   bg-black border-2 border-black 
                                   hover:bg-white 
                                   transition-all duration-300 ease-in-out cursor-pointer'>
                    
                    <span className='text-white font-bold text-lg group-hover:text-black transition-colors duration-300'>
                        더 알아보기
                    </span>

                    <div className="relative w-6 h-6"> 
                        <img 
                            src={iconCircledRightWhite} 
                            alt="아이콘"
                            className='absolute inset-0 w-full h-full object-contain 
                                        opacity-100 group-hover:opacity-0 
                                        transition-opacity duration-300'    
                        />
                        <img 
                            src={iconCircledRightblack} 
                            alt="아이콘"
                            className='absolute inset-0 w-full h-full object-contain 
                                        opacity-0 group-hover:opacity-100 
                                        transition-opacity duration-300'    
                        />
                    </div>
                </button>
            </div>
        </div>
    );
};
