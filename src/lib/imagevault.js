export const fullSizeFormatId = 1;
export const thumbnailFormatId = 3193;

export const openImageVault = (callback) => {
  const ivUrl = "https://tobii.imagevault.app";

  const ivOptions = {
    imageVaultUiUrl: ivUrl,
    publishingSource: "tobii.com",
    publishDetails: {
      text: "Tobii Web through StoryBlok",
      url: "https://www.tobii.com",
    },
    additionalMetadataIds: "1082", //1082 is the ID for the field "AltText"
    mediaUrlBase: ivUrl,
    uiLang: "en",
    insertMode: 1, // Allows editing image before insert
    formatId: [fullSizeFormatId, thumbnailFormatId],
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
