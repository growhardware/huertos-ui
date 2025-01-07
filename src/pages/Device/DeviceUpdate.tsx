import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import {
  updateDevice,
  getDevice,
  deleteDevice,
} from '../../services/device-service';
import { DevicesSvg } from '../../components/Svg/DevicesSvg';
// import io from '../../services/socket';
const DeviceUpdate = () => {
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const [alias, setAlias] = useState(); // use `undefined` value
  const [kind, setKind] = useState(); // use `undefined` value
  const [port, setPort] = useState(); // use `undefined` value
  const [status, setStatus] = useState(); // use `undefined` value
  const [settings, setSettings] = useState(); // use `undefined` value

  function handleChangeAlias(event) {
    setAlias(event.target.value);
  }

  function handleChangeKind(event) {
    setKind(event.target.value);
  }

  function handleChangePort(event) {
    setPort(event.target.value);
  }

  function handleChangeStatus(event) {
    setStatus(event.target.value);
  }

  function handleChangeSettings(event) {
    setSettings(event.target.value);
  }
  const handleResponse = (body, JWR) => {
    console.log('body ', body);
    if (JWR.statusCode === 200) {
      // data = body;
      setData(body);
      setAlias(body.alias);
      setKind(body.kind);
      setPort(body.port);
      setStatus(body.status);
      setSettings(body.settings);
      console.log('hr getDevice ', body);
      // return body;
      //     // setState({creating: false});
      //     // props.onCreated();
    } else {
      console.log('Error: ', JWR);
    }
  };

  const hChange = (e) => {
    data.alias = e.target.value;
  };
  useEffect(() => {
    async function fetchData() {
      try {
        await getDevice(id, handleResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const status = {};
    const attributes = {
      id: id,
      alias: alias,
      kind: kind,
      port: port,
      status: status,
      settings: settings,
    };
    updateDevice(attributes);
  };
  return (
    <>
      <Breadcrumb pageName="Update device" />
      {/* start back to devices */}
      <Link
        to="/devices"
        className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
      >
        <DevicesSvg></DevicesSvg>
        Devices
      </Link>
      {/* end back to devices */}
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Properties
              </h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Alias
                  </label>
                  <input
                    type="text"
                    placeholder="Alias"
                    value={alias}
                    onChange={handleChangeAlias}
                    // {...register('alias', { required: true })}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Kind
                  </label>
                  {/* <input
                    type="text"
                    placeholder="Kind"
                    /{...register('kind', { required: true })}
                    className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  /> */}
                  <select
                    placeholder="Kind"
                    {...register('kind', { required: true })}
                    value={kind ? kind : selectedOption}
                    onChange={handleChangeKind}
                    // onChange={(e) => {
                    //   setSelectedOption(e.target.value);
                    //   changeTextColor();
                    // }}
                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
                      isOptionSelected ? 'text-black dark:text-white' : ''
                    }`}
                  >
                    <option
                      value=""
                      disabled
                      className="text-body dark:text-bodydark"
                    >
                      Select Kind
                    </option>
                    <option
                      value="concept-medulla"
                      className="text-body dark:text-bodydark"
                    >
                      concept-medulla
                    </option>
                    <option
                      value="water-medulla"
                      className="text-body dark:text-bodydark"
                    >
                      water-medulla
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-3 block font-medium text-black dark:text-white">
                    Port
                  </label>
                  <input
                    type="text"
                    placeholder="Port"
                    value={port}
                    onChange={handleChangePort}
                    // {...register('port', { required: true })}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                  />
                </div>

                <div>
                  <label className="mb-3 block font-medium text-black dark:text-white">
                    Status
                  </label>
                  <input
                    type="text"
                    placeholder="Status"
                    value={JSON.stringify(status)}
                    onChange={handleChangeStatus}
                    // {...register('status', { required: true })}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                  />
                </div>

                {/* <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Status
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Active textarea"
                    {...register('status', { required: true })}
                    className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  ></textarea>
                </div> */}

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Settings
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Active textarea"
                    value={JSON.stringify(settings)}
                    onChange={handleChangeSettings}
                    // {...register('settings', { required: true })}
                    className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <input
                    type="submit"
                    value="Update"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeviceUpdate;
