import type { Component } from 'solid-js';
import { For } from 'solid-js';
import Post from './components/Post'

const App: Component = () => {

  let scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView(true)
  }

  return (
    <div class='overflow-x-hidden'>
      <div id='nav' class='w-[99vw] h-[8vh] justify-between bg-black text-white p-0.5 px-1 items-center pr-8 font-oswald flex'>
        <div class='h-full flex items-center m-2'>
          <p class='pl-4 text-3xl text-[#FF3336] font-italic'>KING OF RIOT</p>

        </div>

        <ul class='hidden md:flex child:px-2 uppercase text-[#FF001E]'>
          <a class='justify-between bg-black p-0.5 px-1 items-center pr-8' onClick={() => scrollTo('about')}>about</a>
          <a class='justify-between bg-black p-0.5 px-1 items-center pr-8' onClick={() => scrollTo('events')}>events</a>
          <a class='justify-between bg-black p-0.5 px-1 items-center pr-8' onClick={() => scrollTo('gallery')}>highlights</a>
          <a class='justify-between bg-black p-0.5 px-1 items-center pr-8' onClick={() => scrollTo('bottom')}>contact</a>
        </ul>
      </div>

      <div id='hero' class='w-[99vw] h-screen md:h-[95vh] relative object-cover'>
        <video autoplay muted preload='metadata' loop id='vid' class='absolute h-full w-full object-cover' poster='vid1.png'>
          <source src='vid.mp4#t=0.1' type='video/mp4'/>
        </video>

        <div class='text-center relative top-[40%] md:top-[35%] text-white tracking-wider font-oswald'>
          <h1 class='text-5xl md:text-8xl pb-5 font-oswald'>CLAIM THE CROWN.</h1>
          <h2 class='text-lg mx-4 md:mx-0 md:text-2xl'>KING OF RIOT 2024. THE HAMPSTONS CALIRAYA. NOV 28 - DEC 1.</h2>

          <div class='transition-transform transform hover:scale-125 pt-8'>
            <a href='https://web.facebook.com/KingOfRIOT2021' class='p-2 px-4 border-2 text-4xl bold'>FIND US.</a>
          </div>
        </div>
      </div>

      <div id='about' class='w-screen bg-[#F5F5F5] relative'>
        <div class='absolute h-full w-full'>
          <img src='overlay.png' class='opacity-5 h-full'/>

        </div>
        <div id='about0' class='flex items-center justify-center text-center content-center flex-wrap child:w-screen'>
          <div id='icon' class='pt-16 h-[30vh] w-40 mb-8 flex justify-center'>
            <img class='w-1/2 h-full object-contain' src='logo.png'/>
          </div>
          <h2 class='text-2xl md:text-4xl mb-4 text-[#FF001E] font-bold uppercase font-oswald tracking-wider'> WILL YOU BE THE NEXT KING?</h2>
          <p class='pb-10 text-md md:text-lg mx-[10vw] md:mx-[20vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit mi vel lacus ornare rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec sed odio ut metus sollicitudin pharetra. Donec varius nisi at ipsum consectetur, a faucibus mi consectetur. Integer blandit ex sit amet cursus tempus. Mauris in erat ligula. Etiam eget orci elit. Nunc sem ante, rhoncus vitae vestibulum sit amet, vulputate efficitur nunc. Donec nec nibh in leo sagittis eleifend sit amet pellentesque est.</p>
        </div>

        <div id='about1' class='flex md:flex-row flex-col-reverse md:child:w-1/2 '>
          <div id='text' class='md:p-16 p-8 md:mr-16 text-md md:text-lg flex flex-col justify-center'>
            <p>Pellentesque commodo imperdiet commodo. Curabitur vel erat non lectus varius semper. Morbi eu accumsan erat. Aliquam euismod sodales massa at egestas. Maecenas lacinia cursus tortor, ut finibus ante. Duis maximus nisl et quam ornare, et lobortis lacus vehicula. Duis tristique aliquet mauris, fermentum posuere mi eleifend in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </p>
            <br />
            <p>Fusce quis nisi placerat, bibendum massa eget, tincidunt quam. Integer ac magna quis dui blandit laoreet. Ut lobortis rutrum nulla vel vehicula. Pellentesque massa massa, fermentum vulputate libero vitae, consequat pellentesque lectus. Proin rhoncus imperdiet ultricies. Sed tortor ipsum, mollis quis ultricies ac, vulputate a risus. Sed eu velit dictum, rutrum sapien et, fermentum massa. Nullam sollicitudin nisi ac augue pulvinar congue. Pellentesque et arcu sit amet libero tristique rhoncus. 

</p>

          </div>

          <div id='img' class='md:h-[90vh] h-[40vh]'>
            <video autoplay muted preload='metadata' loop id='vid' class='h-full w-full object-cover' poster='images/vid2.png'>
              <source src='vid2.mp4#t=0.1' type='video/mp4'/>
            </video>
          </div>
        </div>
      </div>

      <div id='events' class='bg-[#F5F5F5] relative'>
        <div class='absolute h-full w-full'>
          <img src='overlay.png' class='opacity-5 h-full'/>

        </div>
        <h1 class='text-center text-4xl uppercase font-bold pt-8 bg-[#f5f5f5] font-oswald tracking-wider text-[#FF001E]'> recent events</h1>
        <div id='container' class='flex md:p-16 flex-col'>
          <Post img='images/2023.jpg' title='KING OF RIOT 2023' deets='
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper pharetra aliquet. Pellentesque ut neque gravida, congue arcu eu, posuere eros. In libero orci, suscipit eget dictum sed, facilisis eget lorem.'/>
          <Post img='images/2022.jpg' title='KING OF RIOT 2022' deets='
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper pharetra aliquet. Pellentesque ut neque gravida, congue arcu eu, posuere eros. In libero orci, suscipit eget dictum sed, facilisis eget lorem.'/>
          <Post img='images/2021.jpg' title='KING OF RIOT 2021' deets='
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper pharetra aliquet. Pellentesque ut neque gravida, congue arcu eu, posuere eros. In libero orci, suscipit eget dictum sed, facilisis eget lorem.'/>
        </div>

      </div>

      <div id='gallery' class='md:p-8 p-4 bg-[#222]'>
        <h1 class='text-center text-4xl pb-8 uppercase text-[#FF001E] tracking-wider font-oswald'> highlights </h1>
        <div id='container' class='flex flex-wrap w-full justify-center child:m-1 md:child:m-2'>

          {Array.from({length: 18}).map((_, i) => 
            {if (i % 4 == 0) {
              return (<img src={`images/b(${i+1}).jpg`} class='w-1/2 h-45 object-cover transition-transform transform hover:scale-105 hover:shadow-lg'/>)
            } else if (i == 10) {
              return (<img src={`images/b(${i+1}).jpg`} class='w-1/2 h-45 object-cover transition-transform transform hover:scale-105 hover:shadow-lg'/>)
            } else {
              return (<img src={`images/b(${i+1}).jpg`} class='w-1/5 h-45 object-cover transition-transform transform hover:scale-105 hover:shadow-lg'/>)

            }})}
        </div>
      </div>

      <div id='sponsors' class='bg-[#202020] text-[#FF001E] p-8'>
        <h1 class='text-center text-4xl pb-8 uppercase font-oswald tracking-wider'> in partnership with</h1>
        <div id='contaimer' class='flex flex-wrap justify-center md:mx-12'>
          {Array.from({length: 12}).map((_, i) => 
            <img src={`sponsors/a(${i + 1}).png`} class='object-contain h-10 md:h-20 md:px-4 my-2 mx-2 md:py-2 '/>
          )}
        </div>
      </div>

      <div id='bottom' class='h-[30vh] w-screen bg-[#121212] text-white flex justify-between p-4 md:p-8 md:px-16 md:items-center'>
        <div id='left'>
          <img id='logo' />
          <p class='text-3xl md:text-5xl font-oswald uppercase tracking-wider'>king of riot ©2024</p>
          
        </div>

        <div id='right flex flex-col uppercase pr-0'>
          <p class='text-right text-3xl uppercase text-[#FF001E] font-oswald'>contacts</p>
          <ul>
            <li>
              <a href='' class='uppercase'> FACEBOOK </a>
            </li>
            <li>
              <a href='blahblahnblah' class='uppercase'> NUMBER</a>
            </li>
            <li>
              <a href='blahblahnblah' class='uppercase'> EMAIL </a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default App;
