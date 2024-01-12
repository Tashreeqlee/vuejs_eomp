<template>
    <!-- <div class="container-bg m-2 p-2 d-block text-center">
      <div class="heading1"> -->
        <!-- <img
              src="https://i.postimg.cc/vDRhHkwd/IMG-20230910-WA0041.jpg"
              alt="Tashreeq Lee"
              loading="lazy"
              class="img-fluid"
              
            /> -->
        <!-- <h1 class="heading">Tashreeq Lee</h1>
      </div>
      <div class="text-home">
        <p class="text">An Aspiring Web Developer</p>
      </div>
    </div> -->
    <div class="row align-items-center m-2">
          <div class="container-fluid border-2 p-5">
            <div class="container-md p-2 border rounded-2 text-center d-flex justify-content-center align-items-center">
              <div class="card w-100 border-2 p-5">
                <div class="p-5">
                  <div class="landing">
                    <h2>Well Hello there I'm Tashreeq Lee!, welcome to my portfolio!!</h2>                  
                  </div>
                  
                  <div class="p-5 animate__animated animate__fadeIn animate__delay-3s">
                    <h2 class="d-flex justify-content-center align-items-center text-center">I am an aspiring developer</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
</template>

<script>


export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.landing h2 {
    display: flex;
    align-content: center;
    text-align: center;
    justify-content: center;
    color: purple;
    font-family: 'Lemon', serif;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    
    animation: typing 3s steps(30, end),blink-caret .5s step-end infinite;
  }
  
  /* The typing effect */
  @keyframes typing {
    from { width: 0 }
    to { width: 100%;}
  }
  .landing{
    transition: transform 0.3s ease;
  }
  .landing:hover {
    transform: scale(1.1);
  }
  
  
</style>
