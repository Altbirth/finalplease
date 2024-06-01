import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { useProfile } from '../ProfileContext'; // Updated import path

export default function FirstPost() {
  const { profile, setProfile } = useProfile();
  const [newProfile, setNewProfile] = useState({
    name: profile.name,
    description: profile.description
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
   
      const data = { success: true };

      if (data.success) {
        setProfile(newProfile);
        setError(null);
        console.log('Profile updated:', newProfile);
      } else {
        setError('Failed to update profile. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while updating profile. Please try again.');
    }
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newProfile.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={newProfile.description}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Update Profile</button>
        </form>
        {error && <p className="error">{error}</p>}
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </section>
    </Layout>
  );
}
