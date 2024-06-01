import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Post() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the post action
    // For now, let's just navigate to the view page with the input values
    router.push({
      pathname: '/posts/view',
      query: { title, description },
    });
  };

  return (
    <div>
      <h1>Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Post</button>
      </form>
      <p>
        <a href="/">← Back to home</a>
      </p>
    </div>
  );
}
