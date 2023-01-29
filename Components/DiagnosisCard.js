import Link from "next/link";

export default function DiagnosisCard({
  name,
  treatments,
  symptoms,
  description,
  date,
}) {
  // name: String
  // treatment: Array of string
  // symptoms: Array of string
  // description: String
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between">
        <h1 className="text-info">{name}</h1>
        <div className="d-flex flex-column align-items-end">
          <h5>Diagnosed: {date[0]}</h5>
          <h5>Treatment End: {date[1]}</h5>
        </div>
      </div>
      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Treatment Plan</h5>
            {treatments.map((treatment) => {
              return (
                <>
                  <Link href={`/medicines/${treatment[1]}/${treatment[0]}`}>
                    <p>{treatment[1]}</p>
                  </Link>
                  <p className=" text-muted" style={{ marginTop: -1 + "em" }}>
                    <small>{treatment[2]}</small>
                  </p>
                </>
              );
            })}
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Symptoms</h5>
            <ul>
              {symptoms.map((symptom) => {
                return <li>{symptom}</li>;
              })}
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Diagnosis Description</h5>
            <p class="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
