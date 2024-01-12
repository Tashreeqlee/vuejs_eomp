<template>
    <div class="row align-items-center m-2">
            <div class="container-fluid-md p-2 border rounded-2 text-center bg-transparent">
              <div class="card bg-transparent">
                  <div class="landing mb-5">
                    <h2>Well Hello there I'm Tashreeq Lee, welcome to my portfolio!</h2>                  
                  </div>
                  
                  <div class="d-flex justify-content-center align-items-center text-center">
                    <img
              src="https://i.postimg.cc/vDRhHkwd/IMG-20230910-WA0041.jpg"
              alt="Tashreeq Lee"
              loading="lazy"
              class="img-fluid img-thumbnail"
              
            />
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
    font-weight: bold;
    color: rgb(3, 221, 3);
    font-family: 'Lemon', serif;
    overflow: hidden;
    white-space: nowrap; 
    margin: 0 auto; 
    letter-spacing: .15em; 
    
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
  @media screen {
  .landing {
    display: block;
  }
}

  
  
  
</style>
