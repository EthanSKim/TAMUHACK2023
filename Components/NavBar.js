import Link from "next/link";
import Router, { useRouter } from "next/router";

/**
 * @swagger
 * NavBar:
 *   post:
 *     description: Creates a navbar for all users to see.
 *     summary: Creates a navbar for all users to see.   
 */
export default function NavBar() {

    // Home | Menu | Login | Location
    const router = useRouter();
    return (
        <nav className="flex">
            <div>website</div>
            <div className="d-flex justify-content-around">
                <Link href="/">
                    Home
                </Link>

                <Link href="/diagnosis">
                    Diagnosis
                </Link>

                <Link href="/calendar">
                    Calendar
                </Link>
            </div>
            <button>Login</button>


            <style jsx>{`
                nav {
                    margin: 1rem 0;
                    text-align: center;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
                img {
                    height: 14vh
                }
            `}
            </style>
        </nav>
    )
}

