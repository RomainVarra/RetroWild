import Register from "../../../components/User/Register";
import type { registerType } from "../../../types/user.type";

function RegisterPage() {
  const handleSubmit = (data: registerType) => {
    data;
  };
  return (
    <>
      <h1>Enregistrement</h1>
      <Register onSubmit={handleSubmit} />
    </>
  );
}

export default RegisterPage;
