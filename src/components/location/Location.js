
export function showPosition() {
    return new Promise(function(resolve,reject){
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var positionInfo = 
                {latitude:position.coords.latitude,
                longitude: position.coords.longitude  };
                resolve(positionInfo);
            });
        }else{
            reject();
        }

    })
}

// exports.showPosition=showPosition;