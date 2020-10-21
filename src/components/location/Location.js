
export function showPosition() {
    return new Promise(function(resolve,reject){
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var positionInfo = "Your current position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
                resolve(positionInfo);
            });
        }else{
            reject("error");
        }

    })
}

// exports.showPosition=showPosition;