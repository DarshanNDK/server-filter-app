import { styleCreator } from 'src/helpers';
import ThemingStore from 'utils/ThemingStore';

const { spacing } = ThemingStore.currentTheme;

export default styleCreator({
  FilterSettingsScreen_searchBtn: {
    marginTop: spacing,
  },
  FilterSettingsScreen_paddedView: {
    height: 20,
  },
});
