import Image from "next/image";

export default function FileRows({postImages,postHeader}) {
  return (
    <div className='fileRowsCon'>        
    <div className='fileHeader'>{postHeader}</div>
    <div className='filmPosterCon'>
      {postImages.map((imageCur,index)=>{
          return <div className='filmPoster'>            
          <Image
              key={index}
              src={imageCur.image}
              alt={imageCur.alt}
              data-nimg="fill"                
          />
          </div>
      })
      }

    </div>        
    </div>
  )
}
