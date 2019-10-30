import React from 'react';
import { StyledText, StyledView, StyledIcon, StyledFlatList, StyledTouchable, Divider } from './styled';
const List: () => React$Node = ({data, onItemPress}) => {
    
    return (
        <>
        <StyledView>
            <StyledFlatList 
                data={ data || [
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
                renderItem={({item}) => 
                    <StyledTouchable 
                        onPress = {() => onItemPress(item)}
                        >
                        <StyledIcon 
                            name={item.icon || "file-pdf-o"} 
                            size={item.size || 18 } 
                            color={item.color || "#ff4c4c"} 
                            />
                        <StyledText>{item.key}</StyledText>
                    </StyledTouchable>
                }
            />
            <Divider />
        </StyledView>
        </>
    );
};

export default List;
