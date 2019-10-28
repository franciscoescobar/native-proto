import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

export const StyledIcon = styled(Icon)`
    position: relative;
    padding: 5%;
    padding-right: 15%;
`;
export const StyledTouchable = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: white;
    height: 52px;
    border-bottom-width: 1px;
    border-bottom-color: black;
`;
export const StyledText = styled.Text`
    color: #404040;
    text-align: center;
    font-size: 16px;    
`;


export const StyledView = styled.View`
`;

export const StyledFlatList = styled.FlatList`
`;