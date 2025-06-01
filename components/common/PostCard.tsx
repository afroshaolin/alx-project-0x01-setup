const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <a href={`/posts/${post.id}`}>Read more</a>
    </div>
  );
};

export default PostCard;