import Head from 'next/head'
import Navbar from '../components/Navbar'
import SecondNav from '../components/SecondNav'
import Sidebar from '../components/Sidebar'
import ProductPage from '../components/ProductPage'

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Flipkart-Clone</title>
        <meta name="description" content="Made by Akshansh Mathur" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
        <SecondNav />
        <main className='flex flex-row space-x-4 p-2 pl-11'>
          <Sidebar />
          <ProductPage products={products} />
        </main>
      </header>
      
    </div>
  )
}

export async function getServerSideProps(context){
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json(JSON.stringify())
  );
  return {
    props:{
      products,
    
  },
  };
}
