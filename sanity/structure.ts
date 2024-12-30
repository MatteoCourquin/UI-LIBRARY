import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("sound").title("SOUNDS"),
      S.documentTypeListItem("category").title("CATEGORIES"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() && !["sound", "category"].includes(item.getId()!),
      ),
    ]);
