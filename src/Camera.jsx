import React, { useEffect, useState } from 'react';
import Room from './Room';
import { Canvas } from '@react-three/fiber';

export default function Camera() {
    const [cameraPosition, setCameraPosition] = useState([-3, 1, 25]);

    // Mettez à jour la position de la caméra en fonction de la taille de l'écran
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 1000) {
                setCameraPosition([1, 5, 36]);  // Position par défaut pour les écrans plus petits
            } else {
                setCameraPosition([-3, 1, 25]);  // Ajustez la position pour les écrans plus larges
            }
        };

        // Ajoutez un écouteur d'événement pour la taille de l'écran
        window.addEventListener("resize", handleResize);

        // Appelez la fonction une fois au chargement pour définir la position initiale
        handleResize();

        // Nettoyez l'écouteur d'événement lorsque le composant est démonté
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <Canvas
                className="r3f"
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: cameraPosition
                }}
            >
                <Room />
            </Canvas>
        </>
    );
}