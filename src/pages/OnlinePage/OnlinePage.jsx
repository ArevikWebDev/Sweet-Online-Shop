import bg5 from "../../assets/images/bg5.avif"
import OnlineSection from "../../components/OnlineSection/OnlineSection"
import ProductData from "../../components/ProductData/ProductData"
function OnlinePage() {

    return (
        <div className="online_page">
            <div className="container">
                <header
                    className="relative h-[350px] w-full  flex items-center justify-center">
                        <img src={bg5} alt="online page" className="h-full w-full object-center max-md:object-cover" />
                </header>
                <OnlineSection/>
                <ProductData/>
            </div>
        </div>
    )
}

export default OnlinePage