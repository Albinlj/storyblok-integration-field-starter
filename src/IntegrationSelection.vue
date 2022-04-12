<template>
  <div class="integration-selection">
    <iframe id="insertMedia"></iframe>
    <div
      class="uk-flex uk-flex-middle util__grow integration-selection__header"
    >
      <div class="uk-position-relative uk-text-nowrap">
        <div slot="actions">
          <a class="uk-button" @click.prevent="close">
            <i class="uk-icon-close"></i> Close Selection
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sampleResponse } from "./sampleResponse";

export default {
  props: {
    select: Function,
    close: Function,
  },
  mounted() {
    this.select(sampleResponse);

    $("#insertMedia").imageVaultInsertMedia({
      imageVaultUiUrl: "https://tobii.imagevault.app",
      publishingSource: "https://app.storyblok.com",

      uiLang: "en",
      insertMode: 1, // Allows editing image before insert
      formatId: "1", // Always select full size image
      onSuccess: (result) => {
        console.log(result);
        this.select(result.response);
      },
      onClose: () => {
        this.close();
      },
      // publishDetails: { text: "t", url: "url" },
    });
  },
};
</script>

<style lang="scss">
#insertMedia {
  width: 100%;
  /* height: 100%; */
  height: 500px;
}
</style>
