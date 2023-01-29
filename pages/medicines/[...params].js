import Link from "next/link";

export default function Desc({params}) {
    const [name, id] = params || [];
    const df = "Once a day";
    const sideEf = "Et sic, si contingit ex per se lavantem, et erit hoc paratus ut diceret, “Hoc non solum lavari ut desideravit, sed ut animus in statu naturae convenienter naturae, et non ut si ego quæ ventura offendit.”";
    const notes = "Sollicitant homines non sunt nisi quam formae rerum principiis opiniones. Mors enim est terribilis ut Socrati aliud esse apparet. Sed";
    return (
        <div style={{margin: "7vw"}}>
            <div className="d-flex justify-content-between mx-5">
                <div>
                    <h1>{name} {`(id: ${id})`}</h1>
                    <p className="text-muted h4"><u>250mg</u></p>
                </div>
                <div>
                    <Link href="/diagnosis"><button className="btn btn-info">Return to Diagnosies</button></Link>
                </div>
            </div>
            <div className="mt-5" style={{margin:"8em"}}>
                <h4 className="mt-5"><strong>Uses: </strong>{"Quando ambulabat agendis admonere te qualis actio. Si ad corpus, quae plerumque Imaginare tecum in balineo quidam aquam fundes aliquod discrimen vituperiis usum alii furantur."}</h4>
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