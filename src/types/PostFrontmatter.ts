// Type definition for the frontmatter of a post.
export interface PostFrontmatter {
  title: string; // The title of the post.
  description: string; // The description of the post.
  author: string; // The author of the post.
  pubDate: string; // The publication date of the post.
  tags: string; // The tags associated with the post.
  image: {
    url: string; // The URL of the image.
    alt: string; // The alt text for the image.
  };
}
