import HeadInfo from '../../components/HeadInfo'
import Image from 'next/image'
import photosStyles from '../../src/styles/Photos.module.css'
import Link from 'next/link';

const photos = ({photos}) => {
  return (
    <div>
      <HeadInfo title="My Blog photos" />  
      <h1>My photos</h1>
      <ul className={photosStyles.photos}>
        {photos.map(photos =>(
            <li key={photos.id}>
                <Link href={`/photos/${photos.id}`}>

                 <Image
                    src={photos.thumbnailUrl}
                    width={100}
                    height={100}
                    alt={photos.title}
                />
                <span>{photos.title}</span>
                </Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export const getServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
    const photos = await res.json()
    return{
        props: {
            photos
        }
    }
}


export default photos