export function formdataGetters(data: FormData) {
  return {
    field: (name: string) => field(data, name),
    checkbox: (name: string) => checkbox(data, name),
  };
}

function field(data: FormData, name: string) {
  return data.get(name)?.toString() || undefined;
}

function checkbox(data: FormData, name: string) {
  return !!field(data, name);
}
