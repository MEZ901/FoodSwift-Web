import { useCustomerProfileQuery } from "../redux/customerApiSlice.js";

const CustomerProfileContainer = () => {
  const { data } = useCustomerProfileQuery();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      {data?.message}
    </div>
  );
};

export default CustomerProfileContainer;
