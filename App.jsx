import { useQuery } from '@tanstack/react-query';
import './App.css'
import { fetchData } from './api/api';
import { queryKeys } from './api/CONSTANTS';
import Service from './Service';

function App() {
  const {data, error, isLoading, isError} = useQuery({
    queryKey: [queryKeys.SERVICE],
    queryFn: ()=>fetchData(queryKeys.SERVICE)
  })


  if(isError)
    console.log(error)

  if(isLoading) return <><h1>"Loading"</h1></>;
  return (
    <>
      <h1>hello</h1>
      <Service data={data}/>
      
    </>
  )
}

export default App
