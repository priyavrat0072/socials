export const getUserImageSrc=(imagePath)=>{
    if(imagePath){
        return {uri:imagePath}
    }else{
        return require('../assets/images/userImageReal.jpg')
    }
}