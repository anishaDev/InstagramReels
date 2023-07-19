import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  FONT_SIZE_XXS,
  POPPINS_BOLD,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  STANDARD_BORDER_RADIUS,
  STANDARD_FLEX,
  STANDARD_PRODUCT_IMAGE_WRAPPER_SIZE,
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_WRAPPER_SIZE,
  STANDARD_PRODUCT_CARD_SIZE,
  STANDARD_VECTOR_ICON_SIZE,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
} from '../../config/Constants';
import {scale} from 'react-native-size-matters';

// Creating & exporting stylesheet
export default StyleSheet.create({
  listContainer: {
    paddingHorizontal: STANDARD_SPACING,
    paddingTop: STANDARD_SPACING * 3,
  },
  cardContainer: {
    flex: STANDARD_PRODUCT_CARD_SIZE,
    borderRadius: STANDARD_BORDER_RADIUS,
    padding: STANDARD_SPACING,
    marginBottom: STANDARD_SPACING * 3,
    marginHorizontal: STANDARD_SPACING * 2,
    elevation: 4,
  },

  address: {
    fontSize: FONT_SIZE_SM,
    fontFamily: POPPINS_MEDIUM,
  },
  icon: {
    width: STANDARD_VECTOR_ICON_SIZE,
    height: STANDARD_VECTOR_ICON_SIZE,
  },
  customerName1: {
    fontSize: FONT_SIZE_SM,
    fontFamily: POPPINS_BOLD,
    marginTop: STANDARD_SPACING,
  },
  customerName: {
    fontSize: FONT_SIZE_SM,
    fontFamily: POPPINS_MEDIUM,
    marginTop: STANDARD_SPACING,
  },
  jobType1: {
    fontSize: FONT_SIZE_SM,
    fontFamily:  POPPINS_BOLD,
  },
  jobType: {
    fontSize: FONT_SIZE_SM,
    fontFamily: POPPINS_MEDIUM,
  },
  rowView: {
    flexDirection: 'row',
  },
  jobStatus1: {
    fontSize: FONT_SIZE_SM,
    fontFamily: POPPINS_BOLD,
    marginTop: STANDARD_SPACING,
  },
  jobStatus: {
    fontSize: FONT_SIZE_SM,
    fontFamily: POPPINS_MEDIUM,
    marginTop: STANDARD_SPACING,
    height: SCREEN_HEIGHT * 0.04,
    width: SCREEN_WIDTH * 0.4,
    borderRadius: STANDARD_BORDER_RADIUS * 3,
    paddingHorizontal: STANDARD_SPACING * 2,
  },


  unreadMessageIcon: {
    width: STANDARD_VECTOR_ICON_SIZE,
    height: STANDARD_VECTOR_ICON_SIZE,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  quote1: {
    fontSize: FONT_SIZE_SM,
    fontFamily: POPPINS_BOLD,
    marginTop: STANDARD_SPACING,
  },
  quote: {
    fontSize: FONT_SIZE_SM,
    fontFamily: POPPINS_MEDIUM,
    marginTop: STANDARD_SPACING,
  },
  statusIconsContainer: {
    flexDirection: 'row',
    marginTop: STANDARD_SPACING,
  },
  statusIcon: {
    width: STANDARD_VECTOR_ICON_SIZE,
    height: STANDARD_VECTOR_ICON_SIZE,
    marginRight: STANDARD_SPACING,
  },
  statusiconView:{
    flexDirection:'row'
  },
  createdDate1: {
    fontSize:  FONT_SIZE_SM,
    fontFamily:POPPINS_BOLD,
    marginTop: STANDARD_SPACING,
  },
  createdDate: {
    fontSize:  FONT_SIZE_SM,
    fontFamily: POPPINS_MEDIUM,
    marginTop: STANDARD_SPACING,
  },
  nextDeadlineDate: {
    fontSize:  FONT_SIZE_SM,
    fontFamily: POPPINS_MEDIUM,
    marginTop: STANDARD_SPACING,
  },

});
