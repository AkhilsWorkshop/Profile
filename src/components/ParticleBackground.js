import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particles } from '../data/ParticlesConfig';

const ParticleBackground = () => {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };


    return (
        <div className='h-screen absolute'>
            <Particles
                id="tsparticles"
                init={particlesInit}

                options={particles}
            />
        </div>
    )
}

export default ParticleBackground
