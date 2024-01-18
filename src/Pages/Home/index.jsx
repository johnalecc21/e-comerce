import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'


function Home() {

  const context = useContext(ShoppingCartContext)
  
  const renderView = () => {
    
      if (context.filteredItems?.length > 0) {
        return(
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item}/>
          ))
        )
      }else if (context.filteredItems){
        return(
        <div className='col-span-4 flex justify-center'>There are no matches in the search! </div>
        )
      }else {
        return <div className='col-span-4 flex justify-center'>Loading...</div>; // Puedes ajustar este mensaje según tus necesidades
      }
  
  }
 
  return (
      <Layout> 

        <input 
          type="text" 
          placeholder='Search a product'
          className='rounded-lg border border-black w-80 p-3 mt-6 mb-4 focus:outline-none'
          onChange={(event) => context.setSearchByTitle(event.target.value)} />
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg '>
          {renderView()}
        </div>
        <ProductDetail/>
        
      </Layout>
    
  )
}

export default Home
