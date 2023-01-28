import NavBar from "@/Components/NavBar";
import Header from "@/Components/header";

export default function Layout({children}) {
    return (
        <>
            <Header/>
            <NavBar/>
            <div>{children}</div>
        </>
    )
}