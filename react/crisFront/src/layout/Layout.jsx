import { Outlet, useNavigation } from "react-router-dom";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";

export const Layout = () => {
    const navigation = useNavigation();
        return (

            <div className="body">
                <Menu/>
                <main className="m-0 justify-items-center bg-gray-100 p-0 items-center">
                {navigation.state === "loading" && (
                    <div className="alert alert-info my-5">Loading...</div>
                )}
                <Outlet></Outlet>
                <Footer/>
                </main>
            </div>
        );
};
