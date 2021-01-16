<template>
  <div class="projects__container" id="Mes-projets">
    <div class="h-full main__container">
      <Title>Mes projets</Title>
      <div class="projects__tags__container">
        <Tag>Web</Tag>
        <Tag>Design UI</Tag>
        <Tag>Logos</Tag>
      </div>
      <div class="projects__items__container">
        <SingleProject
          v-for="(item, i) in list"
          :key="i"
          title="KDPD"
          projectType="Site web statique"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum quam neque vel turpis blandit lacus quam. Neque ipsum volutpat amet dis. Scelerisque amet tincidunt tempor."
        >
          <img src="../assets/img/kdpd.png" alt="" />
        </SingleProject>
      </div>
    </div>
    <div class="projects__bg">
      <img src="../assets/img/Waves.svg" class="projects__image" />
    </div>
  </div>
</template>

<script>
import Tag from "./Tag.vue";
import Title from "./Title.vue";
import SingleProject from "./SingleProject.vue";
export default {
  setup() {
    const list = [1, 2, 3];

    return { list };
  },
  components: { Title, Tag, SingleProject },
};
</script>
