import MenuProducts from "../../components/MenuProducts/MenuProducts";
import bg3 from "../../assets/images/bg1.jpg";

function MenuPage() {
    return (
        <div className="menu_page flex flex-col items-center w-full">
            {/* Header Section */}
            <header
                style={{ backgroundImage: `url(${bg3})` }}
                className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center bg-fixed flex items-center justify-center"
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 flex flex-col items-center gap-4 text-center px-4 sm:px-8">
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                        Шоколад и десерты
                    </h2>
                </div>
            </header>

            {/* Menu Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center py-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">МЕНЮ</h2>
                <MenuProducts />
            </div>
        </div>
    );
}

export default MenuPage;
