import { useDeliveryProfileQuery } from "../redux/deliveryApiSlice";

const DeliveryProfileContainer = () => {
  const { data, isLoading, isError, error } = useDeliveryProfileQuery();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : isError ? (
        error.status === 422 ? (
          <h1>Email not verified, please verify your email</h1>
        ) : (
          <h1>Something went wrong</h1>
        )
      ) : (
        <h1>{data?.message}</h1>
      )}
    </div>
  );
};

export default DeliveryProfileContainer;
