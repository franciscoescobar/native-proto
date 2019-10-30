import React from 'react';
import {Container, StyledPdf} from './styled';

const PdfView: () => React$Node = ({url}) => {

    const source = {
        uri: url || 'https://web.stanford.edu/group/moler/theses/JWGThesis.pdf',
        cache:true
    };
    return (
        <>
            <Container>
                <StyledPdf 
                    source={source}
                    onError={(error)=>{
                        console.log(error);
                    }}
                />
            </Container>
        </>
    );
};

export default PdfView;
