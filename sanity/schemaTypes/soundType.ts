import { defineField, defineType } from "sanity";

export default defineType({
  name: "sound",
  title: "Sound",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "file",
      title: "Audio File",
      type: "file",
      // accept: "audio/*",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      category: "category.name",
    },
    prepare(selection) {
      const { title, category } = selection;
      return {
        title: title,
        subtitle: category,
      };
    },
  },
});
