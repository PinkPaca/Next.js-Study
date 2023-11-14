import * as React from 'react';

export interface IPageProps {
  params: {
    id: string;
  };
}

export default async function Page(props: IPageProps) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/topics/${props.params.id}`,
    {
      cache: 'no-store',
    }
  );
  const topic = await res.json();
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
