import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { Control } from './Control';

export const metadata: Metadata = {
  title: 'Rucy Portfolio',
  description: 'Portfolio',
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode; // children: page
}) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'topics', {
    cache: 'no-store',
  });
  const topics = await res.json();
  return (
    <html>
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          {topics.map((topic, index) => {
            return (
              <li key={index}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
        </ol>
        {children}
        <Control />
      </body>
    </html>
  );
}
