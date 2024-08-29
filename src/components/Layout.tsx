import { ReactNode } from "react";
import HeaderSection from "./HeaderSection/HeaderSection"

type Props = {
    children: ReactNode;
    onSearch: (query: string) => void;
    searchError?: string;
    placeholder: string;
};

const Layout = ({children, onSearch, searchError, placeholder }: Props) => {
    return (
        <div>
            <HeaderSection onSearch={onSearch} placeholder={placeholder} />
            {searchError && <p>{searchError}</p>}
            <main>{children}</main>
        </div>
    )
}

export default Layout;