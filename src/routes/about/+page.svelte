<script lang="ts">
  import Saos from "saos";
</script>

<div class="sm:grid sm:grid-cols-3 sm:gap-20">
  <div class="sm:col-span-1">
    <Saos once animation="{"from-left 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}">
      <section class="mt-10 text-sm font-bold uppercase">
        <img src="" alt="" class="h-96 w-full rounded-md bg-gray-500" />
        <h1 class="text-2xl text-right mt-10">2023 Goals</h1>
        <div class="border-t-2 border-black grid grid-cols-2 py-3">
          <div class="col-span-1">Fitness</div>
          <div class="col-span-1 text-right">182 Days</div>
        </div>
        <div class="border-t-2 border-black grid grid-cols-2 py-3">
          <div class="col-span-1">Reading</div>
          <div class="col-span-1 text-right">26 Books</div>
        </div>
        <div class="border-t-2 border-b-2 border-black grid grid-cols-2 py-3">
          <div class="col-span-1">AWS Certifications</div>
          <div class="col-span-1 text-right">6 Certs</div>
        </div>
      </section>
    </Saos>
  </div> 
  <div class="sm:col-span-2 mt-10">
    <Saos once animation="{"from-right 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both"}">
      <p class="mb-4">
        I'm a junior software developer with a passion for problem-solving and technology. I find the challenge of solving problems and the never-ending learning opportunities that come with working in technology to be incredibly satisfying. I have experience in few programming languages like JavaScript, Java, and C#, and I am constantly trying to expand my skill set by learning new technologies and programming languages.
      </p>
      <p class="my-4">
        In my free time, I enjoy reading, especially fantasy and science fiction. I find the imagination and world-building in these genres to be truly captivating. Recently, I've taken up cooking and have been having a blast experimenting with new recipes. I have found that cooking is a great way to unwind and create something delicious at the same time. I'm also making an effort to read more non-fiction and books about computer science to keep expanding my knowledge and learn more about the industry I'm in.
      </p>
      <p class="my-4">
        When it comes to video games, I'm a big fan of retro games like A Link to the Past and Super Mario World. I find the nostalgia and simplicity of these games to be incredibly enjoyable, and I think it's great to be able to play games that have stood the test of time. I also like to play some modern games, but I always come back to my favorites from the past.
      </p>
      <p class="my-4">
        Covid-19 put a bit of a damper on my fitness routine, but I'm determined to get back into it this year. I've set a goal to be active for at least 182 days this year, and I'm focusing on getting back into a consistent routine by incorporating different exercises like running, weightlifting, and yoga.
      </p>
      <p class="my-4">
        I'm also planning to get AWS certifications to expand my knowledge and skills in the field, as well as finishing my portfolio website. I believe that having a portfolio website will help me showcase my work and improve my chances of landing my dream job. I'm excited for what the year has in store and look forward to continuing to grow as a developer.
      </p>  
    </Saos>
  </div>
</div>

<style>
  @keyframes -global-from-left {
    0% {
      transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }

  @keyframes -global-from-right {
    0% {
      transform: rotateX(50deg) translateX(100vw) skewX(-50deg);
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }
</style>
