import Link from 'next/link'

export default function NewsPage() {
  return (
    <div>
      <>
        <h1>News Page</h1>
        <ul>
          <li>
            <Link href="/news/NextJS Is A Great Framwork">
              NextJS Is A Great Framwork
            </Link>
          </li>
          <li>
            <Link href="/news/JS is dead">
              JS is dead
            </Link>
          </li>
        </ul>
      </>
    </div>
  );
}
