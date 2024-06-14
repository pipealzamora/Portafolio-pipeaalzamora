"use client";
import Image from "next/image";
import Nav from "../components/sub/blog/nav-blog";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
    const [posts, setPosts] = useState<Post[]>();
    const shortenText = (text: string): string => {
        return text.length <= 55 ? text : text.slice(0, 55) + "...";
    };
    useEffect(() => {
        fetchAllPosts();
    }, []);
    const fetchAllPosts = async () => {
        // 👉🏻 fetch all posts
    };
    return (
        <div>
            <Nav />
            <main className='p-8 w-full flex lg:flex-row flex-col items-center gap-5 flex-wrap justify-center'>
                {posts?.map((post) => (
                    <Link
                        href={`/posts/${post.slug}`}
                        className='cursor-pointer lg:w-1/3 rounded-lg w-full border-2 h-[400px] bg-white'
                        key={post.post_id}
                    >
                        <Image
                            src={post.image_url}
                            alt='Image'
                            width={300}
                            height={300}
                            className='w-full h-2/3 rounded-t-lg'
                        />
                        <section className='h-1/3 w-full p-4 flex items-center'>
                            <p className='font-semibold text-xl text-blue-500'>
                                {shortenText(post.title)}
                            </p>
                        </section>
                    </Link>
                ))}
            </main>
        </div>
    );
}


