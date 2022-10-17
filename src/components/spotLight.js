import * as THREE from 'three'
import * as dat from 'dat.gui'


export const spotLightII = (scene, W,distance,aperture, Px,Py,Pz, Dx,Dy,Dz,) => {
    const gui = new dat.GUI()
    const spotLight = new THREE.SpotLight(0xffffff, W, distance, Math.PI * aperture, 0.25, 3)
    // spotLight.quaternion.set(20,20,20)
    spotLight.position.set (Px, Py, Pz)
    spotLight.target.position.set (Dx,Dy,Dz)
    scene.add(spotLight)
    scene.add(spotLight.target)
    console.log('spot-target-position',spotLight.target.position);


    //Helpers
    const spotLightHelper = new THREE.SpotLightHelper(spotLight)
    spotLightHelper.position.copy(spotLight.position)
    window.requestAnimationFrame(() => {
    spotLightHelper.update()
    })
    scene.add(spotLightHelper)
    gui.add(spotLight.position, 'x').min(Px + -10).max( Px + 10).step(0.01).name('Eje X')
    gui.add(spotLight.position, 'y').min(Py + -10).max( Py + 10).step(0.01).name('Eje Y')
    gui.add(spotLight.position, 'z').min(Pz + -10).max( Pz + 10).step(0.01).name('Eje Z')

    gui.add(spotLight.target.position, 'x').min(Dx + -10).max( Dx + 10).step(0.01).name('Direccion X')
    gui.add(spotLight.target.position, 'y').min(Dy + -10).max( Dy + 10).step(0.01).name('Direccion Y')
    gui.add(spotLight.target.position, 'z').min(Dz + -10).max( Dz + 10).step(0.01).name('Direccion Z')


    gui.add(spotLightHelper, 'visible')
}