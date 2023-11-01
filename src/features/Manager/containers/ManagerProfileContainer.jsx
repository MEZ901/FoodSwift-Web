import { useManagerProfileQuery } from "../redux/managerApiSlice";

const ManagerProfileContainer = () => {
  const { data } = useManagerProfileQuery();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      {data?.message}
    </div>
  );
};

export default ManagerProfileContainer;
