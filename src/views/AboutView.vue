<template>
  <div class="container">
    <h2 class="display-2 text-animation">About Myself</h2>
    <!-- <div class="row">
      <div id="animation">
        <img
          src="https://i.postimg.cc/vDRhHkwd/IMG-20230910-WA0041.jpg"
          class="img-animation infinite rounded-pill img-fluid"
          alt="Tashreeq img"
          id="animated-img1"
        />
      </div>

      <p class="text-center">
        Born on November 14th 2002 in Cape Town, South Africa.
      </p>
      <p class="text-center fs-2 fw-bolder">
        I am Tashreeq Lee.
      </p>
      <p class="text-center">
        I am all the way from Crawford, Cape town. I am an aspiring developer
        entering this journey and getting ready to become the best version of
        myself in this field. The journey in the tech industry started at a
        young age where breaking computers just to rebuild it again was one of
        the things i looked forward to doing most days. I love to enhance and
        better every environment I enter and am interested in improving myself
        in coding everyday.
      </p>
    </div> -->
    <div class="container-fluid m-2 p-5">
      <div class="row align-items-start">
        <div class="col-sm-4 col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
          <div class="d-flex justify-content-center">
            <img
              src="https://i.postimg.cc/vDRhHkwd/IMG-20230910-WA0041.jpg"
              alt="Tashreeq Lee"
              loading="lazy"
              class="img-fluid"
              
            />
          </div>
        </div>
        <div class="col-sm-8 col-md-12 col-lg-6 border border-2 border-black-subtle">
          <div class="d-flex justify-content-center w-100 p-0">
            <h1 class="aboutHeading">About Myself</h1>
          </div>
          <div>
            <ul class="w-100 p-2" >
              <li>Date of Birth: 14 November 2002</li>
              <li>Location: Cape Town,South Africa</li>
              <li>Email: <span>tashyct14@gmail.com</span> </li>
              <li>
                <a
                  href=""
                  class="btn btn-success"
                  >Download CV</a
                >
              </li>
            </ul>
          </div>
          <div>
            <p>
              I am all the way from Crawford, Cape town. I am an aspiring developer
        entering this journey and getting ready to become the best version of
        myself in this field. The journey in the tech industry started at a
        young age where breaking computers just to rebuild it again was one of
        the things i looked forward to doing most days. I love to enhance and
        better every environment I enter and am interested in improving myself
        in coding everyday.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.text-animation {
  overflow: hidden;
  animation: typing 3s backwards;
  white-space: nowrap;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
/*image animation*/
@keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

#animated-img1 {
  animation: slide-in 3s;
}

</style>