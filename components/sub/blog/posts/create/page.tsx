"use client";
import { useEffect, useState } from "react";
import Nav from "../../../main/nav-blog";
import { getCurrentDate, slugifySentences } from "@/app/utils";

export default function CreatePost() {
    const [coverPhoto, setCoverPhoto] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [uploading, setUploading] = useState<boolean>(false);

    const handleFileReader = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        if (e.target.files && e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            if (readerEvent.target && readerEvent.target.result) {
                setCoverPhoto(readerEvent.target.result as string);
            }
        };
    };

    const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUploading(true);
        console.log({
            title,
            content,
            author_name: userData.displayName,
            pub_date: getCurrentDate(),
            slug: slugifySentences(title),
            comments: [],
        });
        //👉🏻 save blog post to the database
    };
    return (
        <div>
            <Nav />
            <main className='md:px-8 py-8 px-4 w-full'>
                <form className='flex flex-col w-full' onSubmit={handleCreatePost}>
                    <label htmlFor='title' className='text-sm text-blue-600'>
                        Title
                    </label>
                    <input
                        type='text'
                        name='title'
                        id='title'
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        className=' px-4 py-3 border-2 rounded-md text-lg mb-4'
                    />
                    <label htmlFor='content' className='text-sm text-blue-600'>
                        Content
                    </label>
                    <textarea
                        name='content'
                        rows={15}
                        value={content}
                        required
                        onChange={(e) => setContent(e.target.value)}
                        id='content'
                        className=' px-4 py-3 border-2 rounded-md mb-4'
                    ></textarea>
                    <label htmlFor='upload' className='text-sm text-blue-600'>
                        Upload Cover Photo
                    </label>
                    <input
                        type='file'
                        name='upload'
                        id='upload'
                        required
                        onChange={handleFileReader}
                        className=' px-4 py-3 border-2 rounded-md mb-4'
                        accept='image/jpeg, image/png'
                    />
                    <button
                        type='submit'
                        className='bg-blue-600 mt-4 text-white py-4 rounded-md'
                        disabled={uploading}
                    >
                        {uploading ? "Creating post..." : "Create Post"}
                    </button>
                </form>
            </main>
        </div>
    );
}

