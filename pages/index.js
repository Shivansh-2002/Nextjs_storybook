import Image from 'next/image'
import { Inter } from 'next/font/google'
import SearchBar from '../components/searchBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <SearchBar color='blue' size='25px'>
   </SearchBar>
  )
}
