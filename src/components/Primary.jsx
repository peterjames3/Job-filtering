import { useNavigate } from 'react-router-dom';

const Primary = () => {
  const navigate = useNavigate();
  const goBackHome = () => {
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <div className="w-full">
      <button
        onClick={goBackHome}
        className=" py-3 px-6 rounded-md border text-xl font-medium text-black bg-transparent hover:text-white hover:bg-VeryDarkGrayishCyan hover:cursor-pointer transition-all delay-300"
        type="button"
      >
        GO BACK
      </button>
    </div>
  );
};

export default Primary;
