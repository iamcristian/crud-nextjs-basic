type Post = {
  id: string;
  title: string;
  description: string;
  date: Date;
};

let posts: Post[] = [];

// handlers
export const getPosts = () => posts;

export const addPosts = (post: Post) => {
  posts.push(post);
};

export const deletePost = (id: string) => {
  posts = posts.filter((post) => post.id !== id);
};

export const updatePost = (id: string, title: string, description: string) => {
  const post = posts.find((post) => post.id === id);

  if (post) {
    post.title = title;
    post.description = description;
  } else {
    throw new Error("Post not found");
  }
};

export const getById = (id: string) => {
  return posts.find((post) => post.id === id);
};
