export default function AddPostForm() {
  return (
      <form action="submit" className="w-1/2 mx-auto">
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input type="text" placeholder="Title" className="rounded-sm py-1 px-3" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="subtitle">Subtitle (optional)</label>
          <input type="text" placeholder="Subtitle" className="rounded-sm py-1 px-3"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="title">Body</label>
          <textarea placeholder="Body" className="rounded-sm py-1 px-3"/>
        </div>
      </form>
  );
}
