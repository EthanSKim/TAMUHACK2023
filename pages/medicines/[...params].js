import Link from "next/link";

export default function Desc({params}) {
    const [name, id] = params || [];
    const df = "Take twice per day";
    const sideEf = "nausea, vomiting, diarrhea, changes in taste, headache";
    const notes = "rash, blisters, itching, hives, vomiting, bloody stool";
    return (
        <div style={{margin: "7vw"}}>
            <div className="d-flex justify-content-between mx-5">
                <div>
                    <h1>{name}</h1>
                    <p className="text-muted h4"><u>250mg</u></p>
                </div>
                <div>
                    <Link href="/diagnosis"><button className="btn btn-info">Return to Diagnosies</button></Link>
                </div>
            </div>
            <div className="mt-5" style={{margin:"8em"}}>
                <h4 className="mt-5"><strong>Uses: </strong>{"Amoxicillin is used to treat certain infections caused by bacteria, such as pneumonia; bronchitis (infection of the airway tubes leading to the lungs); and infections of the ears, nose, throat, urinary tract, and skin. It is also used in combination with other medications to eliminate H. pylori, a bacteria that causes ulcers. Amoxicillin is in a class of medications called penicillin-like antibiotics. It works by stopping the growth of bacteria."}</h4>
                <h4 className="mt-5"><strong>Dosage Frequency: </strong>{df}</h4>
                <h4 className="mt-5"><strong>Side Effects: </strong>{sideEf}</h4>
                <h4 className="mt-5"><strong>Notes: </strong>{notes}</h4>
            </div>
        </div>
    );
}

export function getServerSideProps({params: {params}}) {
    return {
        props: {
            params,
        },
    }
}