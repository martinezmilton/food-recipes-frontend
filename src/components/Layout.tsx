import HeaderSection from "./HeaderSection/HeaderSection"

type Props = {
    children: React.ReactNode;
};

const Layout = ({children }: Props) => {
    return (
        <div>
            <HeaderSection />
            <main>{children}</main>
        </div>
    )
}

export default Layout;