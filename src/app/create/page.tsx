'use client';
import { useRouter } from 'next/navigation';
import * as React from 'react';

export interface CreatePageProps {}

export default function Create(props: CreatePageProps) {
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // onSubmit 실행시 기본 동작(페이지 바뀜)을 막음
        const title = e.target.title.value;
        const body = e.target.body.value;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, body }),
        };
        fetch(process.env.NEXT_PUBLIC_API_URL + `topics`, options)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const lastid = result.id;
            router.push(`/read/${lastid}`);
          });
      }}
    >
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}
