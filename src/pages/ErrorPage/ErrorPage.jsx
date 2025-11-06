import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function ErrorPage() {
    const {i18n} = useTranslation()


    return (
        <div className="min-h-screen flex items-center justify-center bg-[rgb(176,167,135)]">
            <div className="text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-5">
                <h1 className="text-white font-extrabold text-7xl sm:text-8xl lg:text-9xl mb-4">404</h1>
                <p className="text-white font-bold text-3xl sm:text-4xl mb-2">Page Not Found</p>
                <p className="text-gray-300 text-lg mb-6">Sorry, we can’t find the page you’re looking for.</p>
                
               <NavLink to={`/${i18n.language}/`}>
                 <button 
                    type="button"
                    className="inline-block bg-[rgb(117,111,99)] hover:[rgb(117,111,99)] focus:outline-none focus:ring-2 focus:[rgb(117,111,99)] text-white font-medium rounded-full text-sm px-6 py-3 transition duration-200"
                >
                    Back To Home
                </button>
               </NavLink>
            </div>
        </div>
    );
}

export default ErrorPage;
