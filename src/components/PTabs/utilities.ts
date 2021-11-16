import { TabDescriptor } from '@/types/tabs/';

export function getVisibleAndHiddenTabIndices(
  tabs: TabDescriptor[],
  selected: number,
  disclosureWidth: number,
  tabWidths: number[],
  containerWidth: number,
) {
  const sumTabWidths = tabWidths.reduce((sum, width) => sum + width, 0);
  const arrayOfTabIndices = tabs.map((_, index) => {
    return index;
  });

  const visibleTabs: number[] = [];
  const hiddenTabs: number[] = [];

  if (containerWidth > sumTabWidths) {
    visibleTabs.push(...arrayOfTabIndices);
  } else {
    if (selected === null) {
      selected = 0;
    }
    visibleTabs.push(selected);

    let tabListWidth = tabWidths[selected];

    arrayOfTabIndices.forEach((currentTabIndex) => {
      if (currentTabIndex !== selected) {
        const currentTabWidth = tabWidths[currentTabIndex];

        if (
          tabListWidth + currentTabWidth >=
          containerWidth - disclosureWidth
        ) {
          hiddenTabs.push(currentTabIndex);
          return;
        }

        visibleTabs.push(currentTabIndex);
        tabListWidth += currentTabWidth;
      }
    });
  }

  return {
    visibleTabs,
    hiddenTabs,
  };
}