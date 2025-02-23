import Swal from "sweetalert2";

function SweetAlert() {
  function showAleert() {
    Swal.fire({
      title: "success!",
      text: "Do you want to continue",
      icon: "error",
      confirmButtonText: "Cool",
    });
  }
  return (
    <button onClick={showAleert} className="bg-red px-5 py-2">
      Alert
    </button>
  );
}

export default SweetAlert;
