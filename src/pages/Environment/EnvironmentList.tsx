import { useState, useEffect } from 'react';
import { Await, Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import CardDataStats from '../../components/CardDataStats';
import { DevicesSvg } from '../../components/Svg/DevicesSvg';
// import { getDevices } from '../services/device-service';
import io from '../../services/socket';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';

const Devices = () => {
  const [data, setData] = useState([]);
  // let data;
  const handleResponse = (body, JWR) => {
    console.log('body ', body);
    if (JWR.statusCode === 200) {
      // data = body;
      setData(body);
      console.log('hr getDevices ', body);
      // return body;
      //     // setState({creating: false});
      //     // props.onCreated();
    } else {
      console.log('Error: ', JWR);
    }
  };

  const getDevices = async () => {
    const reqOptions = {
      method: 'get',
      url: '/device',
      headers: {},
    };
    return await io.socket.request(reqOptions, handleResponse);
  };

  // getDevices();

  // const [data, setData] = useState([]);
  // const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        await getDevices();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Breadcrumb pageName="Devices" />
      {/* start go to create device */}
      <Link
        to="/devices/create"
        className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
      >
        <DevicesSvg></DevicesSvg>
        Create
      </Link>

      {data.map((row: any, idx: number) => {
        return (
          <tr key={idx} className="content-center">
            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
              <span className={`label label-${row.para}`}>{row.kind}</span>
            </td>
            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
              {row.id}
            </td>
            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
              <span className={`label label-${row.para}`}>{row.alias}</span>
            </td>

            {/* <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
              <span>
                {row.criterion == 0
                  ? 'goes down by'
                  : row.criterion == 1
                  ? 'goes up by'
                  : row.criterion == 2
                  ? 'is smaller than'
                  : row.criterion == 3
                  ? 'is greater than'
                  : 'is equal to'}
              </span>
            </td> */}
            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
              {JSON.stringify(row.settings)}
            </td>
            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
              <span>
                {row.type == 0 ? 'Info' : row.type == 1 ? 'Warning' : 'Alert'}
              </span>
            </td>

            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
              <span className="actions flex grid-cols-2 gap-4">
                <BsFillTrashFill
                  className="delete-btn cursor-pointer"
                  onClick={() => deleteRow(idx)}
                />

                <BsFillPencilFill
                  className="edit-btn cursor-pointer"
                  onClick={() => editRow(idx)}
                />
              </span>
            </td>
          </tr>
        );
      })}

      {/* end create device */}
      {/* <!-- ====== Devices Section Start ====== --> */}
      {/* <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"> */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp>
          <svg
            className="fill-primary dark:fill-white"
            width="20"
            height="22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.01 512.01"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <g transform="translate(-1)">
                {' '}
                <g>
                  {' '}
                  <g>
                    {' '}
                    <path d="M508.517,257.027l-106.445-57.318v-20.506c0-4.71-3.814-8.533-8.533-8.533h-25.6v-8.533 c0-6.562-0.683-12.962-1.783-19.217l56.346-24.141c3.14-1.34,5.171-4.429,5.171-7.842V17.07h51.2 c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533h-59.733c-4.719,0-8.533,3.823-8.533,8.533v96.777l-48.751,20.898 c-7.859-22.852-22.886-42.377-42.496-55.757c8.713-6.187,14.447-16.307,14.447-27.784c0-18.825-15.309-34.133-34.133-34.133 c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533c9.412,0,17.067,7.654,17.067,17.067 c0,9.412-7.654,17.067-17.067,17.067c-0.017,0-0.026,0.009-0.043,0.009c-13.133-5.487-27.529-8.542-42.624-8.542 s-29.491,3.055-42.624,8.542c-0.017,0-0.026-0.009-0.043-0.009c-9.412,0-17.067-7.654-17.067-17.067 c0-9.412,7.654-17.067,17.067-17.067c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533 c-18.825,0-34.133,15.309-34.133,34.133c0,11.477,5.734,21.598,14.447,27.784c-19.61,13.38-34.637,32.905-42.496,55.757 l-48.751-20.898V8.537c0-4.71-3.814-8.533-8.533-8.533H35.138c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533h51.2 v93.867c0,3.413,2.031,6.502,5.171,7.842l56.346,24.141c-1.101,6.255-1.784,12.655-1.784,19.217v8.533h-25.6 c-4.719,0-8.533,3.823-8.533,8.533v20.506L5.494,257.027c-4.147,2.227-5.709,7.407-3.473,11.554 c1.545,2.867,4.489,4.489,7.526,4.489c1.365,0,2.748-0.324,4.036-1.024l108.766-58.564l134.673,75.418l135.202-75.11 l108.203,58.257c1.289,0.7,2.671,1.024,4.036,1.024c3.038,0,5.982-1.621,7.526-4.489 C514.225,264.434,512.664,259.255,508.517,257.027z M350.872,170.67H163.138v-8.533c0-51.755,42.112-93.867,93.867-93.867 c51.755,0,93.867,42.112,93.867,93.867V170.67z"></path>{' '}
                    <path d="M450.208,343.32l-48.136-40.115v-75.366l-136.533,75.853v173.747c76.015-4.454,136.533-67.524,136.533-144.632v-7.381 l32.205,26.837l-39.97,87.945c-1.135,2.492-0.998,5.385,0.358,7.765l34.133,59.733c1.57,2.756,4.446,4.301,7.415,4.301 c1.434,0,2.893-0.367,4.224-1.126c4.096-2.338,5.521-7.552,3.174-11.648l-31.966-55.936l40.858-89.899 C454.1,349.899,453.152,345.777,450.208,343.32z"></path>{' '}
                    <path d="M111.938,303.205L63.802,343.32c-2.944,2.458-3.891,6.579-2.295,10.078l40.858,89.899l-31.966,55.936 c-2.347,4.096-0.922,9.31,3.174,11.648c1.331,0.759,2.79,1.126,4.224,1.126c2.97,0,5.845-1.545,7.415-4.301l34.133-59.733 c1.357-2.381,1.493-5.274,0.358-7.765l-39.97-87.945l32.205-26.837v7.381c0,77.107,60.518,140.177,136.533,144.632V303.674 l-136.533-76.459V303.205z"></path>{' '}
                  </g>{' '}
                </g>{' '}
              </g>{' '}
            </g>
          </svg>
        </CardDataStats>
        <CardDataStats title="Total Profit" total="$45,2K" rate="4.35%" levelUp>
          <svg
            className="fill-primary dark:fill-white"
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7531 16.4312C10.3781 16.4312 9.27808 17.5312 9.27808 18.9062C9.27808 20.2812 10.3781 21.3812 11.7531 21.3812C13.1281 21.3812 14.2281 20.2812 14.2281 18.9062C14.2281 17.5656 13.0937 16.4312 11.7531 16.4312ZM11.7531 19.8687C11.2375 19.8687 10.825 19.4562 10.825 18.9406C10.825 18.425 11.2375 18.0125 11.7531 18.0125C12.2687 18.0125 12.6812 18.425 12.6812 18.9406C12.6812 19.4219 12.2343 19.8687 11.7531 19.8687Z"
              fill=""
            />
            <path
              d="M5.22183 16.4312C3.84683 16.4312 2.74683 17.5312 2.74683 18.9062C2.74683 20.2812 3.84683 21.3812 5.22183 21.3812C6.59683 21.3812 7.69683 20.2812 7.69683 18.9062C7.69683 17.5656 6.56245 16.4312 5.22183 16.4312ZM5.22183 19.8687C4.7062 19.8687 4.2937 19.4562 4.2937 18.9406C4.2937 18.425 4.7062 18.0125 5.22183 18.0125C5.73745 18.0125 6.14995 18.425 6.14995 18.9406C6.14995 19.4219 5.73745 19.8687 5.22183 19.8687Z"
              fill=""
            />
            <path
              d="M19.0062 0.618744H17.15C16.325 0.618744 15.6031 1.23749 15.5 2.06249L14.95 6.01562H1.37185C1.0281 6.01562 0.684353 6.18749 0.443728 6.46249C0.237478 6.73749 0.134353 7.11562 0.237478 7.45937C0.237478 7.49374 0.237478 7.49374 0.237478 7.52812L2.36873 13.9562C2.50623 14.4375 2.9531 14.7812 3.46873 14.7812H12.9562C14.2281 14.7812 15.3281 13.8187 15.5 12.5469L16.9437 2.26874C16.9437 2.19999 17.0125 2.16562 17.0812 2.16562H18.9375C19.35 2.16562 19.7281 1.82187 19.7281 1.37499C19.7281 0.928119 19.4187 0.618744 19.0062 0.618744ZM14.0219 12.3062C13.9531 12.8219 13.5062 13.2 12.9906 13.2H3.7781L1.92185 7.56249H14.7094L14.0219 12.3062Z"
              fill=""
            />
          </svg>
        </CardDataStats>
        <CardDataStats title="Total Product" total="2.450" rate="2.59%" levelUp>
          <svg
            className="fill-primary dark:fill-white"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.1063 18.0469L19.3875 3.23126C19.2157 1.71876 17.9438 0.584381 16.3969 0.584381H5.56878C4.05628 0.584381 2.78441 1.71876 2.57816 3.23126L0.859406 18.0469C0.756281 18.9063 1.03128 19.7313 1.61566 20.3844C2.20003 21.0375 2.99066 21.3813 3.85003 21.3813H18.1157C18.975 21.3813 19.8 21.0031 20.35 20.3844C20.9 19.7656 21.2094 18.9063 21.1063 18.0469ZM19.2157 19.3531C18.9407 19.6625 18.5625 19.8344 18.15 19.8344H3.85003C3.43753 19.8344 3.05941 19.6625 2.78441 19.3531C2.50941 19.0438 2.37191 18.6313 2.44066 18.2188L4.12503 3.43751C4.19378 2.71563 4.81253 2.16563 5.56878 2.16563H16.4313C17.1532 2.16563 17.7719 2.71563 17.875 3.43751L19.5938 18.2531C19.6282 18.6656 19.4907 19.0438 19.2157 19.3531Z"
              fill=""
            />
            <path
              d="M14.3345 5.29375C13.922 5.39688 13.647 5.80938 13.7501 6.22188C13.7845 6.42813 13.8189 6.63438 13.8189 6.80625C13.8189 8.35313 12.547 9.625 11.0001 9.625C9.45327 9.625 8.1814 8.35313 8.1814 6.80625C8.1814 6.6 8.21577 6.42813 8.25015 6.22188C8.35327 5.80938 8.07827 5.39688 7.66577 5.29375C7.25327 5.19063 6.84077 5.46563 6.73765 5.87813C6.6689 6.1875 6.63452 6.49688 6.63452 6.80625C6.63452 9.2125 8.5939 11.1719 11.0001 11.1719C13.4064 11.1719 15.3658 9.2125 15.3658 6.80625C15.3658 6.49688 15.3314 6.1875 15.2626 5.87813C15.1595 5.46563 14.747 5.225 14.3345 5.29375Z"
              fill=""
            />
          </svg>
        </CardDataStats>
        <CardDataStats title="Total Users" total="3.456" rate="0.95%" levelDown>
          <svg
            className="fill-primary dark:fill-white"
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.18418 8.03751C9.31543 8.03751 11.0686 6.35313 11.0686 4.25626C11.0686 2.15938 9.31543 0.475006 7.18418 0.475006C5.05293 0.475006 3.2998 2.15938 3.2998 4.25626C3.2998 6.35313 5.05293 8.03751 7.18418 8.03751ZM7.18418 2.05626C8.45605 2.05626 9.52168 3.05313 9.52168 4.29063C9.52168 5.52813 8.49043 6.52501 7.18418 6.52501C5.87793 6.52501 4.84668 5.52813 4.84668 4.29063C4.84668 3.05313 5.9123 2.05626 7.18418 2.05626Z"
              fill=""
            />
            <path
              d="M15.8124 9.6875C17.6687 9.6875 19.1468 8.24375 19.1468 6.42188C19.1468 4.6 17.6343 3.15625 15.8124 3.15625C13.9905 3.15625 12.478 4.6 12.478 6.42188C12.478 8.24375 13.9905 9.6875 15.8124 9.6875ZM15.8124 4.7375C16.8093 4.7375 17.5999 5.49375 17.5999 6.45625C17.5999 7.41875 16.8093 8.175 15.8124 8.175C14.8155 8.175 14.0249 7.41875 14.0249 6.45625C14.0249 5.49375 14.8155 4.7375 15.8124 4.7375Z"
              fill=""
            />
            <path
              d="M15.9843 10.0313H15.6749C14.6437 10.0313 13.6468 10.3406 12.7874 10.8563C11.8593 9.61876 10.3812 8.79376 8.73115 8.79376H5.67178C2.85303 8.82814 0.618652 11.0625 0.618652 13.8469V16.3219C0.618652 16.975 1.13428 17.4906 1.7874 17.4906H20.2468C20.8999 17.4906 21.4499 16.9406 21.4499 16.2875V15.4625C21.4155 12.4719 18.9749 10.0313 15.9843 10.0313ZM2.16553 15.9438V13.8469C2.16553 11.9219 3.74678 10.3406 5.67178 10.3406H8.73115C10.6562 10.3406 12.2374 11.9219 12.2374 13.8469V15.9438H2.16553V15.9438ZM19.8687 15.9438H13.7499V13.8469C13.7499 13.2969 13.6468 12.7469 13.4749 12.2313C14.0937 11.7844 14.8499 11.5781 15.6405 11.5781H15.9499C18.0812 11.5781 19.8343 13.3313 19.8343 15.4625V15.9438H19.8687Z"
              fill=""
            />
          </svg>
        </CardDataStats>
      </div>
      {/* </div> */}
      {/* <!-- ====== Devices Section End ====== --> */}
    </>
  );
};

export default Devices;
