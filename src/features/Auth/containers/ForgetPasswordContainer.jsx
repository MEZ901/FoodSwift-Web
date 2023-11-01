import { Button, Card, CardBody, Input } from "@nextui-org/react";

const ForgetPasswordContainer = () => {
  return (
    <section className="flex justify-center items-center h-screen w-full">
      <Card className="max-w-3xl px-6 py-8 mx-auto text-center">
        <CardBody className="overflow-hidden">
          <h1 className="text-3xl font-semibold text-gray-800">
            Forget Password
          </h1>
          <p className="max-w-md mx-auto mt-5 text-gray-500">
            Please enter your email address to search for your account.
          </p>

          <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:gap-2 sm:items-center sm:justify-center sm:-mx-2">
            <Input type="text" label="Email address" />

            <Button variant="shadow" color="primary">
              Reset Password
            </Button>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default ForgetPasswordContainer;
