<template>
  <div class="flip__card">
    <div class="flip__card__inner">
      <div class="flip__card__front">
        <slot></slot>
      </div>
      <div class="flip__card__back">
        <div class="content">
          <h3 class="text-34">{{ title }}</h3>
          <p class="text-21">{{ projectType }}</p>
          <p class="text-16">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "projectType", "image"],
};
</script>

<style scoped>
.flip__card {
  height: 300px;
  width: 80%;
  margin: 0 auto;
}
.flip__card__inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.65s cubic-bezier(0.15, 0.37, 0.73, 1.34);
  transform-style: preserve-3d;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  background: white;
  border-radius: 5px;
}

.flip__card__front img {
  object-fit: cover;
}

.flip__card__front,
.flip__card__back {
  border-radius: 5px;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
}

.flip__card__back {
  transform: rotateX(180deg);
  display: flex;
  flex-direction: column;
  justify-content: top;
}
.flip__card__back h3 {
  margin-top: 30px;
}
.flip__card__back p:nth-child(3) {
  margin-top: 20px;
  text-align: left;
}

.flip__card__back .content{
  width: 70%;
  margin: 0 auto;
}

.flip__card:hover .flip__card__inner {
  transform: rotateX(180deg) ;
}
</style>
