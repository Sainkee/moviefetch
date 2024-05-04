import { Heart, Share2 ,MessageSquareText } from 'lucide-react';
export default function MovieCard(props) {
  return (
    <>
      <div
        className="h-[70vh] w-[80vw] bg-cover  text-white bg-center p-20 shadow-custom-shadow rounded-2xl  mx-auto relative "
        style={{ backgroundImage: `url(${props.image2})` }}
      >
        <div className=" absolute top-0 left-0 right-0 bottom-0 z-100 bg-gradient-to-r from-black/100 via-black/80 to-black/10     "></div>
        <div className="flex absolute top-0 left-0 bottom-0 right-0 p-10">
          <div className="flex flex-col w-full gap-10  ">
            <div className="h-[50%] gap-x-10  w-full flex">
              <img
                src={props.image}
                alt=""
                className=" object-contain border border-gray-700 "
              />
              <div className=" ">
                <h1 className="text-xl mb-1 md:text-3xl lg:text-4xl  text-neutral">
                  {props.name}
                </h1>

                <p className="text-blue-500"> {props.release}</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-sm text-neutral-500">{props.desc}</p>
            </div>
            <div className='flex gap-5 text-gray-500'>
              <Share2/>
              <Heart/>
              <MessageSquareText/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
