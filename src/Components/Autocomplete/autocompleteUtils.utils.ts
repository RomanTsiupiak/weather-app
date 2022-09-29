export const autocompleteUtils = {
  // TODO: remove any after add types from API
  formatData: (data: any) => {
    return data.map((item: any, index: number) => ({ id: index, label: `${item.name}, ${item.state}` }));
  },
};
