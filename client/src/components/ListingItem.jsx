import { Link } from 'react-router-dom'
import {MdLocationOn} from "react-icons/md";

function ListingItem({listing}) {
  return (
    <div className='bg-white  shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[300px]'>
      <Link to={`/listing/${listing._id}`}>
        <img src={listing.imageUrls[0] ||"https://in.images.search.yahoo.com/images/view;_ylt=Awrx.q9RFvNlIX4lESi9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzA3YmJkNTU2NzUwNDIzNmU0MTc3NGI2OTIxMjM1NzNjBGdwb3MDMTIEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dreal%2Bestate%2Bimage%26ei%3DUTF-8%26type%3DE210IN826G91826%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D12&w=474&h=266&imgurl=www.build-review.com%2Fwp-content%2Fuploads%2F2020%2F07%2Fluxury-real-estate.jpg&rurl=https%3A%2F%2Fwww.build-review.com%2Fvisionary-ai-platform-is-reinventing-luxury-real-estate-with-a-people-first-approach%2F&size=260.4KB&p=real+estate+image&oid=07bbd5567504236e41774b692123573c&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Visionary+AI+Platform+is+Reinventing+Luxury+Real+Estate+With+a+People+...&b=0&ni=160&no=12&ts=&tab=organic&sigr=4czBu3L_E8Uq&sigb=1s28qH2q_C5o&sigi=N0fSC5IJ0Pgn&sigt=O3RrOkQdRzeM&.crumb=yAxTQJ5/qFZ&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210IN826G91826"}
         alt="listing cover" 
         className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 
        transition-scale duration-300' />
        <div className='p-3  flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>{listing.name}</p>
          <div className='flex items-center gap-1'>
            <MdLocationOn className=' text-green-700'/>
            <p className='text-sm text-gray-600 truncate w-full'>{listing.address}</p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>{listing.description}</p>
          <p className='text-slate-500 mt-2 font-semibold '>
            $
            {listing.offer ? listing.discountPrice.toLocaleString('en-US'):listing.regularPrice.toLocaleString('en-US')}
            {listing.type==='rent' && '/month'}
          </p>
          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xs'>
              {listing.bedrooms > 1 ? `${listing.bedrooms} beds`: `${listing.bedrooms} bed`}
            </div>
            <div className='font-bold text-xs'>
              {listing.bathrooms > 1 ? `${listing.bathrooms} baths`: `${listing.bathrooms} baths`}
            </div>


          </div>

        </div>
      </Link>

    </div>
  )
}

export default ListingItem