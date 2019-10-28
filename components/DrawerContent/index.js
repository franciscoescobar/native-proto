import React from 'react';
import {Container, TopDrawer, BottomDrawer, StyledTitle} from './styled';
import List from '../List';

const DrawerContent = () => {
    return (
    <>
        <Container>
            <TopDrawer source={{uri: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?cs=srgb&dl=35mm-aerial-aerial-shot-1105766.jpg&fm=jpg"}}/>
            <BottomDrawer>
                <List data={[{key: "Descargar archivos", icon: "download", color: "#32cb00" }, {key: "Configuración", icon:"cog", color: "#404040"}] } />
                <StyledTitle>Archivos recientes</StyledTitle>
                <List data={[{key: "Plano.pdf"}, {key: "Planta.pdf"}, {key: "Arbol.pdf"},{key: "Hongo.pdf"}, {key: "Bacteria.pdf"}, {key: "Vertebrados.pdf"},{key: "Invertebrados.pdf"}, {key: "Aves.pdf"}, {key: "Peces.pdf"},{key: "Reptiles.pdf"}, {key: "Mamiferos.pdf"}, {key: "Anfibios.pdf"}]}/>
            </BottomDrawer>
        </Container>
    </>);
}


export default DrawerContent;