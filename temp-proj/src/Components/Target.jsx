// Uncomment these imports when re-enabling the model:
// import { useGLTF } from "@react-three/drei";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

const Target = (props) => {
    // const targetRef = useRef();
    
    // Temporarily disabled - Supabase URL is not accessible
    // Replace with a local model path when available, e.g.:
    // const { scene } = useGLTF('models/target-stand.glb');
    
    // For now, return null to prevent the error
    // Uncomment and modify the code below when you have a valid model:
    
    // const { scene } = useGLTF(
    //     "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
    // );

    // useGSAP(() => {
    //     gsap.to(targetRef.current.position, {
    //         y: targetRef.current.position.y + 0.5,
    //         duration: 1.5,
    //         repeat: -1,
    //         yoyo: true,
    //     });
    // });

    // return (
    //     <mesh {...props} ref={targetRef} >
    //         <primitive object={scene} />
    //     </mesh>
    // );
    
    return null;
};

export default Target;
