import { useRouter } from 'next/router';

export default function View() {
  const router = useRouter();
  const { title, description } = router.query;

  return (
    <div>
      <h1>View Post</h1>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>
        <a href="/">← Back to home</a>
      </p>
    </div>
  );
}
