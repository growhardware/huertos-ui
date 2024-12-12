import { useForm } from 'react-hook-form';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { createDevice } from '../services/device-service';

const DevicesCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const status = { test: 'test' };
    const attributes = {
      alias: data.alias,
      kind: data.kind,
      port: data.port,
      status: status,
      settings: data.settings,
    };
    createDevice(attributes);
  };
  return (
    <>
      <Breadcrumb pageName="Create a device" />
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
                    {...register('alias', { required: true })}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Kind
                  </label>
                  <input
                    type="text"
                    placeholder="Kind"
                    {...register('kind', { required: true })}
                    className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-3 block font-medium text-black dark:text-white">
                    Port
                  </label>
                  <input
                    type="text"
                    placeholder="Port"
                    {...register('port', { required: true })}
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
                    {...register('status', { required: true })}
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
                    {...register('settings', { required: true })}
                    className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <input
                    type="submit"
                    value="Create"
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

export default DevicesCreate;
