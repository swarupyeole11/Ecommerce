import '@/styles/globals.css';
import { Layout } from '@/components';
import { Homes } from '.';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* {The Component refers to the default export component from pages take example of (ram {to path localhost:3000/ram} and index.jsx {index.jsx point to path 'localhost:3000/}) file and pageProps: This prop contains the initial props that are automatically passed to the page component by Next.js. These props can include data fetched using getServerSideProps, getStaticProps, or getInitialProps. They are passed to the page component to prepopulate it with any necessary data during the initial server-side rendering or static generation. } */}
      {/* {VVVIMP if you are nesting component you can access these component as children in the higher component } */}
      <Component {...pageProps} />
      
    </Layout>
  );
}
