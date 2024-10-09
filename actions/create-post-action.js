export function CreatePost(formData) {
  const title = formData.get("title");
  const content = formData.get("content");
  const tags = formData.get("tags");

  let errors = {};

  if (title.trim() === "") {
    return {
      errors: {
        title: "Title is required",
      },
    };
  }

  if (content.trim() === "") {
    return {
      errors: {
        content: "Content is required",
      },
    };
  }

  if (tags.trim().join(" - ")) {
    return {
      errors: {
        content: "Tags is required",
      },
    };
  }
}
