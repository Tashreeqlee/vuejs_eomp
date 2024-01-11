<template>
    <div class="container-bg m-2 p-2 d-block text-center">
      <div class="heading1">
        <img
              src="https://i.postimg.cc/vDRhHkwd/IMG-20230910-WA0041.jpg"
              alt="Tashreeq Lee"
              loading="lazy"
              class="img-fluid"
              
            />
        <h1 class="heading">Tashreeq Lee</h1>
      </div>
      <div class="text-home">
        <p class="text">An Aspiring Web Developer</p>
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
.heading1 {
  padding-top: 350px;
  font-size: 50px;
}

.text-home {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 50px;
}

.text {
  width: 24ch;
  animation: typing 2.3s steps(14), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid;
  font-size: 30px;
}

@keyframes typing {
  from {
    width: 0
  }
}

@keyframes blink {
  50% {
    border-color: transparent
  }
}
</style>
