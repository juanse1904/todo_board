'use client'
const HomePage = () => {
  const onSubmit = async (e) => {
    const defaultOwner = 'ec667bf9-2362-407c-acae-b204fb4aa410';
    const title = e.target.title.value;
    const description = e.target.description.value;
    const response = await fetch('api/tasks',{
      method: 'POST',
      body: JSON.stringify({
        description,
        title,
        owner: defaultOwner,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
  }
  return (
    <div className="h-screen flex justify-center items-center">
    <form className="bg-slate-800 p-10 w-auto" onSubmit={onSubmit}>
      <label htmlFor="title" className="font-bold text-sm">Title</label>
      <input 
        type="text"
        id="title"
        placeholder="Title"
        className="border border-gray-400 p-2 mb-4 w-full text-black"
      />
      <label htmlFor="description" className="font-bold text-sm">Description</label>
      <textarea 
        rows="3" 
        id="description"
        placeholder="Description"
        className="border border-gray-400 p-2 mb-4 w-full text-black"
      ></textarea>
      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Create</button>
    </form>
    </div>
  )
}

export default HomePage;