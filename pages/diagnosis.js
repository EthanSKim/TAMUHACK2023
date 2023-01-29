import DiagnosisCard from "@/Components/DiagnosisCard";

export default function diagnosis() {
  const diagnosises = [
    {
      name: "Disease",
      treatments: [["1", "medicine A", "Twice daily"], ["2", "medicine B", "Two pills each morning"]],
      symptoms: ["cough", "cold", "Runny Nose"],
      description:"Uh oh! someone ate the mushrooms they found in the forest. quod memor sis ad communia sunt ab initio minima. Quod si, exempli",
      date: ["2/31/2023", "2/31/99"]
    },
    {
      name: "Broken Femur",
      treatments: [["1", "medicine A", "Twice daily"], ["2", "medicine B", "Two pills each morning"]],
      symptoms: ["cough", "cold", "Runny Nose"],
      description:"Uh oh! someone ate the mushrooms they found in the forest. quod memor sis ad communia sunt ab initio minima. Quod si, exempli",
      date: ["2/31/2023", "2/31/99"]
    },
    {
      name: "Broken leg",
      treatments: [["1", "medicine A", "Twice daily"], ["2", "medicine B", "Two pills each morning"]],
      symptoms: ["cough", "cold", "Runny Nose"],
      description:"Uh oh! someone ate the mushrooms they found in the forest. quod memor sis ad communia sunt ab initio minima. Quod si, exempli",
      date: ["2/31/2023", "2/31/99"]
    }
  ];



  return (
    <div className="mt-5 mb-5" style={{margin:"15em"}}>
      {diagnosises.map((diagnose) => {
        return <DiagnosisCard name={diagnose.name} treatments={diagnose.treatments} symptoms={diagnose.symptoms} description={diagnose.description} date={diagnose.date}/>
      })}
    </div>
  );
}
