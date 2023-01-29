import DiagnosisCard from "@/Components/DiagnosisCard";

export default function diagnosis() {
  const diagnosises = [
    {
      name: "Pneumonia",
      treatments: [
        ["1", "Amoxicillin", "Take twice per day"],
        ["2", "Mucinex", "Take up to four times per day"],
        ["3", "Drink Plenty of Water", "As often as you're thirsty, and when taking medication"],
      ],
      symptoms: ["cough", "cold", "Runny Nose"],
      description:
        "Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus (purulent material), causing cough with phlegm or pus, fever, chills, and difficulty breathing. A variety of organisms, including bacteria, viruses and fungi, can cause pneumonia.",
      date: ["1-28-2023", "2-15-2023"],
    },
    {
      name: "Knee Injury",
      treatments: [
        ["1", "Hydrocodone", "Up to twice per day as needed"],
        ["2", "Change Bandages", "Once per day"],
        ["3", "Gentle Exercises	", "Once per day"],
      ],
      symptoms: ["Pain", "Difficulty Walking"],
      description:
        "Torn Anterior cruciate ligament",
      date: ["1-5-2023", "3-1-2023"],
    },
  ];

  return (
    <div className="mt-5 mb-5" style={{ margin: "15em" }}>
      {diagnosises.map((diagnose) => {
        return (
          <DiagnosisCard
            name={diagnose.name}
            treatments={diagnose.treatments}
            symptoms={diagnose.symptoms}
            description={diagnose.description}
            date={diagnose.date}
          />
        );
      })}
    </div>
  );
}
