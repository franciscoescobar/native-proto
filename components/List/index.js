import React from 'react';
import {Linking} from 'react-native';
import {StyledText, StyledView, StyledIcon, StyledFlatList, StyledTouchable} from './styled';
const List: () => React$Node = ({data}) => {
    const url = "https://www.wikipedia.org/";
    const handleOnItemPress = () => {
        if(data.length > 3)
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    }
    return (
        <>
        <StyledView>
            <StyledFlatList data={ data || [
                {key: 'Devin.pdf'},
                {key: 'Dan.pdf'},
                {key: 'Dominic.pdf'},
                {key: 'Jackson.pdf'},
                {key: 'James.pdf'},
                {key: 'Joel.pdf'},
                {key: 'John.pdf'},
                {key: 'Jillian.pdf'},
                {key: 'Jimmy.pdf'},
                {key: 'Julie.pdf'},
            ]}
            renderItem={({item}) => <StyledTouchable onPress={handleOnItemPress}><StyledIcon name={item.icon || "file-pdf-o"} size={18} color={item.color || "#ff0000"} /><StyledText>{item.key}</StyledText></StyledTouchable>}
            />
            </StyledView>
        </>
    );
};

export default List;
