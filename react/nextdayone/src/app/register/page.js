import { Button } from "@nextui-org/react";

const Register = () => {
  return (
    <div className="form">
      <input placeholder="enter name" /> <br />
      <input placeholder="enter password" type="password" /> <br />
      <input placeholder="enter address" /> <br />
      <input placeholder="enter email" /> <br />
      <Button color="primary">Button</Button>
    </div>
  );
};

export default Register;
