import { useState } from "react";

function Form() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [resume, setResume] = useState(null);
  const [url, setUrl] = useState("");
  const [about, setAbout] = useState("");

  function add(e) {
    e.preventDefault(); // Prevents page reload
    console.log({
      firstname,
      lastname,
      email,
      contact,
      gender,
      birthdate,
      resume,
      url,
      about,
    });
  }

  return (
    <div className="bg-[#B3D8A8] w-full flex justify-center items-center">
      <form
        className="bg-[#FBFFE4] w-[40%] flex flex-col px-10 py-10 rounded-2xl"
        onSubmit={add}
      >
        <h1 className="text-center font-bold text-4xl mb-10">Form in React</h1>

        <label className="labelDesign">
          Firstname
          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="Enter name"
            className="inputDesign"
            type="text"
          />
        </label>

        <label className="labelDesign">
          Lastname
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Enter Lastname"
            className="inputDesign"
            type="text"
          />
        </label>

        <label className="labelDesign">
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="inputDesign"
            type="email"
          />
        </label>

        <label className="labelDesign">
          Contact
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter mobile number"
            className="inputDesign"
            type="text"
          />
        </label>

        <div className="flex grid-cols-2 gap-3">
          <label className="w-[50%] labelDesign">
            Gender
            <select
              className="inputDesign"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label className="w-[50%] labelDesign">
            Birthdate
            <input
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="inputDesign"
              type="date"
            />
          </label>
        </div>

        <label className="labelDesign">
          Upload Resume
          <input
            onChange={(e) => setResume(e.target.files[0])}
            type="file"
            className="inputDesign"
          />
        </label>

        <label className="labelDesign">
          URL
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
            className="inputDesign"
            type="text"
          />
        </label>

        <label className="labelDesign">
          About
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="Tell us about yourself"
            className="inputDesign"
          />
        </label>

        <button
          type="submit"
          className="cursor-pointer border py-2 mt-5 bg-[#3D8D7A] rounded-2xl text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
