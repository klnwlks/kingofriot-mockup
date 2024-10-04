import { Component } from "solid-js";

interface IProps {
  'img': string,
  'title': string,
  'deets': string
}

const Post: Component<IProps> = (props: IProps) => {
  return (
    <div class='rounded-lg w-full py-6 p-4 my-2'>
      <div class='h-[50vh] w-full'>
        <img class='object-cover h-full w-full' src={props.img} />
      </div>
      <h2 class='text-3xl py-7 pb-4 font-oswald font-bold text-[#FF001E]'> {props.title} </h2>
      <p class='text-xl'> {props.deets} </p>
    </div>
  )
}

export default Post