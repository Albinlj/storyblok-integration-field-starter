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
// import { sampleResponse } from "./sampleResponse";

export default {
  props: {
    select: Function,
    close: Function,
  },
  mounted() {
    // this.select(sampleResponse);

    const ivOptions = {
      imageVaultUiUrl: "https://tobii.imagevault.app",
      publishingSource: "https://tobii.imagevault.app",

      mediaUrlBase: "https://tobii.imagevault.app",
      uiLang: "en",
      insertMode: 0, // Allows editing image before insert
      formatId: "1", // Always select full size image
      success: (result) => {
        console.log("result", result);
        this.select(result.response);
        // this.select(result.response);
      },
      close: () => {
        this.close();
      },
    };

    // eslint-disable-next-line no-undef
    const windowInserter = new ImageVault.InsertMediaWindow(
      ivOptions,
      "width=1366,height=768,resizable=yes,scrollbars"
    );
    windowInserter.openImageVault();

    // $("#insertMedia").imageVaultInsertMedia({
    //   ...ivOptions,
    //   publishingSource: "https://app.storyblok.com",
    // });
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
