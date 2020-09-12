import Head from "next/head";
import Router from 'next/router';
import Link from "next/link";
function LinkPosts() {
  const pids = ["id1", "id2", "id223"];
  return pids.map(pid => (
    <Link scroll={false} href="/post/[pid]" as={`/post/${pid}`} key={`${pid}`}>
      <p>
        <a>Post {pid}</a>
      </p>
    </Link>
  ));
}

const handler = () => {
  console.log(111);
  Router.push({
    pathname: '/about',
    query: { name: 'Zeit' }
  });
};
function Home() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      Hello world
      <p>scoped!</p>
      <LinkPosts />
      Click{" "}
      <Link href="/about" replace>
        <a>here</a>
      </Link>{" "}
      to read more Click{" "}
      <Link href="/hello">
        <img src="/static/react.png" alt="image" />
      </Link>
      Click <span onClick={handler}>here</span> to read more
      <style jsx>{`
        div {
          // background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        a {
          color: blue;
        }
      `}</style>
    </div>
  );
}

export default Home;
