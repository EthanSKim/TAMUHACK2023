import Header from "@/Components/Header";
import NavBar from "@/Components/NavBar";

export default function Layout({children}) {
    return (
        <>
            <Header/>
            <NavBar/>
            <div>{children}</div>
        </>
    )
}