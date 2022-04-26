<template>
  <div class="integration">
    <IntegrationItem v-if="model.item" :item="model.item"></IntegrationItem>
    <button
      class="uk-button uk-width-1-1 uk-margin-small-top"
      @click.prevent="openImageVault"
    >
      Open ImageVault
    </button>
    <button
      class="uk-button uk-width-1-1 uk-margin-small-top"
      @click.prevent="clearItem"
    >
      Clear
    </button>
  </div>
</template>

<script>
import IntegrationItem from "./IntegrationItem";
import { openImageVault } from "./lib/imagevault";

export default {
  mixins: [window.Storyblok.plugin],
  methods: {
    initWith() {
      return {
        // needs to be equal to your storyblok plugin name
        plugin: "image-vault",
        item: null,
      };
    },
    openImageVault() {
      openImageVault((result) => (this.model.item = result));
    },
    clearItem() {
      this.model.item = null;
    },
  },
  components: {
    IntegrationItem,
  },
  watch: {
    model: {
      handler(value) {
        this.$emit("changed-model", value);
      },
      deep: true,
    },
  },
};
</script>
