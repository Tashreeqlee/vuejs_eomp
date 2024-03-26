<template>
  <div class="container">
    <h2 class="display-2 text-animation">About Myself</h2>
    <div class="container-fluid m-2 p-5">
      <div class="row align-items-start">
        <div class="col-sm-4 col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
          <div class="">
            <img
              src="https://i.postimg.cc/vDRhHkwd/IMG-20230910-WA0041.jpg"
              alt="Tashreeq Lee"
              loading="lazy"
              class="img-fluid img-thumbnail"
              
            />
          </div>
        </div>
        <div class="col-sm-8 col-md-12 col-lg-6 border border-2 border-black-subtle">
          <div>
            <ul class="w-100 p-2" >
              <li>Date of Birth:<span class="dob">14 November 2002</span></li>
              <li>Location: Cape Town,South Africa</li>
              <li>Email: <span>tashyct14@gmail.com</span> </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1XmYbQepHjbfqiu6Hw7wWl_q-nOE-O-w2/edit?usp=drive_link&ouid=114154047130574667051&rtpof=true&sd=true"
                  class="btn btn-success"
                  target="_blank"
                  >Downnload and View CV</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text">
              I am all the way from Crawford, Cape town. I am an aspiring developer
        entering this journey and getting ready to become the best version of
        myself in this field. The journey in the tech industry started at a
        young age where breaking computers just to rebuild it again was one of
        the things i looked forward to doing most days. I love to enhance and
        better every environment I enter and am interested in improving myself
        in coding everyday.
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
  },
};
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

.text {
  font-family: 'Lemon', serif;
  font-weight: bolder;
}
.hobbies{
  font-family: "Bebas Neue", sans-serif;
}
</style>