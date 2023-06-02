'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/Profile';

const MyProfile = () => {
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);
  const handleEdit = () => {};
  const handleDelete = async () => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };
    console.log(posts);

    if (session?.user.id) fetchPosts();
  }, []);

  return (
    <>
      <Profile name="my" desc="welcome to your profile page" data={posts} handleEdit={handleEdit} handleDelete={handleDelete} />
    </>
  );
};

export default MyProfile;
