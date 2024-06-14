export interface Comment {
    id: string;
    content: string;
    author_name: string;
    pub_date: string;
}
export interface Post {
    post_id: string;
    author_id: string;
    title: string;
    content: string;
    author_name: string;
    image_url: string;
    pub_date: string;
    slug: string;
    comments: Comment[];
}
