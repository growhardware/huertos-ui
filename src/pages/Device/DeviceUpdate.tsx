// import { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
// import { updateDevice, getDevice } from '../../services/device-service';
// import { DevicesSvg } from '../../components/Svg/DevicesSvg';
// import { useNavigate } from 'react-router-dom';

// const DeviceUpdate = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

//   const [deviceData, setDeviceData] = useState({
//     alias: '',
//     kind: '',
//     port: '',
//     status: '',
//     plan: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDeviceData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleResponse = (body, JWR) => {
//     if (JWR.statusCode === 200) {
//       const { alias, kind, port, status, plan } = body;
//       setDeviceData({ 
//         alias: alias || '',
//         kind: kind || '',
//         port: port || '',
//         status: typeof status === 'object' ? JSON.stringify(status, null, 2) : status || '',
//         plan: typeof plan === 'object' ? JSON.stringify(plan, null, 2) : plan || ''
//       });
//     } else {
//       console.log('Error: ', JWR);
//     }
//   };

//   useEffect(() => {
//     const fetchDevice = async () => {
//       try {
//         await getDevice(id, handleResponse);
//       } catch (error) {
//         console.error('Error fetching device:', error);
//       }
//     };

//     fetchDevice();
//   }, [id]);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const tryParseJson = (jsonString) => {
//     try {
//       return jsonString ? JSON.parse(jsonString) : null;
//     } catch (e) {
//       return jsonString;
//     }
//   };

//   const onSubmit = () => {
//     console.log('deviceData ', deviceData)
//     const attributes = {
//       id: id,
//       alias: deviceData.alias,
//       kind: deviceData.kind,
//       port: deviceData.port,
//       status: tryParseJson(deviceData.status),
//       plan: tryParseJson(deviceData.plan),
//     };
//     updateDevice(attributes);
//     navigate(`/devices/`, { replace: true });
//   };

//   return (
//     <>
//       <Breadcrumb pageName="Update device" />
      
//       <Link
//         to="/devices"
//         className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
//       >
//         <DevicesSvg></DevicesSvg>
//         Devices
//       </Link>
      
//       <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
//         <div className="flex flex-col gap-9">
//           <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//             <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
//               <h3 className="font-medium text-black dark:text-white">
//                 Properties
//               </h3>
//             </div>

//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="flex flex-col gap-5.5 p-6.5">
//                 <div>
//                   <label className="mb-3 block text-black dark:text-white">
//                     Alias
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Alias"
//                     name="alias"
//                     value={deviceData.alias}
//                     onChange={handleChange}
//                     className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-3 block text-black dark:text-white">
//                     Kind
//                   </label>
//                   <select
//                     placeholder="Kind"
//                     {...register('kind', { required: true })}
//                     name="kind"
//                     value={deviceData.kind}
//                     onChange={handleChange}
//                     className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
//                       isOptionSelected ? 'text-black dark:text-white' : ''
//                     }`}
//                   >
//                     <option
//                       value=""
//                       disabled
//                       className="text-body dark:text-bodydark"
//                     >
//                       Select Kind
//                     </option>
//                     <option
//                       value="light-medulla"
//                       className="text-body dark:text-bodydark"
//                     >
//                       light-medulla
//                     </option>
//                     <option
//                       value="multi-medulla"
//                       className="text-body dark:text-bodydark"
//                     >
//                       multi-medulla
//                     </option>
//                     <option
//                       value="water-medulla"
//                       className="text-body dark:text-bodydark"
//                     >
//                       water-medulla
//                     </option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-3 block font-medium text-black dark:text-white">
//                     Port
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Port"
//                     name="port"
//                     value={deviceData.port}
//                     onChange={handleChange}
//                     className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-3 block font-medium text-black dark:text-white">
//                     Status (JSON)
//                   </label>
//                   <textarea
//                     rows={4}
//                     placeholder="Enter status in JSON format"
//                     name="status"
//                     value={deviceData.status}
//                     onChange={handleChange}
//                     className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-mono text-sm text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-3 block text-black dark:text-white">
//                     Plan (JSON)
//                   </label>
//                   <textarea
//                     rows={6}
//                     placeholder="Enter plan in JSON format"
//                     name="plan"
//                     value={deviceData.plan}
//                     onChange={handleChange}
//                     className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-mono text-sm text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <input
//                     type="submit"
//                     value="Update"
//                     className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
//                   />
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DeviceUpdate;

import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { updateDevice, getDevice } from '../../services/device-service';
import { DevicesSvg } from '../../components/Svg/DevicesSvg';

const DeviceUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [jsonErrors, setJsonErrors] = useState({ status: false, plan: false });

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  const statusWatch = watch('status');
  const planWatch = watch('plan');

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        await getDevice(id, (body, JWR) => {
          if (JWR.statusCode === 200) {
            reset({
              alias: body.alias || '',
              kind: body.kind || '',
              port: body.port || '',
              status: typeof body.status === 'object' ? JSON.stringify(body.status, null, 2) : body.status || '',
              plan: typeof body.plan === 'object' ? JSON.stringify(body.plan, null, 2) : body.plan || '',
            });
          } else {
            console.log('Error: ', JWR);
          }
        });
      } catch (error) {
        console.error('Error fetching device:', error);
      }
    };

    fetchDevice();
  }, [id, reset]);

  const validateJSON = (input: string) => {
    try {
      return input ? JSON.parse(input) : null;
    } catch {
      return undefined;
    }
  };

  const onSubmit = () => {
    const statusParsed = validateJSON(getValues('status'));
    const planParsed = validateJSON(getValues('plan'));

    const newErrors = {
      status: statusParsed === undefined,
      plan: planParsed === undefined,
    };

    setJsonErrors(newErrors);

    if (newErrors.status || newErrors.plan) return;

    const payload = {
      id,
      alias: getValues('alias'),
      kind: getValues('kind'),
      port: getValues('port'),
      status: statusParsed,
      plan: planParsed,
    };
    // console.log('Payload antes de enviar:', payload);

    updateDevice(payload);
    navigate('/devices', { replace: true });
  };

  const renderPreview = (input: string) => {
    try {
      const parsed = JSON.parse(input);
      return (
        <pre className="mt-2 rounded bg-gray-100 p-3 text-xs text-gray-800 dark:bg-gray-800 dark:text-white overflow-auto">
          {JSON.stringify(parsed, null, 2)}
        </pre>
      );
    } catch {
      return null;
    }
  };

  return (
    <>
      <Breadcrumb pageName="Update device" />
      <Link to="/devices" className="flex items-center gap-3.5 text-sm font-medium duration-300 hover:text-primary lg:text-base">
        <DevicesSvg />
        Devices
      </Link>

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">Properties</h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">Alias</label>
                  <input
                    type="text"
                    placeholder="Alias"
                    {...register('alias')}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">Kind</label>
                  <select
                    {...register('kind', { required: true })}
                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                  >
                    <option value="" disabled className="text-body dark:text-bodydark">Select Kind</option>
                    <option value="light-medulla">light-medulla</option>
                    <option value="multi-medulla">multi-medulla</option>
                    <option value="water-medulla">water-medulla</option>
                  </select>
                  {errors.kind && <p className="text-red-500 text-sm mt-1">Kind is required.</p>}
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">Port</label>
                  <input
                    type="text"
                    placeholder="Port"
                    {...register('port')}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">Status (JSON)</label>
                  <textarea
                    rows={4}
                    placeholder="Enter status in JSON format"
                    {...register('status')}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-mono text-sm text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  {jsonErrors.status && <p className="text-red-500 text-sm mt-1">Invalid JSON in Status</p>}
                  {renderPreview(statusWatch)}
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">Plan (JSON)</label>
                  <textarea
                    rows={6}
                    placeholder="Enter plan in JSON format"
                    {...register('plan')}
                    className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-mono text-sm text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  />
                  {jsonErrors.plan && <p className="text-red-500 text-sm mt-1">Invalid JSON in Plan</p>}
                  {renderPreview(planWatch)}
                </div>

                <div>
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
