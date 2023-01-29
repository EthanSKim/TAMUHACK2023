import DiagnosisCard from "@/Components/DiagnosisCard";

export default function diagnosis() {
  const diagnosises = [
    {
      name: "Disease",
      treatments: [["medicine A", "Twice daily"], ["medicine B", "Two pills each morning"]],
      symptoms: ["cough", "cold", "Runny Nose"],
      description:"Uh oh! someone ate the mushrooms they found in the forest. quod memor sis ad communia sunt ab initio minima. Quod si, exempli",
      date: ["2/31/2023", "2/31/99"]
    },
    {
      name: "Broken Femur",
      treatments: [["medicine A", "Twice daily"], ["medicine B", "Two pills each morning"]],
      symptoms: ["cough", "cold", "Runny Nose"],
      description:"Uh oh! someone ate the mushrooms they found in the forest. quod memor sis ad communia sunt ab initio minima. Quod si, exempli",
      date: ["2/31/2023", "2/31/99"]
    },
    {
      name: "Broken leg",
      treatments: [["medicine A", "Twice daily"], ["medicine B", "Two pills each morning"]],
      symptoms: ["cough", "cold", "Runny Nose"],
      description:"Uh oh! someone ate the mushrooms they found in the forest. quod memor sis ad communia sunt ab initio minima. Quod si, exempli",
      date: ["2/31/2023", "2/31/99"]
    }
  ];



  return (
    <div className="mx-5 mt-5">
      {diagnosises.map((diagnose) => {
        return <DiagnosisCard name={diagnose.name} treatments={diagnose.treatments} symptoms={diagnose.symptoms} description={diagnose.description} date={diagnose.date}/>
      })}
    </div>
  );
}
