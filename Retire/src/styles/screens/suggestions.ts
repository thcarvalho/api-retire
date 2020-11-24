import styled from 'styled-components/native';
import colors from '../colors';

export const MapInputBlock = styled.View`
  position: absolute;
  bottom: 19px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MapInput = styled.TextInput`
  width: 305px;
  height: 67px;
  border-radius: 20px;
  background-color: #fff;
  padding-left: 10px;
  elevation: 3;
  font-size: 17px;
`;

export const ConfirmFab = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${colors.second_green};

  width: 67px;
  height: 67px;
  border-radius: 50px;

  margin-left: 6px;
  elevation: 5;
`;

export const AbsoluteConfirmFab = styled(ConfirmFab)`
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

export const InputBlock = styled.View`
  flex-direction: row;
  align-items: center;

  border-bottom-color: ${colors.main_green};
  border-bottom-width: 1px;

  width: 332px;
  height: 38px;
`;

export const StyledInput = styled.TextInput`
  margin-left: 10px;
  font-size: 16px;
  width: 100%;
  color: ${colors.main_green};
`;

export const AddImage = styled.TouchableOpacity`
  width: 311px;
  height: 180px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;

  border-width: 1px;
  border-color: ${colors.main_green};
  border-radius: 14px;

  background-color: ${colors.second_grey};
`;

export const AddImageText = styled.Text`
  color: ${colors.main_green};
`;
