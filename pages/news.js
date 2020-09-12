import { useRouter } from 'next/router';

const News = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <p>Big News: {slug}</p>;
};

export default News;
