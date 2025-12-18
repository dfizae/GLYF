import { productData } from "./ProductData";

export default function ProductList() {
    return(
        <>
            <div className="flex gap-25 mt-21">
                {productData.map((product, i) => (        
                    <div
                        key={i}
                        className={`flex flex-col ${i % 2 === 0 ? 'mt-0' : 'mt-37'}`}
                    >
                        <div className="bg-white flex justify-center items-center p-10 rounded-4xl">
                            <img src= {product.img} alt= {product.alt} />
                        </div>
                        <p className="text-center font-extrabold text-base mt-3">{product.productName}</p>
                    </div>
                ))
                }
            </div>
        </>
    );
};
