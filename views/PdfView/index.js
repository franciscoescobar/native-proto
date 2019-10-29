import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';
const PdfView: () => React$Node = ({url}) => {

    const source = {uri: url || 'https://web.stanford.edu/group/moler/theses/JWGThesis.pdf',cache:true};

    return (
        <>
            <View style={styles.container}>
                <Pdf 
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});
export default PdfView;
