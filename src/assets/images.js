const files = import.meta.glob("./image/*.{jpg,png}", {
  eager: true,
  query: "?url",
  import: "default",
});

export const img = (name) => files[`./image/${name}`];
export const logo = `${import.meta.env.BASE_URL}logo.png`;