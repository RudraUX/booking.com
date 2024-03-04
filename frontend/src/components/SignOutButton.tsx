import { FC } from "react";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = () => {
  return (
    <button className=" text-blue-600 px-3 font-bold hover:bg-gray-100"></button>
  );
};

export default SignOutButton;
