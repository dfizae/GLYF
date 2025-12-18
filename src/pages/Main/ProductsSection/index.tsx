import ProductList from "./ProductList";

export default function ProductsSection() {
    return(
        <>
            <section className="relative bg-black w-full text-white flex flex-col justify-center items-center py-40">
                    <h1 className="font-bold text-6xl">What's in GLYF</h1>
                    <div className="absolute top-40 right-[20%] flex gap-5 items-center">
                        <span>Go To Shop</span>
                        <img src="/src/assets/images/icons/iconCircledRightWhite.svg" alt="바로가기 창" />
                    </div>
                    <ProductList />
            </section>

        </>
    );
};
