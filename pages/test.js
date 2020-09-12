// import cowsay from 'cowsay-browser';

// function CowsayHi() {
//   return <pre>{cowsay.say({ text: 'hi there!' })}</pre>;
// }

// export default CowsayHi;

import fetch from 'isomorphic-unfetch';

function Page({ stars }) {
  return <div>Next stars: {stars}</div>;
}

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Page;
