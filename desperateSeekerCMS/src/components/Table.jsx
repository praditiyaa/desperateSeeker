import AddForm from '../views/AddFormPage';

const Table = ({ jobData, comData }) => {
  return (
    <main className=''>
      <article className='flex flex-col mt-5 justify-center items-center'>
        <div className='flex flex-row w-[70rem] justify-between items-center p-5'>
          <h1 className='font-bold text-gray-900'>
            {jobData ? 'List Of Jobs Available' : 'List Of Companies Available'}
          </h1>
          <button
            className='btn normal-case btn-ghost bg-slate-200'
            onClick={() => document.getElementById('my_modal_3').showModal()}
          >
            {jobData ? 'Add New Job' : 'Add New Companies'}
          </button>
          <dialog id='my_modal_3' className='modal'>
            <div className='modal-box'>
              <form method='dialog'>
                {/* if there is a button in form, it will close the modal */}
                <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                  ✕
                </button>
              </form>
              <AddForm />
            </div>
          </dialog>
        </div>
        <div className='relative overflow-y-auto overflow-hidden h-[37rem] shadow-md sm:rounded-lg'>
          <table className='text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
              {jobData && (
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Job Title
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Company
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Category
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Email
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Created At
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              )}
              {comData && (
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Location
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Email
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Description
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Jobs Available
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              )}
            </thead>
            <tbody className=''>
              {jobData &&
                jobData.map((data) => (
                  <tr className='bg-white border-b'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                    >
                      {data.title}
                    </th>
                    <td className='px-6 py-4'>{data?.Company?.name}</td>
                    <td className='px-6 py-4'>{data.jobType}</td>
                    <td className='px-6 py-4'>{data?.Company?.email}</td>
                    <td className='px-6 py-4'>
                      {Date(data?.Company?.createdAt).split('GMT')[0]}
                    </td>
                    <td className='px-6 py-4 text-right'>
                      <div className='btn-group btn-group-horizontal lg:btn-group-horizontal'>
                        <button
                          className='btn btn-ghost btn-sm'
                          onClick={() =>
                            document.getElementById('my_modal_3').showModal()
                          }
                        >
                          edit
                        </button>
                        <dialog id='my_modal_3' className='modal'>
                          <div className='modal-box'>
                            <form method='dialog'>
                              {/* if there is a button in form, it will close the modal */}
                              <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                                ✕
                              </button>
                            </form>
                            <AddForm />
                          </div>
                        </dialog>
                        <button className='btn btn-ghost btn-sm'>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              {comData &&
                comData.map((data) => (
                  <tr className='bg-white border-b'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                    >
                      {data.name}
                    </th>
                    <td className='px-6 py-4'>{data.location}</td>
                    <td className='px-6 py-4'>{data.email}</td>
                    <td className='px-6 w-[26rem] py-4'>{data.description}</td>
                    <td className='px-6 py-4'>{data.Jobs.length}</td>
                    <td className='px-6 py-4 text-right'>
                      <div className='btn-group btn-group-horizontal lg:btn-group-horizontal'>
                        <button
                          className='btn btn-ghost btn-sm'
                          onClick={() =>
                            document.getElementById('my_modal_3').showModal()
                          }
                        >
                          edit
                        </button>
                        <dialog id='my_modal_3' className='modal'>
                          <div className='modal-box'>
                            <form method='dialog'>
                              {/* if there is a button in form, it will close the modal */}
                              <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                                ✕
                              </button>
                            </form>
                            <AddForm />
                          </div>
                        </dialog>
                        <button className='btn btn-ghost btn-sm'>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </article>
    </main>
  );
};

export default Table;
