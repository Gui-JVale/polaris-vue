module.exports = {
    components: 'src/components/**/*.vue',
    ignore: [
        "**/components/PActionMenu/components/PActionMenuActions.vue",
        "**/components/PActionMenu/components/PActionMenuMenuAction.vue",
        "**/components/PActionMenu/components/PActionMenuMenuGroup.vue",
        "**/components/PActionMenu/components/PActionMenuRollupActions.vue",
        "**/components/PActionList/components/*",
        "**/components/PActionMenu/*",
        "**/components/PButton/utils/*",
        "**/components/PCard/",
        "**/components/PCard/PCardSection.vue",
        "**/components/PCard/PCardSubsection.vue",
        "**/components/PCard/PCardFooter.vue",
        "**/components/PCard/PCardHeader.vue",
        "**/components/PDropZone/PDropZone.vue",
        "**/components/PFilter/components/*",
        "**/components/PFormLayout/PFormLayoutGroupItemWrapper.vue",
        "**/components/PFormLayout/PFormLayoutItem.vue",
        "**/components/PChoice/PChoice.vue",
        "**/components/PConnected/*",
        "**/components/PDropZone/*",
        "**/components/PWrapper/PWrapper.vue",
        "**/components/POptionalTag/POptionalTag.vue",
        "**/components/PPageActions/PPageActions.vue",
        "**/components/PPopover/components/PPopoverOverlay.vue",
        "**/components/PPopover/components/PPositionedOverlay.vue",
        "**/components/PResourceList/components/*",
        "**/components/PTextField/components/PFieldResizer.vue",
        "**/components/PDataTable/PDataTableCell.vue",
        "**/components/PDataTable/PDataTableCell.vue",
        "**/components/PPage/components/PPageHeader.vue",
        "**/components/PPage/components/components/PPageHeaderTitle.vue",
        "**/components/PPagination/PPagination.vue",
        "**/components/PModal/components/*",
        "**/components/PTextField/components/PSpinner.vue",
        "**/components/PList/PListItem.vue",
        "**/components/POptionList/POptionsListCheckbox.vue",
        "**/components/POptionList/POptionsListOption.vue",
        "**/components/PSettingToggle/PSettingAction.vue",
        "**/components/PTabs/PPanel.vue",
        "**/components/PTabs/PTab.vue",
        "**/components/PTextField/components/PInput.vue",
    ],
    require: ['./src/scss/main.scss','./src/mixins/tooltip.js'],
    usageMode: 'expand',
    exampleMode: 'collapse',

};