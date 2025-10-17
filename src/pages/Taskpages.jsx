import { CircleChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";

function Taskpages() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div
      className="min-h-screen h-screen flex justify-center bg-slate-700 
       p-6"
    >
      <div className=" relative w-[500px] gap-2 flex flex-col wrap-normal  ">
        <button
          onClick={() => navigate(-1)}
          className="  absolute left-0  mt-5 mb-5 p-2  hover:bg-slate-400 rounded-md text-white   break-words"
        >
          <CircleChevronLeft />
        </button>
        <h1 className=" text-center  text-2xl  text-white  p-5  rounded-md  font-semibold ">
          Detalhes da Tarefa
        </h1>

        <div className="bg-slate-400  text-center text-xl text-white p-3 rounded-md  break-words">
          <p className="  font-semibold bg-slate-700 rounded-2xl shadow-md text-center p-1 break-words ">
            {title}
          </p>
          <br />
          <p>{description}</p>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Taskpages;
