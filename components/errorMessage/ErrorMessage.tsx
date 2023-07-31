import Image from "next/image";

const ErrorMessage = () => {
  return <Image src="/error.gif" width={250} height={250} alt="Error" />;
};

export default ErrorMessage;
