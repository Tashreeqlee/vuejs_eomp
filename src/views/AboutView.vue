<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2 text-animation">About Myself</h2>
    </div>
    <div class="container-fluid">
      <img
        src="https://i.postimg.cc/PJmL63jN/IMG-20230910-WA0041.jpg"
        alt="Tashreeq Lee"
        class="aboutImg img-fluid"
      />
    </div>
    <div class="container-fluid">
      <p>
        I am Tashreeq Lee all the way from Crawford, Cape town. I am an aspiring developer entering this journey and getting ready to become the best version of myself in this field.
                    The journey in the tech industry started at a young age where breaking computers just to rebuild it again was one of the things i looked forward to doing most days.
                    I love to enhance and better every environment I enter and am interested in improving myself in coding everyday.
      </p>
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
</style>