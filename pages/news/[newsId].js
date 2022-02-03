import { useRouter } from 'next/router'

export default function NewsPage() {

  const router = useRouter()
  const newsId = router.query.newsId

  //send a request to the backend API
  // to fetch the news item with newsId

  return (
    <div>
      <h1>Detail Page</h1>
    </div>
  );
}
