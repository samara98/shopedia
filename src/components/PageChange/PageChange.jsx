import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

export default function PageChange() {
  return (
    <div className="absolute flex w-full h-full">
      <div
        className="bg-cover fixed z-40 w-full h-full top-0 left-0"
        style={{
          backgroundImage: 'url("/images/img-1-1000x600.jpg")',
        }}
      ></div>
      <div className="top-0 left-0 w-full h-full block z-50 absolute bg-black bg-opacity-50"></div>
      <div className="my-auto mx-auto max-w-sm text-center relative z-50 top-0">
        <div className="block">
          <FontAwesomeIcon
            icon={faCircleNotch}
            className="animate-spin text-white mx-auto text-6xl"
          />
        </div>
      </div>
    </div>
  );
}
