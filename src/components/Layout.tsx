import { ReactNode } from "react";
import HeaderSection from "./HeaderSection/HeaderSection"
import "./Layout.css";

type Props = {
    children: ReactNode;
    onSearch?: (query: string) => void; 
    searchError?: string;
    placeholder?: string; 
    showSearch?: boolean;
};

const Layout = ({ children, onSearch, searchError, placeholder, showSearch = true }: Props) => {
    return (
        <div>
            <HeaderSection onSearch={onSearch} placeholder={placeholder} showSearch={showSearch} />
            {searchError && <p className="error-message">{searchError}</p>}
            <main>{children}</main>
        </div>
    )
}

export default Layout;


