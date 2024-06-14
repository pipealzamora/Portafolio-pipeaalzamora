"use client";
import Comments from "../../../../main/comments";
import Nav from "@/components/main/nav-blog"
import { extractSlugFromURL } from "@/app/utils";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Post() {
    const params = usePathname();
    const router = useRouter();
    const slug = extractSlugFromURL(params);
    const [loading, setLoading] = useState<boolean>(true);
    const [post, setPost] = useState<Post | null>(null);
    return (
        <div>
            <Nav />
            <main className='w-full md:p-8 px-4'>
                <header className='mb-6 py-4'>
                    <h2 className='text-3xl text-blue-700 font-bold mb-2'>
                        {post?.title}
                    </h2>
                    <div className='flex'>
                        <p className='text-red-500 mr-8 text-sm'>
                            Author: <span className='text-gray-700'>{post?.author_name}</span>
                        </p>
                        <p className='text-red-500 mr-6 text-sm'>
                            Posted on: <span className='text-gray-700'>{post?.pub_date}</span>
                        </p>
                    </div>
                </header>
                <div>
                    <p className=' text-gray-700 mb-3'>{post?.content}</p>
                </div>
            </main>
            <Comments comments={post?.comments} post_id={post?.post_id} />
        </div>
    );
}
