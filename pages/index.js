export default function Index() {
  return (
    <div className="row w-75 mx-auto py-5 text-center">
      <div className="mx-auto fs-1 mb-5 fw-semibold">
        PillPal is here to help
      </div>
      <div className="col-6 text-center">
        <img className="mx-auto" src="/old_lady.jpg"></img>
      </div>
      <div className="col-6 d-flex">
        <div className="my-auto align-middle px-3 fs-5">
          <p>
            The well-being of others is always at the forefront of our minds as
            healthcare providers. PillPal is designed to give people readily
            accessible and easy-to-understand information about their medical
            diagnoses and medications.
          </p>
          <p>
            We understand that remembering to take medication can be a daunting
            task, especially for seniors. That's why we've designed our
            user-friendly platform with simplicity in mind, ensuring that our
            elderly users can easily set reminders and stay on top of their
            medication regimen.
          </p>
        </div>
      </div>
    </div>
  );
}
