const acfOptionsHandler = {
    pattern: "theme-wwt-settings",
    func: async ({ route, state, libraries }) => {
      const response = await libraries.source.api.get({
        endpoint: `/acf/v3/options/theme-wwt-settings`
      });
      const option = await response.json();
  
      const data = state.source.get(route);
      Object.assign(data, { ...option, isAcfOptionsPage: true });
    }
};

export default acfOptionsHandler;