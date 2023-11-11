import Button from './Button.jsx';

const Form = ({
  jobId,
  error,
  status,
  comData,
  jobData,
  editJob,
  postJob,
  setJobData,
  setImgData,
}) => {
  return (
    <>
      <div className='flex flex-col h-full justify-center z-50 items-center'>
        <h1 className='text-5xl text-gray-500 translate-y-5 font-bold'>
          {jobId ? 'Edit Job' : 'Add New Job'}
        </h1>
        <article className=''>
          <div className='flex flex-col max-h-fit w-[30rem] mt-5 p-6 text-gray-700 bg-white shadow-md rounded-xl bg-clip-border'>
            {status && (
              <p className='text-sm self-center mb-3 text-red-400'>
                {status} has been updated
              </p>
            )}
            <form
              className='mt-1 flex flex-col'
              onSubmit={jobId ? editJob : postJob}
            >
              <div className='text-left relative z-0 mb-6 group'>
                <input
                  type='text'
                  value={jobData.title}
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  onChange={(e) => {
                    setJobData({ ...jobData, title: e.target.value });
                  }}
                />
                <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Title
                </label>
                {error.title && (
                  <p className='text-sm self-center mt-1 text-red-400'>
                    {error.title}
                  </p>
                )}
              </div>
              <div className='text-left relative z-0 w-full mb-6 group'>
                <label className='block mb-2 text-sm font-medium text-gray-500'>
                  Job Description
                </label>

                <textarea
                  value={jobData.description}
                  rows={4}
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  placeholder='Write the description here...'
                  onChange={(e) => {
                    setJobData({ ...jobData, description: e.target.value });
                  }}
                />
                {error.description && (
                  <p className='text-sm self-center mt-1 text-red-400'>
                    {error.description}
                  </p>
                )}
              </div>
              {jobId && (
                <div className='flex flex-col items-start w-full'>
                  <label className='flex flex-row items-center mb-2 text-sm font-medium text-gray-500'>
                    Upload Image
                    {error.message && (
                      <p className='text-sm ml-5 text-red-400'>
                        Image Not Found
                      </p>
                    )}
                  </label>
                  <label
                    htmlFor='dropzone-file'
                    className='flex flex-col items-center justify-center w-full mb-3 h-fit border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 '
                  >
                    <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                      <svg
                        className='w-8 h-8 mb-4 text-gray-500 '
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 20 16'
                      >
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                        />
                      </svg>
                      <p className='mb-2 p-2 text-sm flex flex-col justify-center text-gray-500 '>
                        <span className='font-semibold flex self-center'>
                          Click to upload
                        </span>
                        or drag and drop
                      </p>
                    </div>
                    <input
                      id='dropzone-file'
                      onInput={(e) => {
                        setImgData(e.target.files[0]);
                      }}
                      type='file'
                      className='hidden'
                    />
                  </label>
                </div>
              )}
              {!jobId && (
                <div className='relative z-0 w-full mb-6 group'>
                  <input
                    type='text'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=' '
                    value={jobData.imgURL}
                    onChange={(e) => {
                      setJobData({ ...jobData, imgURL: e.target.value });
                    }}
                  />
                  <label
                    htmlFor='floating_imgURL'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Image URL
                  </label>
                  {error.imgURL && (
                    <p className='text-sm self-center mt-1 text-red-400'>
                      {error.imgURL}
                    </p>
                  )}
                </div>
              )}
              <div className='grid md:grid-cols-2 md:gap-6'>
                <div className='text-left relative z-0 w-full mb-6 group'>
                  <label className='block mb-2 text-sm font-medium text-gray-500'>
                    Type Of Job
                  </label>
                  <select
                    value={jobData.jobType}
                    onChange={(e) => {
                      setJobData({ ...jobData, jobType: e.target.value });
                    }}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  >
                    <option selected='disabled'>Choose a type</option>
                    <option value='Full Time'>Full Time</option>
                    <option value='Part Time'>Part Time</option>
                  </select>
                  {error.jobType && (
                    <p className='text-sm self-center mt-1 text-red-400'>
                      {error.jobType}
                    </p>
                  )}
                </div>
                <div className='text-left relative z-0 w-full mb-6 group'>
                  <label className='block mb-2 text-sm font-medium text-gray-500'>
                    Company
                  </label>
                  <select
                    value={jobData.companyId}
                    onChange={(e) => {
                      setJobData({ ...jobData, companyId: e.target.value });
                    }}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  >
                    <option selected=''>Your Company</option>
                    {comData.map((data) => (
                      <option value={data.id}>{data.name}</option>
                    ))}
                  </select>
                  {error.companyId && (
                    <p className='text-sm self-center mt-1 text-red-400'>
                      {error.companyId}
                    </p>
                  )}
                </div>
              </div>
              <Button />
            </form>
          </div>
        </article>
      </div>
    </>
  );
};

export default Form;
