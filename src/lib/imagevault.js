export const openImageVault = (callback) => {
  const ivUrl = "https://tobii.imagevault.app";

  const ivOptions = {
    imageVaultUiUrl: ivUrl,
    publishingSource: ivUrl,
    publishDetails: {
      text: "Tobii Web through StoryBlok",
      url: "https://www.tobii.com",
    },
    mediaUrlBase: ivUrl,
    uiLang: "en",
    insertMode: 1, // Allows editing image before insert
    formatId: "1", // Always select full size image
    success: (result) => {
      callback(result.response);
    },
  };

  // eslint-disable-next-line no-undef
  const windowInserter = new ImageVault.InsertMediaWindow(
    ivOptions,
    "width=1366,height=768,resizable=yes,scrollbars"
  );
  windowInserter.openImageVault();
};
