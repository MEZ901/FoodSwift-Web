import { useDeliveryProfileQuery } from "../redux/deliveryApiSlice";

const DeliveryProfileContainer = () => {
  const { data } = useDeliveryProfileQuery();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      {data?.message}
    </div>
  );
};

export default DeliveryProfileContainer;
