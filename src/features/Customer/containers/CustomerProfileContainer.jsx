import { useCustomerProfileQuery } from "../redux/customerApiSlice.js";

const CustomerProfileContainer = () => {
  const { data } = useCustomerProfileQuery();
  console.log(data);

  return <div>CustomerProfileContainer</div>;
};

export default CustomerProfileContainer;
